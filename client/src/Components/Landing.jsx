import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navBrand}>OUTFIT OF THE DAY</div>
        <div style={styles.navLinks}>
          <Link to="/Login" style={styles.navLink}>Sign In</Link>
          <Link to="/Signup" style={{ ...styles.navLink, backgroundColor: '#ff6b6b', color: 'white' }}>Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Discover Your Style</h1>
          <p style={styles.heroSubtitle}>Everyday fashion made easy and fun.</p>
        </div>
      </header>

      {/* Categories Section */}
      <section style={styles.categoriesSection}>
        <h2 style={styles.sectionTitle}>Our Categories</h2>
        <div style={styles.categoriesContainer}>
          <div style={styles.categoryCard}>
            <h3 style={styles.categoryTitle}>Casual</h3>
            <p style={styles.categoryDescription}>Chill and stylish for any day.</p>
          </div>
          <div style={styles.categoryCard}>
            <h3 style={styles.categoryTitle}>Formal</h3>
            <p style={styles.categoryDescription}>Sharp and elegant for special occasions.</p>
          </div>
          <div style={styles.categoryCard}>
            <h3 style={styles.categoryTitle}>Sporty</h3>
            <p style={styles.categoryDescription}>Comfort and performance for active lifestyles.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={styles.testimonialsSection}>
        <h2 style={styles.sectionTitle}>What Our Customers Say</h2>
        <div style={styles.testimonialsContainer}>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"Amazing selection and top-notch quality!"</p>
            <h4 style={styles.testimonialAuthor}>- Alex Brown</h4>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"I found the perfect outfit for my event, thank you!"</p>
            <h4 style={styles.testimonialAuthor}>- Maria Garcia</h4>
          </div>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialText}>"Great service and fast delivery."</p>
            <h4 style={styles.testimonialAuthor}>- John Doe</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      

      {/* Footer */}
     
    </div>
  );
}

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    color: '#333',
    backgroundColor: '#f8f8f8',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#1f1f1f',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  navBrand: {
    fontSize: '2em',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    marginLeft: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  heroSection: {
    position: 'relative',
    backgroundImage: 'url("https://source.unsplash.com/1600x900/?fashion")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  heroContent: {
    position: 'relative',
    maxWidth: '600px',
    color: 'white',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '4em',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '1.5em',
    marginBottom: '40px',
  },
  heroButton: {
    backgroundColor: '#ff6b6b',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2em',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  categoriesSection: {
    padding: '50px 20px',
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: '2.5em',
    marginBottom: '40px',
    color: '#333',
  },
  categoriesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  categoryCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    maxWidth: '300px',
    margin: '10px',
    textAlign: 'left',
  },
  categoryTitle: {
    fontSize: '1.8em',
    marginBottom: '10px',
  },
  categoryDescription: {
    fontSize: '1.2em',
    color: '#666',
  },
  testimonialsSection: {
    padding: '50px 20px',
    backgroundColor: '#f0f0f0',
  },
  testimonialsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  testimonialCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    maxWidth: '600px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: '1.2em',
    fontStyle: 'italic',
    color: '#333',
  },
  testimonialAuthor: {
    fontSize: '1.2em',
    color: '#666',
  },
  ctaSection: {
    padding: '50px 20px',
    backgroundColor: '#ff6b6b',
    color: 'white',
  },
  ctaTitle: {
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  ctaButton: {
    backgroundColor: 'white',
    color: '#ff6b6b',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.2em',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#1f1f1f',
    color: 'white',
    textAlign: 'center',
  },
  footerText: {
    margin: 0,
    fontSize: '1em',
    marginLeft:'300px',
  },
};

export default Landing;
