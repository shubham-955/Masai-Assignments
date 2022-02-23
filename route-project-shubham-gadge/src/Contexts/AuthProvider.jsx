import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [name, setName] = useState("")

    return (
        <AuthContext.Provider value={{ name, setName }}>
            {children}
        </AuthContext.Provider>
    )
}