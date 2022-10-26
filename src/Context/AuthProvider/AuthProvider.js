import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

// context creation
export const AuthContext = createContext();

const auth = getAuth();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    useEffect(()=>{
       const unsubcribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return unsubcribe();
    }, [])

    const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider );
    }

    // context declaration
    const authInfo = { user, providerLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;