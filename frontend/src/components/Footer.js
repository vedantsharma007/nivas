import React from 'react';
import '../assets/styles/global.css';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div className="container" style={footerContentStyle}>
                <p>&copy; {new Date().getFullYear()} NiVas. All rights reserved.</p>
                {/* You can add social media links or other information here */}
            </div>
        </footer>
    );
};

const footerStyle = {
    background: 'var(--primary-color)',
    color: 'var(--light-text-color)',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: 'auto' // Pushes footer to the bottom
};

const footerContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.9em'
};

export default Footer;