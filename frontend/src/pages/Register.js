// frontend/src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import '../assets/styles/global.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '' // For password confirmation
    });
    const [message, setMessage] = useState(''); // For success/error messages
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook to programmatically navigate

    const { email, password, password2 } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        if (password !== password2) {
            setMessage('Passwords do not match.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message || 'Registration successful!');
                // Store the token (important for future authenticated requests)
                if (data.token) {
                    localStorage.setItem('token', data.token); // Store in local storage
                    console.log('User registered and token stored:', data.token);
                    // Redirect to a dashboard or home page after successful registration
                    navigate('/services'); // Example: redirect to services page
                }
            } else {
                setMessage(data.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setMessage('An error occurred during registration. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={pageStyle}>
            <div style={formContainerStyle}>
                <h2 className="text-center" style={{ color: 'var(--primary-color)' }}>Register for NiVas</h2>
                <p className="text-center">Create your account to unlock personalized features.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" style={formGroupStyle}>
                        <label htmlFor="email" style={labelStyle}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            className="input-field"
                            required
                        />
                    </div>
                    <div className="form-group" style={formGroupStyle}>
                        <label htmlFor="password" style={labelStyle}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            className="input-field"
                            required
                            minlength="6"
                        />
                    </div>
                    <div className="form-group" style={formGroupStyle}>
                        <label htmlFor="password2" style={labelStyle}>Confirm Password:</label>
                        <input
                            type="password"
                            id="password2"
                            name="password2"
                            value={password2}
                            onChange={handleChange}
                            className="input-field"
                            required
                            minlength="6"
                        />
                    </div>
                    <button type="submit" className="btn" disabled={loading} style={buttonStyle}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                {message && (
                    <p style={{ ...messageStyle, color: message.includes('successful') ? 'green' : 'red' }}>
                        {message}
                    </p>
                )}

                <p style={loginPromptStyle}>
                    Already have an account? <Link to="/login" style={linkStyle}>Login here</Link>
                </p>
            </div>
        </div>
    );
};

const pageStyle = {
    padding: '60px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 120px)', // Adjust for header/footer height
    backgroundColor: '#f8f8f8'
};

const formContainerStyle = {
    background: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center'
};

const formGroupStyle = {
    marginBottom: '20px',
    textAlign: 'left'
};

const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: 'var(--text-color)'
};

const buttonStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '1.1em'
};

const messageStyle = {
    marginTop: '20px',
    fontWeight: 'bold',
    textAlign: 'center'
};

const loginPromptStyle = {
    marginTop: '20px',
    fontSize: '0.95em',
    color: 'var(--text-color)'
};

const linkStyle = {
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    textDecoration: 'none'
};


export default Register;