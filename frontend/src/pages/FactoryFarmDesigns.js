import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for Contact Us button
import '../assets/styles/global.css';

const FactoryFarmDesigns = () => {
    const [formData, setFormData] = useState({
        plotDetails: '',
        purpose: '',
        contactEmail: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSubmissionStatus('');

        // In a real application, you'd send this to your backend
        try {
            // Mock API call - you could add a backend endpoint for this later
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
            console.log('Factory/Farm Design Request:', formData);
            setSubmissionStatus('Your request has been submitted successfully. We will contact you soon!');
        } catch (err) {
            setError('Failed to submit request. Please try again.');
        } finally {
            setLoading(false);
            setFormData({ plotDetails: '', purpose: '', contactEmail: '' }); // Clear form
        }
    };

    return (
        <div style={{ padding: '40px 0' }}>
            <h2 className="text-center">Factory / Farm Vastu Designs (Premium)</h2>
            <p className="text-center">Optimize the energy flow and productivity of your industrial or agricultural space with our specialized Vastu designs.</p>

            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={formGroupStyle}>
                    <label htmlFor="plotDetails" style={labelStyle}>Plot Details (Size, Location, etc.):</label>
                    <textarea
                        id="plotDetails"
                        name="plotDetails"
                        value={formData.plotDetails}
                        onChange={handleChange}
                        rows="5"
                        required
                        style={inputStyle}
                    ></textarea>
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="purpose" style={labelStyle}>Purpose (e.g., Textile Factory, Dairy Farm):</label>
                    <input type="text" id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required style={inputStyle} />
                </div>
                <div style={formGroupStyle}>
                    <label htmlFor="contactEmail" style={labelStyle}>Your Contact Email:</label>
                    <input type="email" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required style={inputStyle} />
                </div>
                <button type="submit" className="btn" disabled={loading}>
                    {loading ? 'Submitting...' : 'Request Design Consultation'}
                </button>
            </form>

            {error && <p style={errorStyle}>Error: {error}</p>}
            {submissionStatus && <p style={successStyle}>{submissionStatus}</p>}

            <div className="text-center" style={{ marginTop: '30px' }}>
                <p>Need more information? <Link to="/contact" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Contact Us</Link>.</p>
            </div>
        </div>
    );
};

const formStyle = {
    maxWidth: '700px',
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

const errorStyle = {
    color: 'red',
    textAlign: 'center',
    marginTop: '20px',
};

const successStyle = {
    color: 'green',
    textAlign: 'center',
    marginTop: '20px',
};

export default FactoryFarmDesigns;