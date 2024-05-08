import React from 'react';
// import './Black.css';
import image1 from '../assets/Officeimg1.jpg';
import image2 from '../assets/Officeimg2.jpg';
import image3 from '../assets/Officeimg3.jpg';
import image4 from '../assets/Officeimg4.jpg';
import image5 from '../assets/Officeimg5.jpg';
import image6 from '../assets/Officeimg6.jpg';
import image7 from '../assets/Officeimg7.jpg';
import image8 from '../assets/Officeimg8.jpg';
import image9 from '../assets/Officeimg9.jpg';

export const Office = () => {
  return (
    <div className="Black-container"> 
      <img src={image1} alt="Image 1" className="Black-image" /> 
      <img src={image2} alt="Image 2" className="Black-image" />
      <img src={image3} alt="Image 3" className="Black-image" />
      <img src={image4} alt="Image 4" className="Black-image" />
      <img src={image5} alt="Image 5" className="Black-image" />
      <img src={image6} alt="Image 6" className="Black-image" />
      <img src={image7} alt="Image 7" className="Black-image" />
      <img src={image8} alt="Image 8" className="Black-image" />
      <img src={image9} alt="Image 9" className="Black-image" />
    </div>
  );
};
