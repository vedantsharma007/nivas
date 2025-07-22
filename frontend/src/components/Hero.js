import React from 'react';
import { Link } from 'react-router-dom'; // IMPORT Link for navigation
import '../assets/styles/global.css';
import backgroundImage from '../assets/images/home-background.jpg'; // Import your image

const Hero = () => {

    // Function to scroll to a specific section ID
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Using setTimeout to ensure rendering happens before scroll,
            // especially important for single-page applications with routing.
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100); // Small delay to allow react-router to render
        }
    };

    return (
        <div style={{ ...heroStyle, backgroundImage: `url(${backgroundImage})` }}>
            <div style={overlayStyle}>
                <div className="container" style={heroContentStyle}>
                    {/* UPDATED TAGLINE */}
                    <h1 style={taglineStyle}>घर अच्छा तो आप अच्छे — इसलिए जल्दीबाज़ी से नहीं, वास्तु से बनाएं अपना घर।</h1>
                    <p style={subTaglineStyle}>
                        Unlock harmonious living and prosperity with expert Vastu, Astrology, and Design solutions.
                    </p>
                    {/* Button now uses Link and onClick for smooth scrolling */}
                    <Link
                        to="/#services" // Navigates to the home page and targets the 'services' section ID
                        className="btn"
                        onClick={() => scrollToSection('services')} // Triggers smooth scroll
                    >
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

const heroStyle = {
    height: '600px', // Adjust as needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'var(--light-text-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
};

const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'var(--background-opacity)', // This creates the light opacity
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1, // Ensure overlay is above background but below content
};

const heroContentStyle = {
    position: 'relative', // Content needs to be above overlay
    zIndex: 2,
};

const taglineStyle = {
    fontSize: '3em',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    color: 'var(--primary-color)', // Adjust color for visibility
};

const subTaglineStyle = {
    fontSize: '1.2em',
    marginBottom: '30px',
    color: 'var(--text-color)',
};

export default Hero;