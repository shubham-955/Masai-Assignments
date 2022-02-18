import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthProvider';

export const Navbar = () => {

    const { isAuthorized, onLogin, onLogout } = useContext(AuthContext);

    return (
        <div>
            Navbar: {isAuthorized}
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
