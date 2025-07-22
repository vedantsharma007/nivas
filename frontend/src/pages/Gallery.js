import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../assets/styles/global.css';
import designImage1 from '../assets/images/living-room-design.jpg';
import designImage2 from '../assets/images/vastu-symbol.jpg';
// Add more images here
import designImage3 from '../assets/images/villa.jpg'; // Use unique images
import designImage4 from '../assets/images/house.jpg';


const Gallery = () => {
    const images = [
        { src: designImage1, alt: 'Design 1', title: 'Serene Living Space' },
        { src: designImage2, alt: 'Design 2', title: 'Harmonious Kitchen' },
        { src: designImage3, alt: 'Design 3', title: 'Elegant Bedroom' },
        { src: designImage4, alt: 'Design 4', title: 'Spacious Exterior' },
        // Add more image objects as you add images to assets/images
    ];

    return (
        <div style={{ padding: '40px 0' }}>
            <h2 className="text-center">Our Design Gallery</h2>
            <p className="text-center">A visual showcase of our interior, exterior, and Vastu-inspired designs.</p>

            <div style={galleryGridStyle}>
                {images.map((image, index) => (
                    <div key={index} style={galleryItemStyle}>
                        <img src={image.src} alt={image.alt} style={galleryImageStyle} />
                        <h4 style={galleryTitleStyle}>{image.title}</h4>
                    </div>
                ))}
            </div>

            <div className="text-center" style={{ marginTop: '50px' }}>
                <p>Looking for something specific? <Link to="/contact" className="btn">Contact Us for Custom Designs</Link></p> {/* Link to Contact page */}
            </div>
        </div>
    );
};

const galleryGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginTop: '40px',
};

const galleryItemStyle = {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    textAlign: 'center',
    paddingBottom: '15px',
};

const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '10px',
};

const galleryTitleStyle = {
    color: 'var(--primary-color)',
    fontSize: '1.1em',
    marginBottom: '5px',
};

export default Gallery;