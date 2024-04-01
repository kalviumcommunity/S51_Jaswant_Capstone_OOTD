import React from 'react';
import "./Home.css"
import Navbar from './Navbar';

const Home = () => {
    return (
        <>
        <div>
            <Navbar />
            <div className='main'>
                <div className="main-left">

                </div>
                <div className="main-right">
                    <h1>Welcome to Outfit Of The Day</h1>
                    <p>"We're here to bring your costume vision to life. Begin your adventure with us today by selecting the perfect attire for your special event."</p>
                    <button className='choose'>Choose My Outfit</button>
                </div>
               
            </div>
        </div>
        <footer className="home-footer">
                <p>&copy; {(new Date().getFullYear())} Outfit Of The Day. All rights reserved.</p>
                <p>Follow us on:
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </p>
            </footer>
        </>
    );
};

export default Home;
