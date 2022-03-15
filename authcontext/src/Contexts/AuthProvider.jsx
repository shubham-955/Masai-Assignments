import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthorized, setIsAuthorized] = useState(false)
    const [token, setToken] = useState("")

    const onLogin = async () => {
        const response = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }),
        })
        const res = await response.json();
        console.log(res)
        setIsAuthorized(true)
        setToken(res.token)
    }

    const onLogout = () => {
        setIsAuthorized(false)
        setToken("")
    };
    return (
        <AuthContext.Provider value={{ isAuthorized, onLogin, onLogout, token }}>
            {children}
        </AuthContext.Provider>
    )
}