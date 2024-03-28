import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <h1>Welcome to Outfit Of The Day</h1>
            <p>"What you wear is how you present yourself to the world, especially today,<br></br> when human contacts are so quick. Fashion is instant language."</p>
            <footer className="home-footer">
                <p>&copy; {(new Date().getFullYear())} Outfit Of The Day. All rights reserved.</p>
                <p>Follow us on:
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </p>
            </footer>
        </div>
    );
};

export default Home;
