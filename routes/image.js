const express = require('express');
const router = express.Router();

const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
}).single('avatar');

// middleware
// const auth = require('../middleware/auth');

const { uploadImage, getProfileImage } = require("../controllers/image");

router
  .route('/profile/:id')
    .get(getProfileImage);
    
router
  .route('/:id')
    .post(upload, uploadImage);


module.exports = router;