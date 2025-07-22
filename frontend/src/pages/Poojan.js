import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for Contact Us button
import '../assets/styles/global.css';

const Poojan = () => {
    const [formData, setFormData] = useState({
        poojanType: '',
        preferredDate: '',
        name: '',
        contact: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const poojanTypes = [
        "Griha Pravesh (Housewarming)",
        "Bhoomi Poojan (Land Worship)",
        "Satyanarayan Katha",
        "Navagraha Shanti",
        "Rudra Abhishek",
        "Other (Please Specify)"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSubmissionStatus('');

        try {
            const response = await fetch('https://nivas-backend.onrender.com/api/plot/get-price', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit poojan request.');
            }

            const data = await response.json();
            setSubmissionStatus(data.message);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            setFormData({ poojanType: '', preferredDate: '', name: '', contact: '' }); // Clear form
        }
    };

    return (
        <div style={{ padding: '40px 0' }}>
            <h2 className="text-center">Poojan Services</h2>
            <p className="text-center">Book an auspicious Poojan ceremony for your home or business.</p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', marginTop: '40px' }}>
                <div style={poojanListStyle}>
                    <h3>Common Poojan Types:</h3>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        {poojanTypes.map((type, index) => (
                            <li key={index} style={{ marginBottom: '8px' }}>{type}</li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={handleSubmit} style={formStyle}>
                    <h3>Request a Poojan</h3>
                    <div style={formGroupStyle}>
                        <label htmlFor="poojanType" style={labelStyle}>Select Poojan Type:</label>
                        <select id="poojanType" name="poojanType" value={formData.poojanType} onChange={handleChange} required style={inputStyle}>
                            <option value="">-- Select a Poojan --</option>
                            {poojanTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="preferredDate" style={labelStyle}>Preferred Date:</label>
                        <input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="name" style={labelStyle}>Your Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="contact" style={labelStyle}>Your Contact (Email or Phone):</label>
                        <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required style={inputStyle} />
                    </div>
                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? 'Submitting...' : 'Book Poojan'}
                    </button>
                </form>
            </div>

            {error && <p style={errorStyle}>Error: {error}</p>}
            {submissionStatus && <p style={successStyle}>{submissionStatus}</p>}

            <div className="text-center" style={{ marginTop: '30px' }}>
                <p>For custom Poojan requests or more details, please <Link to="/contact" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>contact us</Link>.</p>
            </div>
        </div>
    );
};

const poojanListStyle = {
    background: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    maxWidth: '600px',
    width: '100%',
};

const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    width: '100%',
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

export default Poojan;