const express = require('express');
const router = express.Router();

const User = require('../../models/User');

router.post('/', (req, res) =>
{
  const newUser = new User({
    username:req.body.name,
    password:req.body.password,
    email:req.body.email
  });
  newUser.save()
  .then(user => res.json(user))
  .catch('deu ruim');
});

module.exports = router;
