import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PriverRoute = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    // location daker jonno
    const location = useLocation();
    console.log(location)

    if(loding){
        return <div>Lodding________</div>
    }
    if(user) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace > </Navigate>
    return (
        <div>
        
            
        </div>
    );
};

export default PriverRoute;