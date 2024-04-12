import React from 'react';
import "./Footer.css"
import twitterLogo from  "../assets/twitter.png"   // import Twitter logo image
import facebookLogo from '../assets/facebook.png'; // import Facebook logo image
import instagramLogo from '../assets/insta.png'; // import Instagram logo image

const Footer = () => {
    return (
        <footer className="home-footer">
            <p className='foot'>&copy; {new Date().getFullYear()} Outfit Of The Day. All rights reserved. </p>
           
            <div className='sociallogo'>
            <p className='foot'>Follow us on:</p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img height="60px" src={twitterLogo} alt="Twitter"  />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img height="60px"  src={facebookLogo} alt="Facebook" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img height="60px" src={instagramLogo} alt="Instagram" />
                </a>
                </div>
        </footer>
    );
}

export default Footer;
