import React from 'react';
import { Link } from "react-router-dom"
import '../CSS/Navbar.css'

export const Navbar = () => {

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Products</Link>
            </div>
            <div className="collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products">All Products</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
