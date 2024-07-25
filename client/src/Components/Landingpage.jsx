import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const [isSignInHovered, setIsSignInHovered] = useState(false);
  const [isSignUpHovered, setIsSignUpHovered] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navBrand}>OOTD</div>
        <div style={styles.navLinks}>
          <Link to="/Login">
            <button
              style={isSignInHovered ? { ...styles.navButton, ...styles.navButtonHover } : styles.navButton}
              onMouseEnter={() => setIsSignInHovered(true)}
              onMouseLeave={() => setIsSignInHovered(false)}
            > 
              Sign In
            </button>
          </Link>
          <Link to="/Signup">
            <button
              style={isSignUpHovered ? { ...styles.navButton, ...styles.navButtonHover } : styles.navButton}
              onMouseEnter={() => setIsSignUpHovered(true)}
              onMouseLeave={() => setIsSignUpHovered(false)}
            >
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{ ...styles.heroSection, position: 'relative' }}>
        
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to Your OOTD</h1>
          <p style={styles.heroSubtitle}>Discover your daily fashion inspiration.</p>
        </div>
      </header>

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

      {/* Call to Action Section */}
      
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
    padding: '100px 20px',
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
  ctaSection: {
    backgroundColor: '#333',
    color: 'white',
    padding: '50px 20px',
  },
  ctaTitle: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  ctaButton: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2em',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default LandingPage;
