import React from 'react';
import "./Relegious.css";
import image1 from '../assets/Traditionalimg1.jpg'
import image2 from '../assets/Traditionalimg2.jpg'
import image3 from '../assets/Traditionalimg3.jpg'
import image4 from '../assets/Traditionalimg4.jpg'

export const Relegious = () => {
  return (
    <>
    <h1>Religious Outfits</h1>
    <div className='trad-container'>
      <img src={image1} alt="Image1" className="tradimg" />
      <img src={image2} alt="Image1" className="tradimg" />
      <img src={image3} alt="Image1" className="tradimg" />
      <img src={image4} alt="Image1" className="tradimg" />
    </div>
    </>
  )
}
