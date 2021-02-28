const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {

  const { bearer } = req.headers;

  try {
    const { payload } = jwt.verify(bearer, process.env.TOKEN_SECRET);
    const activeUser = await User.findById(payload);
    if (!activeUser) return next(new Error('invalid token'));
    console.log('Token Verified:'.red, bearer);
    req.body.activeUser = activeUser;
    next();
  } catch (error) {
    next(new Error('invalid token'));
  }

}

module.exports = auth;