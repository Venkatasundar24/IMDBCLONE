const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: Date,
  bio: String,
});

module.exports = mongoose.model('Actor', actorSchema);
