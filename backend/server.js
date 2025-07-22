const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

const DB_URI = 'mongodb://localhost:27017/nivasa_db'; // Your DB connection string

// Connect to MongoDB
mongoose.connect(DB_URI)
    .then(() => console.log('MongoDB Connected Successfully!'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const apiRoutes = require('./routes/api');
const poojanRoutes = require('./routes/poojan');
const astrologyRoutes = require('./routes/astrology');
const plotRoutes = require('./routes/plot');
const authRoutes = require('./routes/auth'); // <-- ADD THIS LINE

// Use routes
app.use('/api', apiRoutes);
app.use('/api/poojan', poojanRoutes);
app.use('/api/astrology', astrologyRoutes);
app.use('/api/plot', plotRoutes);
app.use('/api/auth', authRoutes); // <-- ADD THIS LINE to use auth routes

// Basic test route
app.get('/', (req, res) => {
    res.send('NiVas Backend is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});