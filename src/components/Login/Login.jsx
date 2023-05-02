import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders";
const Login = () => {
    // password dakar jonno 
    const[show, setShow] = useState(false)

    const {user , signIn} =  useContext(AuthContext)
    // tumi j kan a jassco sai khan jowar jonno 
    const navigate = useNavigate()
    // location dakar jonno 
    const location = useLocation();
    console.log(location)

    // inventory ta jowar jonno 
    const from = location.state?.from?.pathname || '/';


       // Email show console
    const handleSigSubmit = (event) =>{
    

        event.preventDefault();
        const  form = event.target ;
       const email = form.email.value;
       const password = form.password.value;
       const name = form.name.value;
       console.log(name, email,password)
// signOut
signIn(email,password)
.then(result =>{
    const logUser = result.user;
    console.log(logUser)
    form.reset();
        // tumi j kan a jassco sai khan jowar jonno 
        navigate(from, {replace: true})
})
.catch(error =>{
    console.log(error)
})
    }
  return (
    <div className="form-container">
      <h2>Please logIn ?</h2>
      <form onSubmit={handleSigSubmit}>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type={show ? 'text' : "password"} id="password" name="password" required />
            {/* password dakar jonno  */}
            <p onClick={() => setShow(!show)}><small>
                {
                    show ? <span>Hide passwoed</span>:<span> Show password</span>
                }
                </small> </p>
        <button type="submit">LogIn</button>
        <p>
          <small>
            {""}
            All ready signIn ? <Link to="/sign">SignIN</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
