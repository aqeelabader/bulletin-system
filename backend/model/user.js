const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
//model for storing user data
const userSchema = mongoose.Schema(
  {
    username: {type: String, required:true},
    email: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    //Email: {type: String, required:true}
  });

  module.exports = mongoose.model('User',userSchema);

