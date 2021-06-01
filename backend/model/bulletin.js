const mongoose = require('mongoose');
//model for storing bulletins
const bulletinSchema = mongoose.Schema(
{
  userName: {type: String, required:true},
  emailAddress: {type: String, required:true},
  bulletinDetails: {type: String, required:true},
}

);

module.exports = mongoose.model('Bulletin', bulletinSchema);
