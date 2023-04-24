import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProviders';

 
const SiginUp = () => {
    const {user,  createUser } = useContext(AuthContext);
    console.log(user)
    console.log(createUser)
    // useState 
    const [error, setError] = useState('');

    // handleSignInSubmit
    const handleSignInSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,name, password, confirm)
        //password condition
        form.reset();
       if(password !== confirm){
        setError('Your password not match')
        return
       }
       else if (password.length < 6){
        setError('password must be 6 charecter')
        return
       }
    // create user section
    createUser(email,password)
    .then(result =>{
        const lodeUser = result.user;
        console.log(lodeUser)
        form.reset()
    })
    .catch(error =>{
        console.log(error)
    })

    }
    return (
        <div className='form-container'>
            <h2>Please sign up ?</h2>
           <form onSubmit={handleSignInSubmit}>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" placeholder='name' required/>

  <label htmlFor="email">Email:</label>
  <input type="email"  placeholder='email' name="email" required/>

  <label htmlFor="password">Password:</label>
  <input type="password"   placeholder='password' name="password" required/>

  <label htmlFor="confirm"> Confirm Password:</label>
  <input type="password"   placeholder='confrom-password' name="confirm" required/>
<p className='text-error'>{error}</p>
  <button type="submit">Sign IN</button>
  <p><small>Alredy heven Account? <Link to='/login'>SignUP</Link></small></p>
</form>

        </div>
    );
};

export default SiginUp;