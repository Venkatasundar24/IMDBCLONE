const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  plot: String,
  producer: { type: mongoose.Schema.Types.ObjectId, ref: 'Producer' },
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],
  poster: String,
});

module.exports = mongoose.model('Movie', movieSchema);
