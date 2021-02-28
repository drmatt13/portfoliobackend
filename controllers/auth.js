const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// @desc      Register User
// @route     POST api/auth/register
// @access    Public
exports.register = async (req, res, next) => {

  console.log(req.body);

  bcrypt.genSalt(10, (error, salt) => {
    if (error) return res.status(500).json({ success: false });
    bcrypt.hash(req.body.password, salt, (error, hash) => {
      if (error) return res.status(500).json({ success: false });
      // hash the password
      req.body.password = hash;
      // create the user
      User.create(req.body)
        .then(data => {
          // create a token
          const token = jwt.sign({payload: data._id}, process.env.TOKEN_SECRET);
          // return the token
          return res.json({
            success: true, 
            bearer: token
          });
        })
        .catch(error => {
          return res.json({
            success: false,
            message: error.message
          });
        });
    });
  });
}


// @desc      Login User
// @route     POST api/auth/login
// @access    Public
exports.login = async (req, res, next) => {

  const {email, password} = req.body;

  if (!email || !password) return next(new Error('Please provide an email and password'));
  try {
    const user = await User.findOne({email}).select('+password');
    if (!user) {
      return next(new Error('Invalid credentials'));
    }
    const validation = await bcrypt.compare(password, user.password);
    const token = jwt.sign({payload: user._id}, process.env.TOKEN_SECRET);
    if (!validation) {
      return next(new Error('incorrect password'));
    }

    delete user.password;

    console.log('Logged In:'.bgBlue.black, token);
    
    return res.json({
      success: true, 
      bearer: token,
      user
    });
  } catch (error) {
    return next(new Error('error'));
  }
}

// @desc      Verify Token
// @route     GET api/auth/verify
// @access    Public
exports.verify = (req, res, next) => {
  const { bearer } = req.headers;
  jwt.verify(bearer, process.env.TOKEN_SECRET, async (error, verifiedJwt) => {
    if(!error){
      const user = await User.findById(verifiedJwt.payload);
      if (user) {
        console.log('Token Verified:'.green, bearer );
        return res.json({ success: true, user });
      }
    } else {
      return res.json({ success: false});
    }
    return res.json({ success: false });
  });
}