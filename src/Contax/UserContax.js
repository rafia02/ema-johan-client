import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'


export const AuthContax = createContext()
const auth = getAuth(app)

const UserContax = ({children}) => {
    const [user, setUser] = useState()
    const [loding, setLoading] = useState(true)


    const signUpusers = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
        
    }

    const logIn = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        setLoading(true)
       return signOut(auth)
    }

    useEffect(()=>{
       const unSubscrib = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> unSubscrib()
    }, [])


    const authInfo = {user, loding, signUpusers, logIn, logOut}
    return (
        <div>
            <AuthContax.Provider value={authInfo}>
                {children}
            </AuthContax.Provider>
        </div>
    );
};

export default UserContax;