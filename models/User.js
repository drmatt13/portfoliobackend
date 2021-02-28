const mongoose = require('mongoose');

// create mongoose schema object
const Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please add a first name'],
    trim: true,
    maxlength: [25, 'First name can not be more then 20 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Please add a last name'],
    trim: true,
    maxlength: [25, 'Last name can not be more then 20 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
    maxlength: [50, 'Email can not be more then 20 characters']
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    unique: true,
    trim: true,
    maxlength: [255, 'Password can not be more then 255 characters'],
    select: false
  },
  defaultImage: {
    type: String
  },
  images: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// The collection name for this DB is defined in the export
module.exports = mongoose.model('User', Schema);