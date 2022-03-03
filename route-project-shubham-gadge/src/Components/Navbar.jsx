import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthContext } from '../Contexts/AuthProvider';
import '../CSS/Navbar.css'
import { LocalMallOutlined } from '@material-ui/icons';

export const Navbar = () => {

    const { count, setState } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Accessories</Link>
                </div>
                <div className="collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className='cart' onClick={() => setState(true)}>
                    <LocalMallOutlined style={{ fontSize: 33 }} />
                    <div className='count'>
                        <p>{count}</p>
                    </div>
                </div>
            </nav>
            <div className='offer'>
                <p>FREE SHIPPING RS.500+ | EASY RETURNS | WORTH HOLDING ONTO</p>
            </div>
        </>
    );
};
