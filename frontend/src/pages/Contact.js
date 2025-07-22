import React from 'react';
import '../assets/styles/global.css';

const Contact = () => {
    return (
        <div style={{ padding: '40px 0', textAlign: 'center' }}>
            <h2 className="text-center">Contact Us</h2>
            <p style={{ marginTop: '20px', fontSize: '1.1em' }}>
                Have questions or need assistance? Reach out to us!
            </p>
            <div style={{ marginTop: '30px' }}>
                <p><strong>Email:</strong> info@nivas.com</p>
                <p><strong>Phone:</strong> +91-123-4567890</p>
                <p><strong>Address:</strong> 123 Vastu Marg, Harmony City, India</p>
            </div>

            <form style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <h3>Send Us a Message</h3>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Name:</label>
                    <input type="text" id="name" name="name" className="input-field" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email:</label>
                    <input type="email" id="email" name="email" className="input-field" />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Message:</label>
                    <textarea id="message" name="message" rows="5" className="input-field"></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;