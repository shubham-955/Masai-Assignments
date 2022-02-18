import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthorized, setIsAuthorized] = useState(false)

    const onLogin = async () => {
        const response = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "content-type": "application.json",
            },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }),
        })
        const res = await response.json();
        console.log(res)
    }

    const onLogout = () => {
        setIsAuthorized(false)
    };
    return (
        <AuthContext.Provider value={{ isAuthorized, onLogin, onLogout }}>
            {children}
        </AuthContext.Provider>
    )
}