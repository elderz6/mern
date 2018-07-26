const express = require('express');
const validator = require('validator');

const router = express.Router();

const User = require('../../models/User');

function validateInput(data)
{
  let errors = {};
  if (validator.isNull(data.email)) {
    errors.email = 'This field is required';
  }
  return{
    errors,
    isValid: isEmpty(errors)
  }
}


router.post('/', (req, res) =>
{
  const newUser = new User({
    username:req.body.name,
    password:req.body.password,
    email:req.body.email
  });
  newUser.save()
  .then(user => res.json(user))
  .catch(err => res.status(400).json({success:false}))
});

module.exports = router;
