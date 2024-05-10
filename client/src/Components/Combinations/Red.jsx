import React from 'react';
import './Combination.css';
import image1 from '../../assets/Redimg1.jpeg';
import image2 from '../../assets/Redimg2.jpeg';
import image3 from '../../assets/Redimg3.jpeg';
import image4 from '../../assets/Redimg4.jpeg';
import image5 from '../../assets/Redimg5.jpeg';
import image6 from '../../assets/Redimg6.jpeg';

export const Red = () => {
  return (
    <div className="combination-container"> 
    <div className='redimg1'>
    <img src={image1} alt="Image 1" className="combination-image" /> 
    </div>
      {/* <img src={image1} alt="Image 1" className="combination-image" />  */}
      <img src={image2} alt="Image 2" className="combination-image" />
      <img src={image3} alt="Image 3" className="combination-image" />
      <img src={image4} alt="Image 4" className="combination-image" />
      <img src={image5} alt="Image 5" className="combination-image" />
      <img src={image6} alt="Image 6" className="combination-image" />
    </div>
  );
};
