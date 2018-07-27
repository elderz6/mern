const express = require('express');
const { check, body } = require('express-validator/check');
const router = express.Router();
const User = require('../../models/User');

router.post('/', [
    check('email')
    .isEmail().withMessage('Invalid Email')
    .not()
    .isEmpty().withMessage('This Field is Required')
    .normalizeEmail(),

    body('name')
    .not()
    .isEmpty().withMessage('This Field is Required'),

    check('passwordConfirmation').custom((value, { req })=>
    {
      if (value !== req.body.password) {
        throw new Error('Passwords must match');
      }
    })
],
 (req, res) =>
{
  let errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    console.log(errors);
  }else {
  const newUser = new User({
    username:req.body.name,
    password:req.body.password,
    email:req.body.email
  });
  newUser.save()
  .then(user => res.json(user))
  .catch(err => res.status(400).json({success:false}))
  res.redirect('/');
}
});

module.exports = router;
