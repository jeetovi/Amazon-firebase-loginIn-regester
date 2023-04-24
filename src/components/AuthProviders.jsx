import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './Firebase/firebase.config';
 

const auth = getAuth(app);
 export const AuthContext =  createContext(null)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)
// create Email 
    const  createUser = (email, password) =>{
        // inventory ta jower jonno 
        setLoding(true);
      return  createUserWithEmailAndPassword(auth, email,password)
    }
    // /SignIn email
    const signIn = (email, password) =>{
         // inventory ta jower jonno 
         setLoding(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // lOgout
    const logOut = () =>{
        return signOut(auth)
    }

    // Observer user auth statet
useEffect(()=> {
  const unsubscribe = onAuthStateChanged(auth, currentUser =>{
    setUser (currentUser);
    // lode
    setLoding(false)
  });
  return () => {
    return unsubscribe();
  }

},[])

const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loding
}
    return (
         <AuthContext.Provider value={authInfo}>
           {children}
         </AuthContext.Provider>
    );
};

export default AuthProviders;