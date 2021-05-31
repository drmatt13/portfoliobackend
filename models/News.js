const mongoose = require('mongoose');

// create mongoose schema object
const Schema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'Please add a userId'],
    trim: true,
    length: [24, 'please make sure length of userId is 24']
  },
  postContent: {
    type: String,
    trim: true
  },
  ogMetadata: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// The collection name for this DB is defined in the export
module.exports = mongoose.model('News', Schema);