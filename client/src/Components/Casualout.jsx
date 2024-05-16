import React from 'react';
import "./Occasion.css";
import image1 from '../assets/Hangoutimg1.jpeg'
import image2 from '../assets/Hangoutimg2.jpeg'
import image3 from '../assets/Hangoutimg3.jpeg'
import image4 from '../assets/Hangoutimg4.jpeg'
import image5 from '../assets/Hangoutimg5.jpeg'
import image6 from '../assets/Hangoutimg6.jpeg'
import image7 from '../assets/Hangoutimg7.jpeg'
import image8 from '../assets/Hangoutimg8.jpeg'
import image9 from '../assets/Hangoutimg9.jpeg'
import image10 from '../assets/Hangoutimg10.jpeg'

export const Casualout = () => {
  return (
    <>
    <h1>Casual Hangout Outfits</h1>
    <div className='occasion-container'>
      <img src={image1} alt="Image1" className="occasionimg" />
      <img src={image2} alt="Image1" className="occasionimg" />
      <img src={image3} alt="Image1" className="occasionimg" />
      <img src={image4} alt="Image1" className="occasionimg" />
      <img src={image5} alt="Image1" className="occasionimg" />
      <img src={image6} alt="Image1" className="occasionimg" />
      <img src={image7} alt="Image1" className="occasionimg" />
      <img src={image8} alt="Image1" className="occasionimg" />
      <img src={image9} alt="Image1" className="occasionimg" />
      <img src={image10} alt="Image1" className="occasionimg" />
    </div>
    </>
  )
}
