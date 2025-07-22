import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaymentGateway from '../components/PaymentGateway'; // Import PaymentGateway
import '../assets/styles/global.css';

const VastuPlans = () => {
    const [plotSize, setPlotSize] = useState('');
    const [planDetails, setPlanDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPayment, setShowPayment] = useState(false); // State to control payment gateway visibility
    const [isPremiumUnlocked, setIsPremiumUnlocked] = useState(false); // State to track premium access

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setPlanDetails(null);
        setShowPayment(false); // Hide payment gateway on new submission

        try {
            const response = await fetch('http://localhost:5000/api/plot/get-price', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ plotSize: parseInt(plotSize) }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch plan details.');
            }

            const data = await response.json();
            setPlanDetails(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePaymentSuccess = () => {
        setIsPremiumUnlocked(true);
        setShowPayment(false);
        // In a real app, you might save this state to local storage or a user session
        // alert('Premium Vastu Plan details unlocked!'); // Use a custom modal instead of alert
    };

    return (
        <div style={{ padding: '40px 0' }}>
            <h2 className="text-center">Vastu Plans & Plot Size Calculator</h2>
            <p className="text-center">Enter your plot size to get a suggested plan and estimated price.</p>

            {!isPremiumUnlocked && !showPayment && ( // Only show form if not unlocked and not showing payment
                <form onSubmit={handleSubmit} style={formStyle}>
                    <div style={formGroupStyle}>
                        <label htmlFor="plotSize" style={labelStyle}>Plot Size (in sq ft):</label>
                        <input
                            type="number"
                            id="plotSize"
                            value={plotSize}
                            onChange={(e) => setPlotSize(e.target.value)}
                            required
                            style={inputStyle}
                        />
                    </div>
                    <button type="submit" className="btn" disabled={loading}>
                        {loading ? 'Calculating...' : 'Get Plan & Price'}
                    </button>
                </form>
            )}

            {error && <p style={errorStyle}>Error: {error}</p>}

            {planDetails && !showPayment && !isPremiumUnlocked && ( // Show plan details and payment button if calculated and not yet paid
                <div style={resultStyle}>
                    <h3>Suggested Plan:</h3>
                    <p><strong>Plot Size:</strong> {planDetails.plotSize} sq ft</p>
                    <p><strong>Plan:</strong> {planDetails.suggestedPlan}</p>
                    <p><strong>Estimated Price:</strong> ₹{planDetails.price}</p>
                    <button className="btn" style={{ marginTop: '20px' }} onClick={() => setShowPayment(true)}>
                        Proceed to Payment
                    </button>
                </div>
            )}

            {showPayment && planDetails && ( // Show PaymentGateway if requested and planDetails exist
                <PaymentGateway onPaymentSuccess={handlePaymentSuccess} amount={planDetails.price} />
            )}

            {isPremiumUnlocked && ( // Show premium content if unlocked
                <div style={unlockedContentStyle}>
                    <h3>🎉 Detailed Vastu Plan Unlocked! 🎉</h3>
                    <p>Thank you for your payment. Here are your premium Vastu plan details and next steps:</p>
                    <p><strong>Your Plan:</strong> {planDetails.suggestedPlan}</p>
                    <p>We will contact you shortly to gather more specific requirements and begin your personalized Vastu design process. You can also <Link to="/contact" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>contact us</Link> directly.</p>
                    {/* Add more detailed premium content or download links here */}
                </div>
            )}
        </div>
    );
};

const formStyle = {
    maxWidth: '500px',
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

const unlockedContentStyle = {
    marginTop: '40px',
    padding: '30px',
    background: '#d4edda', // Light green for success
    border: '1px solid #28a745', // Green border
    borderRadius: '8px',
    textAlign: 'center',
    color: '#155724', // Dark green text
};

export default VastuPlans;