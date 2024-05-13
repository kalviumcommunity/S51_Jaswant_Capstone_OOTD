import React from 'react';
import "./Occasion.css";
import image1 from '../assets/Traditionalimg1.jpg'
import image2 from '../assets/Traditionalimg2.jpg'
import image3 from '../assets/Traditionalimg3.jpg'
import image4 from '../assets/Traditionalimg4.jpg'

export const Relegious = () => {
  return (
    <>
    <h1>Religious Outfits</h1>
    <div className='occasion-container'>
      <img src={image1} alt="Image1" className="occasionimg" />
      <img src={image2} alt="Image1" className="occasionimg" />
      <img src={image3} alt="Image1" className="occasionimg" />
      <img src={image4} alt="Image1" className="occasionimg" />
    </div>
    </>
  )
}
