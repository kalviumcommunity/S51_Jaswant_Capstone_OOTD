import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import land1 from "../assets/land1.jpg";
import land2 from "../assets/land2.webp";
import land3 from "../assets/land3.jpg";
import land4 from "../assets/land4.jpg";
import land5 from "../assets/land5.webp";

const images = [land1, land2, land3, land4, land5];

function LandingPage() {
  const [isSignInHovered, setIsSignInHovered] = useState(false);
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      {/* Navbar */}
     

      {/* Hero Section */}
      <header style={{ ...styles.heroSection, backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div style={styles.heroContent}>
        </div>
      </header>
      <div style={styles.heroContent}>
  <h1 style={styles.heroTitle}>Welcome to Your OOTD</h1>
  <p style={styles.heroSubtitle}>Discover your daily fashion inspiration.</p>
  <Link to="/Login">
  <button style={styles.exploreButton}>Explore Now</button>
</Link>
</div>


      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Trend Alerts</h2>
          <p style={styles.featureDescription}>Stay updated with the latest fashion trends.</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Personalized Outfits</h2>
          <p style={styles.featureDescription}>Get outfit recommendations tailored to your style.</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Community Reviews</h2>
          <p style={styles.featureDescription}>Read and write reviews for outfit inspiration.</p>
        </div>
        <div style={styles.feature}>
          <h2 style={styles.featureTitle}>Fashion News</h2>
          <p style={styles.featureDescription}>Keep up with the latest in the fashion industry.</p>
        </div>
      </section>
     

    </div>
    
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
  },
  navBrand: {
    fontSize: '1.5em',
  },
  navLinks: {
    display: 'flex',
  },
  navButton: {
    backgroundColor: '#666',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    marginLeft: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  navButtonHover: {
    backgroundColor: '#ff6b6b',
  },
  heroSection: {
    position: 'relative',
    color: 'white',
    padding: '10px 20px',
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
  },
  
  heroContent: {
    maxWidth: '600px',
    margin: '0 auto',
    zIndex: 1,
  },
  heroTitle: {
    fontSize: '3em',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '1.5em',
    marginBottom: '40px',
  },
  featuresSection: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
  },
  feature: {
    maxWidth: '300px',
    marginBottom: '30px',
  },
  featureTitle: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  featureDescription: {
    fontSize: '1.2em',
    color: '#666',
  },
  exploreButton: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2em',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  }, 
  exploreButtonHover: {
    backgroundColor: '#e55555',
  },
};

export default LandingPage;
