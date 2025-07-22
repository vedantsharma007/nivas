const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // For password hashing

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no two users have the same email
        lowercase: true, // Stores email in lowercase
        trim: true, // Removes whitespace from both ends
        match: [/.+@.+\..+/, 'Please enter a valid email address'] // Basic email regex validation
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// --- Mongoose Middleware to Hash Password Before Saving ---
// 'pre' hook runs before a 'save' operation
UserSchema.pre('save', async function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10); // Generate a salt (cost factor 10)
        this.password = await bcrypt.hash(this.password, salt); // Hash the password
        next(); // Move to the next middleware or save operation
    } catch (err) {
        next(err); // Pass error to the next middleware
    }
});

// --- Method to Compare Passwords for Login ---
UserSchema.methods.comparePassword = async function(candidatePassword) {
    // 'this.password' refers to the hashed password stored in the database
    return await bcrypt.compare(candidatePassword, this.password);
};


module.exports = mongoose.model('User', UserSchema);