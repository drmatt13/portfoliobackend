const express = require('express');
const router = express.Router();
const multer  = require('multer');

const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/jpg': 'jpg',
  // ...
};

var storage = multer.diskStorage(
  {
    destination: './uploads/',
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}.${MIME_TYPE_MAP[file.mimetype]}`);
    }
  }
);

const upload = multer({
  limits: 400000,
  storage
});

router
  .route('/')
    .post((req, res) => {
      res.json({ success: true })
    });

    // app.post("/", upload.single('test1'), (req, res) => {
    //   console.log(req.file);
    //   res.json({ success: true });
    // })

module.exports = router;