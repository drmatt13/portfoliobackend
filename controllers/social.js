const urlMetadata = require('url-metadata');
const User = require('../models/User');
const Post = require('../models/Post');
const News = require('../models/News');


// @desc      Get User
// @route     GET /:id
// @access    Private
exports.getUser = async (req, res, next) => {

  const { activeUser } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return next(new Error('Invalid user'));
    }
    const myProfile = activeUser._id == id ? true : false;
    return res.json({ success: true, user, myProfile });
  } catch (error) {
    return next(new Error('error'));
  }
}

// @desc      Get Users
// @route     Post /users
// @access    Private
exports.getUsers = async (req, res, next) => {

  const { activeUser } = req.body;
  const { id } = req.params;

  try {

    const userArray = JSON.parse(req.body.users);
    const users = await User.find({_id: {"$in": userArray}});
    if (!users) return next(new Error('no users found'));
    res.json({ success: true, users })
  } catch (error) {
    return next(new Error('error'));
  }
}

// @desc      Get posts
// @route     GET /:id/post
// @access    Private
exports.getPosts = async (req, res, next) => {

  const { activeUser } = req.body;
  const { id } = req.params;

  try {
    const posts = await Post.find({
      $or: [ 
        { userId: id }, { profileId: id } 
      ]
    })
      .sort('-createdAt');
    if (!posts) return next(new Error('no posts found'));
    res.json({ success: true, posts });
  } catch (error) {
    return next(new Error('error'));
  }

  // try {
  //   const posts = await Post.find({
  //     profileId
  //   })     ({
  //     userId: activeUser._id,
  //     profileId,
  //     postContent
  //   })
  //   if (!post) return next(new Error('post not created'));
  //   return res.status(200).json({ success: true, post });
  // } catch (error) {
  //   return next(new Error('error'));
  // }
}

// @desc      Post new Post
// @route     POST /:id/post
// @access    Private
exports.createPost = async (req, res, next) => {

  const { activeUser, profileId, postContent, ogMetadata } = req.body;

  try {
    const post = await Post.create({
      userId: activeUser._id,
      profileId,
      postContent,
      ogMetadata
    })
    if (!post) return next(new Error('post not created'));
    return res.status(200).json({ success: true, post });
  } catch (error) {
    return next(new Error('error'));
  }
}


// @desc      get OG metadata
// @route     GET /metadata
// @access    Public
exports.metadata = async (req, res, next) => {

  const { url } = req.headers;
  try {
    const metadata = await urlMetadata(url);
    if (!metadata) return next(new Error('invalid url'));
    res.json({
      success:true,
      metadata: {
        url,
        image: metadata.image,
        source: metadata.source,
        title: metadata.title
      }
    });
  } catch (error) {
    return next(new Error('invalid url'));
  }
}




// @desc      get News
// @route     GET /news
// @access    Private
exports.getNews = async (req, res, next) => {

  try {
    const posts = await News.find()
      .sort('-createdAt');
    if (!posts) return next(new Error('no posts found'));
    res.json({ success: true, posts });
  } catch (error) {
    return next(new Error('error'));
  }

}




// @desc      create news
// @route     POST /news
// @access    Private
exports.createNews = async (req, res, next) => {

  const { activeUser, postContent, ogMetadata } = req.body;

  if (!activeUser.admin) return next(new Error('Not an admin'));

  try {
    const post = await News.create({
      userId: activeUser._id,
      postContent,
      ogMetadata
    });
    if (!post) return next(new Error('post not created'));
    return res.status(200).json({ success: true, post });
  } catch (error) {
    return next(new Error('Error'));
  }
}
