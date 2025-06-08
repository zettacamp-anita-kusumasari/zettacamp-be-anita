// *************** IMPORT CORE ***************
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // User's first name for identification
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  // User's last name for identification
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  // User's email for identification
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // Role of the user (e.g., admin, student)
  role: {
    type: String,
    required: true,
  },
  // Password for authentication
  password: {
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

// *************** EXPORT MODULE ***************
module.exports = mongoose.model('User', userSchema);