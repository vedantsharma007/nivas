import React from 'react';
import Hero from '../components/Hero';
import '../assets/styles/global.css';
// Import other section components
import Services from './Services';
import VastuPlans from './VastuPlans';
import Astrology from './Astrology';
import InteriorsExteriors from './InteriorsExteriors';
import FactoryFarmDesigns from './FactoryFarmDesigns';
import Poojan from './Poojan';
import Gallery from './Gallery';
import Contact from './Contact'; // Ensure Contact component is imported

const Home = () => {
    return (
        <div>
            <Hero />
            {/* Sections linked from Navbar and Hero button */}
            <section id="services" className="section-padding"> {/* IMPORTANT: id="services" for scrolling */}
                <div className="container">
                    <Services />
                </div>
            </section>
            <section id="vastu-plans" className="section-padding">
                <div className="container">
                    <VastuPlans />
                </div>
            </section>
            <section id="astrology" className="section-padding">
                <div className="container">
                    <Astrology />
                </div>
            </section>
            <section id="interiors-exteriors" className="section-padding">
                <div className="container">
                    <InteriorsExteriors />
                </div>
            </section>
            <section id="factory-farm-designs" className="section-padding">
                <div className="container">
                    <FactoryFarmDesigns />
                </div>
            </section>
            <section id="poojan" className="section-padding">
                <div className="container">
                    <Poojan />
                </div>
            </section>
            <section id="gallery" className="section-padding">
                <div className="container">
                    <Gallery />
                </div>
            </section>
            <section id="contact" className="section-padding">
                <div className="container">
                    <Contact /> {/* Render the Contact component here */}
                </div>
            </section>
        </div>
    );
};

export default Home;