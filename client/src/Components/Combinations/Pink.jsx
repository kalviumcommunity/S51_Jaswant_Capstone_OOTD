import React from 'react';
import './Pink.css'
import image1 from '../../assets/Pinkimg1.jpeg';
import image2 from '../../assets/Pinkimg2.jpeg';
import image3 from '../../assets/Pinkimg3.jpeg';
import image4 from '../../assets/Pinkimg4.jpeg';
// import image5 from '../../assets/Pinkimg5.jpeg';
import image6 from '../../assets/Pinkimg6.jpeg';
export const Pink = () => {
  return (
    <div className="Pink-container"> 
      <img src={image1} alt="Image 1" className="Pink-image" /> 
      <img src={image2} alt="Image 2" className="Pink-image" />
      <img src={image3} alt="Image 3" className="Pink-image" />
      <img src={image4} alt="Image 4" className="Pink-image" />
      {/* <img src={image5} alt="Image 5" className="Pink-image" /> */}
      <img src={image6} alt="Image 6" className="Pink-image" />
    </div>
  );
};
