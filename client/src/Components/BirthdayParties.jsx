import React from 'react';
import "./Bdayparty.css";
import image1 from '../assets/Bdayimg1.jpeg'
import image2 from '../assets/Bdayimg2.jpeg'
import image3 from '../assets/Bdayimg3.jpeg'
import image4 from '../assets/Bdayimg4.jpeg'

export const BirthdayParties = () => {
  return (
    <>
    <h1>Birthday Party Outfits</h1>
    <div className='Bday-container'>
      <img src={image1} alt="Image1" className="Bdayimg" />
      <img src={image2} alt="Image1" className="Bdayimg" />
      <img src={image3} alt="Image1" className="Bdayimg" />
      <img src={image4} alt="Image1" className="Bdayimg" />
    </div>
    </>
  )
}
