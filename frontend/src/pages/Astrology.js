import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for Contact Us button
import PaymentGateway from '../components/PaymentGateway'; // Import PaymentGateway
import '../assets/styles/global.css';

const Astrology = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        time: '',
        location: ''
    });
    const [astrologyAdvice, setAstrologyAdvice] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPayment, setShowPayment] = useState(false);
    const [isPremiumUnlocked, setIsPremiumUnlocked] = useState(false); // State to track premium access

    const consultationPrice = 2500; // Mock price for astrology consultation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setAstrologyAdvice('');

        try {
            // This part will only run AFTER payment is successful
            const response = await fetch('http://localhost:5000/api/astrology', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to get astrological advice.');
            }

            const data = await response.json();
            setAstrologyAdvice(data.advice);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePaymentSuccess = () => {
        setIsPremiumUnlocked(true);
        setShowPayment(false);
        // Automatically submit the form after successful payment
        handleSubmit(new Event('submit')); // Trigger form submission
    };

    return (
        <div style={{ padding: '40px 0' }}>
            <h2 className="text-center">Astrology Consultation</h2>
            <p className="text-center">Fill out the form below to receive personalized astrological advice. This is a premium service.</p>

            {!isPremiumUnlocked && !showPayment && ( // Show form to collect details and initiate payment
                <form onSubmit={(e) => { e.preventDefault(); setShowPayment(true); }} style={formStyle}>
                    <div style={formGroupStyle}>
                        <label htmlFor="name" style={labelStyle}>Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="dob" style={labelStyle}>Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="time" style={labelStyle}>Time of Birth:</label>
                        <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="location" style={labelStyle}>Place of Birth:</label>
                        <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <button type="submit" className="btn">
                        Proceed to Payment (₹{consultationPrice})
                    </button>
                </form>
            )}

            {showPayment && ( // Show payment gateway
                <PaymentGateway onPaymentSuccess={handlePaymentSuccess} amount={consultationPrice} />
            )}

            {error && <p style={errorStyle}>Error: {error}</p>}

            {isPremiumUnlocked && !astrologyAdvice && loading && ( // Show loading after payment and before advice
                <p style={loadingStyle}>Generating your astrological advice...</p>
            )}

            {isPremiumUnlocked && astrologyAdvice && ( // Show advice after payment and successful API call
                <div style={resultStyle}>
                    <h3>Your Astrological Advice:</h3>
                    <p>{astrologyAdvice}</p>
                    <p style={{ marginTop: '20px' }}>For a more in-depth consultation, please <Link to="/contact" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>contact us</Link>.</p>
                </div>
            )}
        </div>
    );
};

const formStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
};

const formGroupStyle = {
    marginBottom: '20px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1em',
};

const resultStyle = {
    marginTop: '40px',
    padding: '30px',
    background: '#e6f7ff',
    border: '1px solid #b3e0ff',
    borderRadius: '8px',
    textAlign: 'center',
};

const errorStyle = {
    color: 'red',
    textAlign: 'center',
    marginTop: '20px',
};

const loadingStyle = {
    textAlign: 'center',
    marginTop: '20px',
    color: 'var(--primary-color)',
    fontWeight: 'bold',
};

export default Astrology;