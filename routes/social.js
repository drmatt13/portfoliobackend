const express = require("express");
const router = express.Router();

// middleware
const auth = require('../middleware/auth');

const { getUsers, metadata, getUser, getPosts, createPost, getNews, createNews } = require("../controllers/social");


router
.route('/users')
.post(auth, getUsers);

router
  .route('/metadata')
    .get(metadata);

router
  .route('/news')
    .get(auth, getNews) 
    .post(auth, createNews);
    
router
  .route('/:id')
    .get(auth, getUser);

router
  .route('/:id/post')
    .get(auth, getPosts) 
    .post(auth, createPost);



module.exports = router;