const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().populate('producer actors');
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies' });
  }
});

module.exports = router;
