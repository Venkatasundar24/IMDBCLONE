const Movie = require('../models/Movie');
const Actor = require('../models/Actor');
const Producer = require('../models/Producer');

exports.search = async (req, res) => {
  const { category, query } = req.query;

  try {
    let results;

    if (category === 'movies') {
      results = await Movie.find({ title: new RegExp(query, 'i') });
    } else if (category === 'actors') {
      results = await Actor.find({ name: new RegExp(query, 'i') });
    } else if (category === 'producers') {
      results = await Producer.find({ name: new RegExp(query, 'i') });
    } else {
      return res.status(400).json({ error: 'Invalid category' });
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
