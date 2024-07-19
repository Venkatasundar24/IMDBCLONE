const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
  const movies = await Movie.find().populate('actors producer');
  res.json(movies);
};

exports.createMovie = async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
};
