import React from 'react';

const Footer = () => {
    return (
        <footer className="home-footer">
            <p>&copy; {new Date().getFullYear()} Outfit Of The Day. All rights reserved.</p>
            <p>Follow us on:
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </p>
        </footer>
    );
}

export default Footer;
