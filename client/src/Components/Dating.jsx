import React from 'react';
import "./Occasion.css";
import image1 from '../assets/Beachimg1.jpeg'
import image2 from '../assets/Beachimg2.jpeg'
import image3 from '../assets/Beachimg3.jpeg'
import image4 from '../assets/Beachimg4.jpeg'
import image5 from '../assets/Beachimg5.jpeg'
import image6 from '../assets/Beachimg6.jpeg'
import image7 from '../assets/Beachimg7.jpeg'
import image8 from '../assets/Beachimg8.jpeg'

export const Dating = () => {
  return (
    <>
    <h1>Beach Outfits</h1>
    <div className='occasion-container'>
      <img src={image1} alt="Image1" className="occasionimg" />
      <img src={image2} alt="Image1" className="occasionimg" />
      <img src={image3} alt="Image1" className="occasionimg" />
      <img src={image4} alt="Image1" className="occasionimg" />
      <img src={image5} alt="Image1" className="occasionimg" />
      <img src={image6} alt="Image1" className="occasionimg" />
      <img src={image7} alt="Image1" className="occasionimg" />
      <img src={image8} alt="Image1" className="occasionimg" />
      
    </div>
    </>
  )
}
