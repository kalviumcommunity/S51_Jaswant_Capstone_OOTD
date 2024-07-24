import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import "./Home.css";
import image1 from '../assets/pic1.jpg';
import image2 from '../assets/pic2.jpg';
import image3 from '../assets/pic3.jpg';
import image4 from '../assets/pic4.jpeg';
import image5 from '../assets/pic5.jpeg';
import image6 from '../assets/pic6.jpeg';
import image7 from '../assets/pic7.jpeg';
import image8 from '../assets/pic8.jpeg';
import image9 from '../assets/pic9.jpeg';
import image10 from '../assets/pic10.jpeg';
import image11 from '../assets/pic11.jpeg';
import { Link } from 'react-router-dom';
import Crisp from './Crisp'; // Assuming Crisp component for additional content
import Navbar from './Navbar';

const Home = () => {
    let navigate = useNavigate();

    // Function to navigate to '/Mainone'
    const navigateToNewPage = () => {
        navigate('/Mainone');
    };

    // Array of images and their refs for intersection observer
    const images = [
        { src: image1, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image2, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image3, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image4, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image5, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image6, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image7, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image8, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image9, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image10, ref: useRef(null), inView: useInView({ threshold: 0.5 }) },
        { src: image11, ref: useRef(null), inView: useInView({ threshold: 0.5 }) }
    ];

    return (

        <div>
            <Navbar/>
            <div className='main'>
                <div className="main-left">
                    <div>
                        <img className='img3' src={image3} alt="" />
                        <img className='img1' src={image1} alt="" />
                    </div>
                    <img className='img2' src={image2} alt="" />
                </div>
                <div className="main-right">
                    <h1>Welcome to Outfit Of The Day</h1>
                    <p>"We're here to bring your costume vision to life. Begin your adventure with us today by selecting the perfect attire for your special event."</p>
                    <button className='choose' onClick={navigateToNewPage}>Choose My Outfit</button>
                </div>
            </div>
            <hr className="thick-dark-line" />

            <div className='blackcomb'>
                <Link to='/Black'>
                    <h1 className='blackcomb'>Black Outfit Combinations</h1>
                </Link>
                <div className="imageRow">
                    {images.slice(3, 6).map((image, index) => (
                        <div key={index} className="imageContainer">
                            <img className={`img${index + 4} ${image.inView[0] ? 'active' : ''}`} src={image.src} alt="" ref={image.ref} />
                        </div>
                    ))}
                </div>
                <div className="description">
                    <p>
                        <strong>Black Shirt and Grey Pant Combination:</strong> Elevate your style with our sophisticated black shirt paired with sleek grey pants. This timeless combination exudes confidence and refinement, perfect for both casual outings and formal occasions. Embrace versatility and elegance with this classic ensemble that effortlessly transitions from day to night.
                    </p>
                    <p>
                    <strong>Black Shirt and Sandal Pant:</strong> Embrace laid-back sophistication with our stylish black shirt paired with trendy sandal pants. This effortlessly cool combination offers a relaxed yet refined aesthetic, perfect for casual gatherings or weekend outings. Add a touch of effortless style to your wardrobe with this versatile ensemble that captures the essence of modern fashion.
                    </p>
                    <p>
                    <strong>Black Shirt and Black Pant:</strong> Embrace the allure of monochrome with our sleek black shirt and matching black pants. This effortlessly chic combination epitomizes modern sophistication, offering a sleek and polished look that never goes out of style. Whether for a professional setting or a night out on the town, this ensemble exudes confidence and sophistication. 
                    </p>
                </div>
            </div>

            <hr className="thick-dark-line" />

            <div className='whitecomb'>
                <Link to='/White'>
                    <h1>White Outfit Combinations</h1>
                </Link>
                <div className='white-img'>
                    {images.slice(6).map((image, index) => (
                        <div key={index} className='imageContainer'>
                            <img className={`img${index + 7} ${image.inView[0] ? 'active' : ''}`} src={image.src} alt="" ref={image.ref} />
                        </div>
                    ))}
                </div>
                <div className="description">
                    <p>
                        <strong>White Shirt and Light Blue Jeans:</strong> Embrace a timeless, casual look with our white shirt paired with light blue jeans. This combination exudes relaxed sophistication and is perfect for everyday wear or weekend outings.
                    </p>
                    <p>
                        <strong>White Shirt and Dark Blue Pant:</strong> Elevate your style with our classic white shirt paired elegantly with dark blue pants. This versatile duo is suitable for both professional settings and evening occasions, offering a sleek and polished look.
                    </p>
                    <p>
                        <strong>White Shirt and Black Pant:</strong> Make a bold statement with our white shirt paired with black pants. This classic monochrome ensemble is a wardrobe essential, ideal for formal events or stylish everyday wear.
                    </p>
                    <p>
                        <strong>White Shirt and Olive Green Pant:</strong> Add a touch of earthy charm to your outfit with our white shirt and olive green pants combination. This pairing strikes a perfect balance between casual and refined, suitable for various day-to-day activities.
                    </p>
                    <p>
                        <strong>White Shirt and Sand-colored Pant:</strong> Embrace a laid-back yet stylish vibe with our white shirt paired with sand-colored pants. This relaxed combination is perfect for outdoor gatherings or leisurely weekends, offering a fresh and contemporary look.
                    </p>
                    <Crisp /> {/* Assuming Crisp component for additional content */}
                </div>
            </div>
        </div>
    );
};

export default Home;
