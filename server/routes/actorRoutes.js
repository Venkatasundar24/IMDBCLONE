const express = require('express');
const router = express.Router();
const Actor = require('../models/Actor');

router.get('/', async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
