import React from 'react';
import { createContext, useState, useContext } from 'react';

 const AuthContext = createContext();

 export function useAuth() {
    return useContext(AuthContext);
 }

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const providerValue = {
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={providerValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
