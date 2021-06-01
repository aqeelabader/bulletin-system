const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema(
  {
    userName: {type: String, required:true},
    emailAddress: {type: String, required:true},
    bulleinDetail: {type: String, required:true},
    //Email: {type: String, required:true}
  });

  module.exports = mongoose.model('User',userSchema);

