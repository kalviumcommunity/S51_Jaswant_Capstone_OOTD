import React from 'react';
import "./Occasion.css";
import image1 from '../assets/Interviewimg1.jpeg'
import image2 from '../assets/Interviewimg2.jpeg'
import image3 from '../assets/Interviewimg3.jpeg'
import image4 from '../assets/Interviewimg4.jpeg'

export const Interview = () => {
  return (
    <>
    <h1>Interview Outfits</h1>
    <div className='occasion-container'>
      <img src={image1} alt="Image1" className="occasionimg" />
      <img src={image4} alt="Image1" className="occasionimg" />
      <img src={image3} alt="Image1" className="occasionimg" />
      <img src={image2} alt="Image1" className="occasionimg" />
    </div>
    </>
  )
}
