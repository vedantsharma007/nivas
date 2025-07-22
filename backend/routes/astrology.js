const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, dob, time, location } = req.body;

    // Mock astrological advice - In a real app, this would involve complex calculations or an external API
    const advice = `Dear ${name}, based on your birth details (${dob}, ${time}, ${location}), your current planetary alignments suggest a favorable period for new beginnings. Focus on clear communication and positive energy.`;

    res.json({ advice });
});

module.exports = router;