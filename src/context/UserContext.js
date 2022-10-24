import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, }from  'firebase/auth'

export const AuthContext =createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] =useState('')

    // const user ={displayName:"juliana"}

    const googleProvider = new GoogleAuthProvider()

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, currentUser=>{

            setUser(currentUser)
            console.log('auth state changed', currentUser);
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const authInfo ={user,createUser,signIn, signInWithGoogle,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;