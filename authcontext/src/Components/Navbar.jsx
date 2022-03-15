import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthProvider';

export const Navbar = () => {

    const { isAuthorized, onLogin, onLogout, token } = useContext(AuthContext);

    return (
        <div>
            Navbar: {token}
            <button onClick={() => {
                if (isAuthorized) {
                    onLogout()
                }
                else {
                    onLogin()
                }
            }}
            >{isAuthorized ? "Logout" : "Login"}</button>
        </div>
    )
}
