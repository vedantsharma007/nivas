// frontend/src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import '../assets/styles/global.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState(''); // For success/error messages
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Hook to programmatically navigate

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message || 'Login successful!');
                // Store the token
                if (data.token) {
                    localStorage.setItem('token', data.token); // Store in local storage
                    console.log('User logged in and token stored:', data.token);
                    // Redirect to a dashboard or home page after successful login
                    navigate('/services'); // Example: redirect to services page
                    // You might also want to set global state here for user login status
                }
            } else {
                setMessage(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setMessage('An error occurred during login. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={pageStyle}>
            <div style={formContainerStyle}>
                <h2 className="text-center" style={{ color: 'var(--primary-color)' }}>Login to NiVas</h2>
                <p className="text-center">Access your personalized dashboard.</p>
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
                        />
                    </div>
                    <button type="submit" className="btn" disabled={loading} style={buttonStyle}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                {message && (
                    <p style={{ ...messageStyle, color: message.includes('successful') ? 'green' : 'red' }}>
                        {message}
                    </p>
                )}

                <p style={registerPromptStyle}>
                    Don't have an account? <Link to="/register" style={linkStyle}>Register here</Link>
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
    borderRadius: '88px', // Typo fixed: changed from '88px' to '8px'
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

const registerPromptStyle = {
    marginTop: '20px',
    fontSize: '0.95em',
    color: 'var(--text-color)'
};

const linkStyle = {
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    textDecoration: 'none'
};

export default Login;