// *************** IMPORT LIBRARY ***************
const mongoose = require('mongoose');

// *************** START: Description of the section ***************
// Define the schema for Student
const studentSchema = new mongoose.Schema({
  // Student's first name (required)
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  // Student's last name (required)
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  // Student's email (required, unique, lowercase)
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // Student's date of birth (optional)
  dateOfBirth: {
    type: Date,
    default: null,
  },
  // Reference to the School the student belongs to (required)
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    // Refers to the School model
    ref: 'School', 
    required: true,
  },
  // Soft delete field
  deletedAt: {
    type: Date,
    default: null,
  },
}, {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
});

// Export the Student model
module.exports = mongoose.model('Student', studentSchema);
// *************** END: Description of the section ***************
