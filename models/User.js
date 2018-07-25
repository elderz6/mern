const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username:
  {
    type:String,
    required:true,
    index:{ unique:true }
  },
  password:
  {
    type:String,
    required:true
  },
  email:
  {
    type:String,
    required:true,
    index:{ unique:true }
  }
});

UserSchema.methods.generateHash = (password)=>
{
  return bcrypt.compareSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = (password) =>
{
  return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model('user', UserSchema);
