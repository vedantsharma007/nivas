// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import VastuPlans from './pages/VastuPlans';
import Astrology from './pages/Astrology';
import InteriorsExteriors from './pages/InteriorsExteriors';
import FactoryFarmDesigns from './pages/FactoryFarmDesigns';
import Poojan from './pages/Poojan';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
// NEW IMPORTS
import Register from './pages/Register'; // <-- ADD THIS LINE
import Login from './pages/Login';       // <-- ADD THIS LINE

import './App.css'; // For overall app styling
import './assets/styles/global.css'; // For shared styles

function App() {
    return (
        <Router>
            <div className="App" style={appContainerStyle}>
                <Navbar />
                <main style={mainContentStyle}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/vastu-plans" element={<VastuPlans />} />
                        <Route path="/astrology" element={<Astrology />} />
                        <Route path="/interiors-exteriors" element={<InteriorsExteriors />} />
                        <Route path="/factory-farm-designs" element={<FactoryFarmDesigns />} />
                        <Route path="/poojan" element={<Poojan />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/gallery" element={<Gallery />} />
                        {/* NEW ROUTES */}
                        <Route path="/register" element={<Register />} /> {/* <-- ADD THIS LINE */}
                        <Route path="/login" element={<Login />} />       {/* <-- ADD THIS LINE */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

const appContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
};

const mainContentStyle = {
    flex: '1',
};

export default App;