import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
    const handleLogout = () => {
        setIsLoggedIn(false);

    };
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/features" className="nav-link">Features</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Login" className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
