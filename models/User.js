// *************** IMPORT LIBRARY ***************
const mongoose = require('mongoose');

// *************** START: Description of the section ***************
// Define the schema for User
const userSchema = new mongoose.Schema({
  // User's first name (required)
  firstName: {
    type: String,
    required: true,
    // Remove whitespace from both ends
    trim: true,
  },
  // User's last name (required)
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  // User's email (required, unique, lowercase)
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // Password (required)
  password: {
    type: String,
    required: true,
  },
  // Role of the user (e.g., admin, student) — required
  role: {
    type: String,
    required: true,
  },
  // Soft delete field — if set, indicates the record is "deleted"
  deletedAt: {
    type: Date,
    default: null,
  },
}, {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
// *************** END: Description of the section ***************