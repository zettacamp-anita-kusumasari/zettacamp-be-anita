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
  // Soft delete field
  deletedAt: {
    type: Date,
    default: null,
  },
}, {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
});

// *************** EXPORT MODULE ***************
module.exports = mongoose.model('School', schoolSchema);