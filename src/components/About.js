import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  // Inline styles for the component
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '2rem',
      backgroundColor: '#f0f8ff',
      color: '#333',
      textAlign: 'center',
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '1rem',
      color: '#ff6347', // Tomato color
    },
    paragraph: {
      fontSize: '1.25rem',
      maxWidth: '800px',
      lineHeight: '1.6',
      marginBottom: '1rem',
    },
    button: {
      marginTop: '1rem',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#ff6347', // Tomato color
      color: '#fff',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontSize: '1.25rem',
      transition: 'background-color 0.3s, transform 0.3s',
    },
    buttonHover: {
      backgroundColor: '#e55347', // Darker tomato color
      transform: 'scale(1.05)',
    },
    additionalInfo: {
      marginTop: '1rem',
      padding: '1rem',
      maxWidth: '800px',
      backgroundColor: '#ffffff',
      borderRadius: '0.25rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
    },
    sectionHeading: {
      fontSize: '2rem',
      marginTop: '1rem',
      color: '#ff6347',
    },
    sectionParagraph: {
      fontSize: '1rem',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.container} className="container">
      <h1 style={styles.heading} className="display-4">About Our Music</h1>
      <p style={styles.paragraph} className="lead">
        Welcome to our music page. Here, you will find information about our latest tracks, albums, and more.
      </p>
      <button
        style={styles.button}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        className="btn btn-primary"
      >
        Discover More
      </button>
      <div style={styles.additionalInfo}>
        <h2 style={styles.sectionHeading}>Our Journey</h2>
        <p style={styles.sectionParagraph}>
          Our journey began in a small studio, where we experimented with sounds and rhythms to create music that resonates with listeners. Over time, we have expanded our repertoire and worked with numerous artists to bring diverse and captivating music to the world.
        </p>
        <h2 style={styles.sectionHeading}>Upcoming Releases</h2>
        <p style={styles.sectionParagraph}>
          Stay tuned for our upcoming releases. We are working on new tracks that blend various genres to bring fresh and exciting music. Follow us on social media for updates and exclusive previews.
        </p>
        <h2 style={styles.sectionHeading}>Contact Us</h2>
        <p style={styles.sectionParagraph}>
          Have any questions or suggestions? Feel free to reach out to us via email at <a href="mailto:info@musicpage.com">info@musicpage.com</a>. We would love to hear from you!
        </p>
      </div>
    </div>
  );
}

export default About;
