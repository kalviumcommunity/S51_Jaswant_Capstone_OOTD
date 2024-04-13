import React from 'react';
import './Mainone.css'; // Import CSS file for styling
import birthday from "../assets/birthday.png"
import office from "../assets/office.jpg"
import interview from "../assets/Interview.png"
import wedding from "../assets/wedding.jpg"
import relegious from "../assets/relegious.webp"
import college from "../assets/college.jpg"
import hangouts from "../assets/hangouts.jpg"
import date from "../assets/date.webp"
import { Link } from 'react-router-dom';


const Mainone = () => {
    return (
        <div className="main-container">
            <Link to="/BirthdayParties">
            <button className="occbutton">
                <img className='birthday' src={birthday} alt="" />
                    Birthday Parties
                </button>
            </Link>
            <button className="occbutton">
               <img className="office" src={office} alt='' />
                Office
            </button>
            <button className="occbutton">
            <img className="interview" src={interview} alt='' />
                Interview
            </button>
            <button className="occbutton">
            <img className="college" src={college} alt='' />
                College outfit
            </button>
            <button className="occbutton">
            <img className="wedding" src={wedding} alt='' />
                Wedding Parties
            </button>
            <button className="occbutton">
            <img className="relegious" src={relegious} alt='' />
                Religious Occasions
            </button>
            <button className="occbutton">
            <img className="hangouts" src={hangouts} alt='' />
                Casual Hangouts
            </button>
            <button className="occbutton">
            <img className="date" src={date} alt='' />
                Dating
            </button>
            {/* Add similar buttons for other options */}
        </div>
    );
};

export default Mainone; 
