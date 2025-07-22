import React, { useState } from 'react';
import '../assets/styles/global.css';

const PaymentGateway = ({ onPaymentSuccess, amount }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        if (!paymentMethod) {
            setPaymentStatus('Please select a payment method.');
            return;
        }

        setLoading(true);
        setPaymentStatus('Processing payment...');

        try {
            // Simulate API call for payment
            await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

            // Mock success for any method (90% chance of success)
            if (Math.random() > 0.1) {
                setPaymentStatus('Payment successful! Unlocking premium features...');
                setTimeout(() => {
                    onPaymentSuccess(); // Call the parent's success handler
                }, 1000);
            } else {
                setPaymentStatus('Payment failed. Please try again.');
            }
        } catch (error) {
            setPaymentStatus('An error occurred during payment.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={paymentContainerStyle}>
            <h3 className="text-center">Complete Your Payment</h3>
            <p className="text-center">Amount: ₹{amount}</p>

            <div style={paymentOptionsStyle}>
                <label style={radioLabelStyle}>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={paymentMethod === 'upi'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    UPI
                </label>
                <label style={radioLabelStyle}>
                    <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit/Debit Card
                </label>
                {/* Add more mock options as needed */}
            </div>

            <button className="btn" onClick={handlePayment} disabled={loading} style={payButtonStyle}>
                {loading ? 'Processing...' : 'Pay Now'}
            </button>

            {paymentStatus && <p style={paymentStatusStyle}>{paymentStatus}</p>}
        </div>
    );
};

const paymentContainerStyle = {
    background: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    maxWidth: '500px',
    margin: '50px auto',
    textAlign: 'center',
};

const paymentOptionsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    margin: '30px 0',
};

const radioLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '1.1em',
};

const payButtonStyle = {
    width: '80%',
    padding: '12px',
    fontSize: '1.1em',
};

const paymentStatusStyle = {
    marginTop: '20px',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
};

export default PaymentGateway;