import React from 'react';
import './Brown.css';
import image1 from '../../assets/Brownimg1.jpeg';
import image2 from '../../assets/Brownimg2.jpeg';
import image3 from '../../assets/Brownimg3.jpeg';
import image4 from '../../assets/Brownimg4.jpeg';
import image5 from '../../assets/Brownimg5.jpeg';

export const Brown = () => {
  return (
    <div className="Brown-container"> 
      <img src={image1} alt="Image 1" className="Brown-image" /> 
      <img src={image2} alt="Image 2" className="Brown-image" />
      <img src={image3} alt="Image 3" className="Brown-image" />
      <img src={image4} alt="Image 4" className="Brown-image" />
      <img src={image5} alt="Image 5" className="Brown-image" />
    </div>
  );
};
