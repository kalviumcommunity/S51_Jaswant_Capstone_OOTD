import React from 'react';
import './Blue.css';
import image1 from '../../assets/Blueimg1.jpeg';
import image2 from '../../assets/Blueimg2.jpeg';
import image3 from '../../assets/Blueimg3.jpeg';
import image4 from '../../assets/Blueimg4.jpeg';
import image5 from '../../assets/Blueimg5.jpeg';
import image6 from '../../assets/Blueimg6.jpeg';

export const Blue = () => {
  return (
    <div className="Blue-container"> 
      <img src={image1} alt="Image 1" className="Blue-image" /> 
      <img src={image2} alt="Image 2" className="Blue-image" />
      <img src={image3} alt="Image 3" className="Blue-image" />
      <img src={image4} alt="Image 4" className="Blue-image" />
      <img src={image5} alt="Image 5" className="Blue-image" />
      <img src={image6} alt="Image 6" className="Blue-image" />
    </div>
  );
};
