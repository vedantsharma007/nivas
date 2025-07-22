import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../assets/styles/global.css';

const Services = () => {
    return (
        <div style={{ padding: '40px 0' }}>
            <h2 className="text-center">Our Services</h2>
            <p className="text-center">Discover the range of services NiVas offers to bring harmony and prosperity to your space.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
                {/* Free Section */}
                <div style={serviceCardStyle}>
                    <h3>Basic Interior/Exterior Design (Free)</h3>
                    <p>Visualize your space with our free basic design options. These designs focus on aesthetics and functionality, offering a glimpse into possibilities for your home or office.</p>
                    <Link to="/interiors-exteriors" className="btn">View Free Designs</Link> {/* Link to Interiors/Exteriors page */}
                </div>

                {/* Paid/Premium Sections */}
                <div style={serviceCardStyle}>
                    <h3>Vastu-Based Home Planning (Premium)</h3>
                    <p>Harness the ancient science of Vastu Shastra to design spaces that promote health, wealth, and happiness. Our expert Vastu consultants provide personalized plans.</p>
                    <Link to="/vastu-plans" className="btn">Learn More</Link> {/* Link to Vastu Plans page */}
                </div>

                <div style={serviceCardStyle}>
                    <h3>Astrology Consultation (Premium)</h3>
                    <p>Receive personalized astrological insights and guidance to align your life choices with cosmic energies. Understand your strengths and mitigate challenges.</p>
                    <Link to="/astrology" className="btn">Book Consultation</Link> {/* Link to Astrology page */}
                </div>

                <div style={serviceCardStyle}>
                    <h3>Factory/Farm Design (Premium)</h3>
                    <p>Optimize productivity and success with Vastu-compliant designs for industrial and agricultural spaces. Ensure positive energy flow for your business ventures.</p>
                    <Link to="/factory-farm-designs" className="btn">Request Design</Link> {/* Link to Factory/Farm Designs page */}
                </div>

                <div style={serviceCardStyle}>
                    <h3>Poojan Services (Premium)</h3>
                    <p>Facilitate auspicious beginnings and remove obstacles with our comprehensive Poojan services, including Griha Pravesh, Bhoomi Poojan, and more.</p>
                    <Link to="/poojan" className="btn">Book Poojan</Link> {/* Link to Poojan page */}
                </div>
            </div>
        </div>
    );
};

const serviceCardStyle = {
    background: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    textAlign: 'center'
};


export default Services;