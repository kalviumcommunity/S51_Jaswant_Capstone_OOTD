import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./Home.css";
import Navbar from './Navbar';
import image1 from '../assets/pic1.jpg';
import image2 from '../assets/pic2.jpg';
import image3 from '../assets/pic3.jpg';

const Home = () => {
    let navigate = useNavigate(); 

    const navigateToNewPage = () => {
        navigate('/Mainone'); 
    };

    return (
        <>
            <div>
                <div className='main'>
                    <div className="main-left">
                        <div>
                            <img className='img3' src={image3} alt="" />
                            <img className='img1' src={image1} alt="" />
                        </div>
                        <img className='img2' src={image2} alt="" />
                    </div>
                    <div className="main-right">
                        <h1>Welcome to Outfit Of The Day</h1>
                        <p>"We're here to bring your costume vision to life. Begin your adventure with us today by selecting the perfect attire for your special event."</p>
                        <button className='choose' onClick={navigateToNewPage}>Choose My Outfit</button>
                            
                    </div>
                </div>
            </div>
            {/* <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Outfit Of The Day. All rights reserved.</p>
                <p>Follow us on:
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>,
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>,
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </p>
            </footer> */}
        </>
    );
};

export default Home;
