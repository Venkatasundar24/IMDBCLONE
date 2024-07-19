const express = require('express');
const router = express.Router();
const Producer = require('../models/Producer'); 

router.get('/', async (req, res) => {
  try {
    const producers = await Producer.find();
    res.json(producers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
