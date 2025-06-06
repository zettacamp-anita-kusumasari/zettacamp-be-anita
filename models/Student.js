// *************** IMPORT CORE ***************
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // Student's first name for identification
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  // Student's last name for identification
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  // Student's email for identification
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // Student's date of birth for additional data
  dateOfBirth: {
    type: Date,
    default: null,
  },
  // Reference to the School the student belongs to
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School', 
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
module.exports = mongoose.model('Student', studentSchema);
