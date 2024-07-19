const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const Actor = require('./models/Actor');
const Producer = require('./models/Producer');

mongoose.connect('mongodb://localhost/imdbclone', { useNewUrlParser: true, useUnifiedTopology: true });

const listData = async () => {
  try {
    const movies = await Movie.find().populate('producer actors');
    const actors = await Actor.find();
    const producers = await Producer.find();

    console.log('Movies:');
    movies.forEach(movie => {
      console.log(`Title: ${movie.title}`);
      console.log(`Year: ${movie.year}`);
      console.log(`Plot: ${movie.plot}`);
      console.log(`Producer: ${movie.producer.name}`);
      console.log('Actors:');
      movie.actors.forEach(actor => {
        console.log(`- ${actor.name}`);
      });
      console.log(''); 
    });

    console.log('Actors:');
    actors.forEach(actor => {
      console.log(`Name: ${actor.name}`);
      console.log(`Gender: ${actor.gender}`);
      console.log(`Date of Birth: ${actor.dob}`);
      console.log(`Bio: ${actor.bio}`);
      console.log(''); 
    });

    console.log('Producers:');
    producers.forEach(producer => {
      console.log(`Name: ${producer.name}`);
      console.log(`Gender: ${producer.gender}`);
      console.log(`Date of Birth: ${producer.dob}`);
      console.log(`Bio: ${producer.bio}`);
      console.log(''); 
    });

  } catch (error) {
    console.error('Error listing data:', error);
  } finally {
    mongoose.disconnect();
  }
};

listData();
