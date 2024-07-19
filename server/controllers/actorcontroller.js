const Actor = require('../models/Actor');

exports.getActors = async (req, res) => {
  const actors = await Actor.find();
  res.json(actors);
};

exports.createActor = async (req, res) => {
  const actor = new Actor(req.body);
  await actor.save();
  res.status(201).json(actor);
};

exports.updateActor = async (req, res) => {
  const actor = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(actor);
};

exports.deleteActor = async (req, res) => {
  await Actor.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
