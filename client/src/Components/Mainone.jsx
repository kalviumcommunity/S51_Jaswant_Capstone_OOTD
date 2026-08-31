import React from 'react';
import './Mainone.css'; // Import CSS file for styling
import birthday from "../assets/birthday.png"
import office from "../assets/office.jpg"
import interview from "../assets/Interview.png"


const Mainone = () => {
    return (
        <div className="main-container">
            <button className="occbutton">
            <img className='birthday' src={birthday} alt="" />
                Birthday Parties
            </button>
            <button className="occbutton">
               <img className="office" src={office} alt='' />
                Office
            </button>
            <button className="occbutton">
            <img className="interview" src={interview} alt='' />
                Interview
            </button>
            {/* Add similar buttons for other options */}
        </div>
    );
};

export default Mainone; 
