// *************** IMPORT LIBRARY ***************
const mongoose = require('mongoose');

// *************** START: Description of the section ***************
// Define the schema for School
const schoolSchema = new mongoose.Schema({
  // School name (required)
  name: {
    type: String,
    required: true,
    trim: true,
  },
  // School address (optional)
  address: {
    type: String,
    default: '',
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

// Export the School model
module.exports = mongoose.model('School', schoolSchema);
// *************** END: Description of the section ***************