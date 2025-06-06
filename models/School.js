// *************** IMPORT CORE ***************
const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  // School's name for identification
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // School's address for additional data
  address: {
    type: String,
    default: '',
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

// Define a virtual field to relate School with its Students
schoolSchema.virtual('students', {
  // The model to reference
  ref: 'Student',
  // Local field in School
  localField: '_id',
  // Field in Student that links back to School
  foreignField: 'schoolId',
});

// Ensure virtuals are included when converting to JSON or plain objects
schoolSchema.set('toObject', { virtuals: true });
schoolSchema.set('toJSON', { virtuals: true });

// *************** EXPORT MODULE ***************
module.exports = mongoose.model('School', schoolSchema);