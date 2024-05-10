import React from 'react';
import './Combination.css';
import image1 from '../../assets/whiteimage1.jpeg';
import image2 from '../../assets/whiteimage2.jpeg';
import image3 from '../../assets/whiteimage3.jpeg';
import image4 from '../../assets/whiteimage4.jpeg';
import image5 from '../../assets/whiteimage5.jpeg';
import image6 from '../../assets/Whiteimage6.jpeg';

export const White = () => {
  return (
    <div className="combination-container">
      <img src={image1} alt="Image 1" className="combination-image" />
      <img src={image5} alt="Image 5" className="combination-image" />
      <img src={image3} alt="Image 3" className="combination-image" />
      <img src={image4} alt="Image 4" className="combination-image" />
      <img src={image2} alt="Image 2" className="combination-image" />
      <img src={image6} alt="Image 6" className="combination-image" />
    </div>
  );
};
