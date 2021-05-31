const jwt = require('jsonwebtoken');
const sharp = require('sharp');
const AWS = require('aws-sdk');
const User = require('../models/User');

AWS.config.update({
  region: "us-east-2",
  accessKeyId: "AKIAWWWQGOMD25GVG4NR", 
  secretAccessKey: "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"
});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});


// @desc      Upload Image
// @route     Post image/:id
// @access    Private
exports.uploadImage = async (req, res, next) => {

  const { id } = req.params;
  const { bearer } = req.headers;
  const { payload } = jwt.verify(bearer, process.env.TOKEN_SECRET);

  if (payload != id) return next(new Error('validation error'));

  try {

    let data = await sharp(req.file.buffer)
      .resize({width: 300, height: 300})
      .toBuffer();

    let options = {
      Bucket: "drmatt13-social-bucket",
      Key: `p-${id}.jpg`,
      Body: data
    }

    let upload = await s3.upload(options).promise();

    data = await sharp(data)
      .resize({width: 40, height: 40})
      .toBuffer();

    options = {
      Bucket: "drmatt13-social-bucket",
      Key: `t-${id}.jpg`,
      Body: data
    }

    upload = await s3.upload(options).promise();

    const user = await User.findByIdAndUpdate(payload, { profileImage: true });
    if (!user) return next(new Error(error));
    if (user) console.log(user);

    return res.json({ success: true });

  } catch (error) {
    return next(new Error(error));
  }

}

// @desc      Delete Image
// @route     DELETE image/:id
// @access    Private
exports.deleteImage = async (req, res, next) => {
  // s3.deleteObject

}


// @desc      Get Image
// @route     Get /profile/:id
// @access    Public
exports.getProfileImage = async (req, res, next) => {

  const { id } = req.params;

  let getParams = {
    Bucket: 'drmatt13-social-bucket', // your bucket name,
    Key: `p-${id}.jpg` // path to the object you're looking for
  }

  try {
    s3.getObject(getParams, function(error, image) {
      if (error)
        return next(new Error(error));
        res.json({ success: true, image });
    });
  } catch (error) {
    return next(new Error(error));
  }

}