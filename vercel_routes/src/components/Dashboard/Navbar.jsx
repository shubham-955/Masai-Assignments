import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext';
import '../CSS/Navbar.css'

export const Navbar = () => {
    const { setIsLoggedIn } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard/home">PRODUCT</Link>
                </div>
                <div className="collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/dashboard/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <button className='signOutBtn' onClick={() => setIsLoggedIn(false)}>
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
