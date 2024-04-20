import React from 'react';
import './Black.css';
import image1 from '../../assets/Blackimg1.jpeg';
import image2 from '../../assets/Blackimg2.jpeg';
import image3 from '../../assets/Blackimg3.jpeg';
import image4 from '../../assets/Blackimg4.jpeg';
import image5 from '../../assets/Blackimg5.jpeg';
import image6 from '../../assets/Blackimg6.jpeg';

export const Black = () => {
  return (
    <div className="Black-container"> 
      <img src={image1} alt="Image 1" className="Black-image" /> 
      <img src={image2} alt="Image 2" className="Black-image" />
      <img src={image3} alt="Image 3" className="Black-image" />
      <img src={image4} alt="Image 4" className="Black-image" />
      <img src={image5} alt="Image 5" className="Black-image" />
      <img src={image6} alt="Image 6" className="Black-image" />
    </div>
  );
};
