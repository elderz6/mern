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

],
 (req, res) =>
{
  const newUser = new User({
    username:req.body.name,
    password:req.body.password,
    email:req.body.email
  });
  let errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    console.log(errors);
    res.render('/', {errors:errors.mapped()})
  }
  else {
  console.log(newUser);
  newUser.save()
  .then(user => res.json(user))
  .catch(err => res.status(400).json({success:false}))
}
});

module.exports = router;
