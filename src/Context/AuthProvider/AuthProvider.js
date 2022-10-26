import React from 'react';
import { createContext } from 'react';

// context creation
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = { name: "mehedi hasan" }

    // context declaration
    const authInfo = { user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;