import React from 'react';
import "./Feature.css";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Feature = () => {
    const handleButtonClick = (category) => {
        console.log(`Clicked on ${category}`);
    };

    return (
        <div>
            <Navbar/>
            <h2>Combinations</h2>
            <div className="color-buttons">

            <Link to='/Black'>
                <button className='combutton' onClick={() => handleButtonClick('Black Combinations')}>
                    Black Combinations
                </button>
            </Link>
            <Link to='/White'>
                <button className='combutton' onClick={() => handleButtonClick('White Combinations')}>
                    White Combinations
                </button>
            </Link>
            <Link to='/Red'> 
                <button className='combutton' onClick={() => handleButtonClick('Red Combinations')}>
                    Red Combinations
                </button>
            </Link>
            <Link to='/Green'> 
                <button className='combutton' onClick={() => handleButtonClick('Yellow Combinations')}>
                    Green Combinations
                </button>
            </Link>
            <Link to='/Blue'>  
                <button className='combutton' onClick={() => handleButtonClick('Blue Combinations')}>
                    Blue Combinations
                </button>
            </Link>
            <Link to='/Brown'>
                <button className='combutton' onClick={() => handleButtonClick('Brown Combinations')}>
                    Brown Combinations
                </button>
            </Link> 
            <Link to='/Pink'>
                <button className='combutton' onClick={() => handleButtonClick('Pink Combinations')}>
                    Pink Combinations
                </button>
            </Link> 
            
               
            </div>
        </div>
    );
};

export default Feature;
