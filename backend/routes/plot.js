const express = require('express');
const router = express.Router();

router.post('/get-price', (req, res) => {
    const { plotSize } = req.body;

    if (!plotSize || isNaN(plotSize) || plotSize <= 0) {
        return res.status(400).json({ message: 'Invalid plot size provided. Please enter a positive number.' });
    }

    // Mock pricing logic:
    let price = 0;
    let suggestedPlan = '';

    if (plotSize < 1000) {
        price = 5100; // Small plots
        suggestedPlan = 'Basic Vastu Layout';
    } else if (plotSize >= 1000 && plotSize < 3000) {
        price = 11000; // Medium plots
        suggestedPlan = 'Standard Vastu Design with Detailed Analysis';
    } else {
        price = 21000; // Large plots
        suggestedPlan = 'Premium Vastu Master Plan with Personal Consultation';
    }

    res.json({ plotSize, suggestedPlan, price });
});

module.exports = router;