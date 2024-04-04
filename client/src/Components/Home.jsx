import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./Home.css";
import image1 from '../assets/pic1.jpg';
import image2 from '../assets/pic2.jpg';
import image3 from '../assets/pic3.jpg';
import image4 from '../assets/pic4.jpeg';
import image5 from '../assets/pic5.jpeg';
import image6 from '../assets/pic6.jpeg';

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
                <hr className="thick-dark-line" /> 

                <div className= 'blackcomb' >
                    <h1>Black Outfit Combinations</h1>
                    <div>
                    <img className='img4' src={image4} alt="" />
                    <img className='img5' src={image5} alt="" />
                    <img className='img6' src={image6} alt="" />
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default Home;
