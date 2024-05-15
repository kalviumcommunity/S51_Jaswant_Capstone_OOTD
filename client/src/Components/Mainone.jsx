import React from 'react';
import './Mainone.css'; // Import CSS file for styling
import birthday from "../assets/birthday.png"
import office from "../assets/office.jpg"
import interview from "../assets/Interview.png"
import wedding from "../assets/wedding.jpg"
import relegious from "../assets/relegious.webp"
import college from "../assets/college.jpg"
import hangouts from "../assets/hangouts.jpg"
import date from "../assets/beachimg.webp"
import { Link } from 'react-router-dom';


const Mainone = () => {
    return (
        <>
        <h1>Choose your Occasion</h1>
         <div className="main-container">
            <Link to="/BirthdayParties">
            <button className="occbutton">
                <img className='birthday' src={birthday} alt="" />
                    Birthday Parties
                </button>
            </Link>
         <Link to="/Office"><button className="occbutton">
               <img className="office" src={office} alt='' />
                Office
            </button>
         </Link>
            <Link to="/Interview">
            <button className="occbutton">
            <img className="interview" src={interview} alt='' />
                Interview
            </button>
            </Link>
           <Link to='/College'>
           <button className="occbutton">
            <img className="college" src={college} alt='' />
                College outfit
            </button>
           </Link>
            <Link to='/Wedding'> <button className="occbutton">
            <img className="wedding" src={wedding} alt='' />
                Wedding Parties
            </button>
            </Link>
           <Link to='/Relegious'>  <button className="occbutton">
            <img className="relegious" src={relegious} alt='' />
                Religious Occasions
            </button>
           </Link>
          <Link to='/Casualout'><button className="occbutton">
            <img className="hangouts" src={hangouts} alt='' />
                Casual Hangouts
            </button></Link>
            <Link to='/Dating'><button className="occbutton">
            <img className="date" src={date} alt='' />
                Beach
            </button></Link>
            
            {/* Add similar buttons for other options */}
        </div>
        </>
       
    );
};

export default Mainone; 
