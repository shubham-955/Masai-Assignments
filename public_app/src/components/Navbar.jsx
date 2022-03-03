import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import '../CSS/Navbar.css'
import { logout } from "../store/auth/auth.actions"

export const Navbar = () => {

    const dispatch = useDispatch()

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Public App</Link>
            </div>
            <div className="collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/users">Users</Link>
                    </li>
                    <li className='nav-item'>
                        <button className='logout' onClick={() => dispatch(logout())}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
