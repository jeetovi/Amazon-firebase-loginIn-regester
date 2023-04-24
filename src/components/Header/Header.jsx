 
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProviders';

const Header = () => {
 const {user , logOut} = useContext(AuthContext)
 console.log(user)
 const handleLogOut = () =>{
    logOut()
    .then(result =>{
        const logUser = result.user;
        console.log(logUser)
        form.reset();
    })
    .catch(error =>{
        console.log(error)
    })
 }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign">SiginUP</Link>
                {
                user && <span> Welcome {user.email} <button onClick={handleLogOut}>SignOut</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;