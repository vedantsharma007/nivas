const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model
const jwt = require('jsonwebtoken'); // For creating JSON Web Tokens

// --- You'll need to install jsonwebtoken: ---
// cd nivasa/backend
// npm install jsonwebtoken

// --- IMPORTANT: Secret Key for JWTs ---
// In a real application, this should be an environment variable (e.g., process.env.JWT_SECRET)
// For now, you can hardcode it, but ensure it's a long, random, complex string.
const JWT_SECRET = 'your_super_secret_jwt_key_that_is_very_long_and_random_12345'; // REPLACE WITH A REAL SECRET!

// @route   POST /api/auth/register
// @desc    Register new user
// @access  Public
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        // 2. Create new user instance (password hashing happens in pre-save hook)
        user = new User({
            email,
            password
        });

        // 3. Save user to database
        await user.save();

        // 4. Create and send JWT (similar to login, so user is automatically logged in after registration)
        const payload = {
            user: {
                id: user.id // Mongoose automatically creates an '_id' field, which we can access as 'id'
            }
        };

        jwt.sign(
            payload,
            JWT_SECRET,
            { expiresIn: '1h' }, // Token expires in 1 hour
            (err, token) => {
                if (err) throw err;
                res.status(201).json({ message: 'User registered successfully!', token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error during registration.');
    }
});


// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Check if user exists
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials.' }); // Generic message for security
        }

        // 2. Compare provided password with hashed password in DB
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials.' });
        }

        // 3. Create and send JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            JWT_SECRET,
            { expiresIn: '1h' }, // Token expires in 1 hour
            (err, token) => {
                if (err) throw err;
                res.json({ message: 'Logged in successfully!', token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error during login.');
    }
});


module.exports = router;