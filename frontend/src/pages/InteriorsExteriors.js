import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../assets/styles/global.css';
import designImage1 from '../assets/images/living-room-design.jpg'; // Placeholder images
import designImage2 from '../assets/images/vastu-symbol.jpg';
// Add more images here
import designImage3 from '../assets/images/villa.jpg'; // Use unique images
import designImage4 from '../assets/images/house.jpg';


const InteriorsExteriors = () => {
    return (
        <div style={{ padding: '40px 0' }}>
            <h2 className="text-center">Interiors & Exteriors Designs</h2>
            <p className="text-center">Explore our portfolio of beautiful and functional interior and exterior designs. (Free - not Vastu-compliant)</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                <div style={designCardStyle}>
                    <img src={designImage1} alt="Interior Design 1" style={imageStyle} />
                    <h3>Modern Living Room</h3>
                    <p>A contemporary design focusing on open spaces and natural light.</p>
                </div>
                <div style={designCardStyle}>
                    <img src={designImage2} alt="Exterior Design 1" style={imageStyle} />
                    <h3>Elegant House Frontage</h3>
                    <p>Sophisticated exterior with lush landscaping and welcoming entrance.</p>
                </div>
                {/* Add more design cards as needed */}
                <div style={designCardStyle}>
                    <img src={designImage3} alt="Villa Design" style={imageStyle} />
                    <h3>Luxurious Villa Exterior</h3>
                    <p>Grand design with intricate details and spacious outdoor areas.</p>
                </div>
                <div style={designCardStyle}>
                    <img src={designImage4} alt="House Design" style={imageStyle} />
                    <h3>Cozy Family Home</h3>
                    <p>Warm and inviting design perfect for family living.</p>
                </div>
            </div>

            <div className="text-center" style={{ marginTop: '50px' }}>
                <Link to="/gallery" className="btn">View More Designs</Link> {/* Link to Gallery page */}
            </div>
        </div>
    );
};

const designCardStyle = {
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    textAlign: 'center',
    paddingBottom: '20px',
};

const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    marginBottom: '15px',
};

export default InteriorsExteriors;