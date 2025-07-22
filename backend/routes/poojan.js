const express = require('express');
const router = express.Router();

router.post('/request', (req, res) => {
    const { poojanType, preferredDate, name, contact } = req.body;

    // In a real application, you would save this to a database,
    // send an email notification, or integrate with a booking system.
    console.log(`Poojan Request Received:
        Type: ${poojanType}
        Date: ${preferredDate}
        Name: ${name}
        Contact: ${contact}`);

    // Simulate a successful response
    res.json({ message: 'Poojan request received successfully. We will contact you shortly to confirm details.' });
});

module.exports = router;