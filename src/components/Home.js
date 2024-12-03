import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  // CSS variables for theming
  const primaryColor = '#007bff'; // Bootstrap primary color
  const secondaryColor = '#6c757d'; // Bootstrap secondary color
  const accentColor = '#ffc107'; // Bootstrap warning color

  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '2rem',
      backgroundColor: '#f8f9fa', // Light background color
      color: secondaryColor,
      textAlign: 'center',
    },
    heading: {
      fontSize: '4rem',
      marginBottom: '1rem',
      color: primaryColor,
    },
    paragraph: {
      fontSize: '1.25rem',
      maxWidth: '700px',
      lineHeight: '1.6',
    },
    button: {
      marginTop: '1rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: accentColor,
      color: '#000',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '1.25rem',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#e0a800', // Darker accent color
      transform: 'scale(1.05)',
    }
  };

  return (
    <div style={styles.container} className="container">
      <h1 style={styles.heading}>Welcome to Our Site!</h1>
      <p style={styles.paragraph}>
        We're thrilled to have you here. Explore our site to discover more about what we offer and how we can assist you in your journey.
      </p>
      <button
        style={styles.button}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        className="btn"
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
