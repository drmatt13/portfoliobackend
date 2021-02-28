const express = require("express");
const router = express.Router();

// middleware
const auth = require('../middleware/auth');

const { getUser, getUsers, getPosts, createPost } = require("../controllers/social");

router
  .route('/:id')
    .get(auth, getUser);

router
  .route('/users')
    .post(auth, getUsers);

router
  .route('/:id/post')
    .get(auth, getPosts) 
    .post(auth, createPost);

module.exports = router;