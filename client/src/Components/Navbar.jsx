import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../assets/logo.png";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <nav className="navbar">
            <li className="nav-item">
                <img src={logo} alt="Logo" className="nav-logo" />
            </li>
            {/* <div className="search-bar">
                <input type="text" placeholder="Search..." className="search-input" />
                <button className="search-button">Search</button>
            </div> */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/features" className="nav-link">Combinations</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Logout</Link>
                </li>
            



                    
                    {/* </div> */}


                
            </ul>

        </nav>
    );
};

export default Navbar;
