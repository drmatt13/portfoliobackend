// replace `${i}` --> \`   \$   {i}   \`

const data = [

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[],
// output
[
  {'output': `npm i express-validator`}
],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `const { body, validationResult } = require('express-validator');

app.post(
  '/user',
  // username must be an email
  body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then(user => res.json(user));
  },
);`}
],
// output
[],
//render
{'render': false}
],

// card ----------------------------------------------------- >
[
//html
[],
//css
[],
//js
[
{'js': `//  Sanitzation

body('email').isEmail().normalizeEmail(),
body('text').not().isEmpty().trim().escape(),
body('notifyOnReply').toBoolean(),`}
],
// output
[],
//render
{'render': false}
],

];

module.exports = data;