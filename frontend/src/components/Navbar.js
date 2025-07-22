// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/global.css';

const Navbar = () => {
    return (
        <nav style={navbarStyle}>
            <div className="container" style={navContentStyle}>
                <Link to="/" style={logoStyle}>NiVas</Link>
                <ul style={navListStyle}>
                    <li style={navItemStyle}><Link to="/" className="nav-link" style={navLinkStyle}>Home</Link></li>
                    <li style={navItemStyle}><Link to="/services" className="nav-link" style={navLinkStyle}>Services</Link></li>
                    <li style={navItemStyle}><Link to="/vastu-plans" className="nav-link" style={navLinkStyle}>Vastu Plans</Link></li>
                    <li style={navItemStyle}><Link to="/astrology" className="nav-link" style={navLinkStyle}>Astrology</Link></li>
                    <li style={navItemStyle}><Link to="/interiors-exteriors" className="nav-link" style={navLinkStyle}>Interiors/Exteriors</Link></li>
                    <li style={navItemStyle}><Link to="/factory-farm-designs" className="nav-link" style={navLinkStyle}>Factory/Farm Designs</Link></li>
                    <li style={navItemStyle}><Link to="/poojan" className="nav-link" style={navLinkStyle}>Poojan</Link></li>
                    <li style={navItemStyle}><Link to="/contact" className="nav-link" style={navLinkStyle}>Contact</Link></li>
                    {/* NEW NAVIGATION LINKS */}
                    <li style={navItemStyle}><Link to="/register" className="nav-link" style={navLinkStyle}>Register</Link></li> {/* <-- ADD THIS LINE */}
                    <li style={navItemStyle}><Link to="/login" className="nav-link" style={navLinkStyle}>Login</Link></li>       {/* <-- ADD THIS LINE */}
                </ul>
            </div>
        </nav>
    );
};

// Inline styles for demonstration, ideally move to CSS file
const navbarStyle = {
    background: 'rgba(255, 255, 255, 0.9)',
    color: 'var(--primary-color)',
    padding: '15px 0',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
};

const navContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const logoStyle = {
    fontSize: '1.8em',
    fontWeight: 'bold',
    color: 'var(--primary-color)'
};

const navListStyle = {
    display: 'flex'
};

const navItemStyle = {
    marginLeft: '30px'
};

const navLinkStyle = {
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
};


export default Navbar;