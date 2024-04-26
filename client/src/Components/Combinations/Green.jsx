import React from 'react';
import './Green.css';
import image1 from '../../assets/Greenimg1.jpeg';
import image2 from '../../assets/Greenimg2.jpeg';
import image3 from '../../assets/Greenimg3.jpeg';
import image4 from '../../assets/Greenimg4.jpeg';
import image5 from '../../assets/Greenimg5.jpeg';
import image6 from '../../assets/Greenimg6.jpeg';

export const Green = () => {
  return (
    <div className="Green-container"> 
      <img src={image1} alt="Image 1" className="Green-image" /> 
      <img src={image2} alt="Image 2" className="Green-image" />
      <img src={image3} alt="Image 3" className="Green-image" />
      <img src={image4} alt="Image 4" className="Green-image" />
      <img src={image5} alt="Image 5" className="Green-image" />
      <img src={image6} alt="Image 6" className="Green-image" />
    </div>
  );
};
