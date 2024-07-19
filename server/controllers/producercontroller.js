const Producer = require('../models/Producer');

exports.getProducers = async (req, res) => {
  const producers = await Producer.find();
  res.json(producers);
};

exports.createProducer = async (req, res) => {
  const producer = new Producer(req.body);
  await producer.save();
  res.status(201).json(producer);
};

exports.updateProducer = async (req, res) => {
  const producer = await Producer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(producer);
};

exports.deleteProducer = async (req, res) => {
  await Producer.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
