const mongoose = require('mongoose');
const axios = require('axios');
const { faker } = require('@faker-js/faker');
const Movie = require('./models/Movie');
const Actor = require('./models/Actor');
const Producer = require('./models/Producer');

mongoose.connect('mongodb://localhost/imdbclone', { useNewUrlParser: true, useUnifiedTopology: true });

const OMDB_API_KEY = '1d603fa';
const API_DELAY = 1000; 

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchMoviesWithPosters = async () => {
  const moviesWithPosters = [];
  const titles = [
    'Matrix', 'Inception', 'Avengers', 'Titanic', 'Gladiator',
    'The Dark Knight', 'Forrest Gump', 'The Shawshank Redemption', 'Pulp Fiction', 'Fight Club',
    'The Godfather', 'Interstellar', 'The Matrix Reloaded', 'The Matrix Revolutions', 'The Lord of the Rings: The Fellowship of the Ring',
    'The Lord of the Rings: The Two Towers', 'The Lord of the Rings: The Return of the King', 'Inglourious Basterds', 'Django Unchained', 'The Prestige',
    'Memento', 'Schindler\'s List', 'Goodfellas', 'The Departed', 'Shutter Island',
    'The Silence of the Lambs', 'The Green Mile', 'Saving Private Ryan', 'Braveheart', 'Gladiator',
    'Avatar', 'The Avengers', 'Iron Man', 'Thor', 'Captain America: The First Avenger',
    'Guardians of the Galaxy', 'The Revenant', 'The Wolf of Wall Street', 'The Social Network', 'Deadpool',
    'The Grand Budapest Hotel', 'The Shawshank Redemption', 'The Shining', 'The Big Lebowski', 'No Country for Old Men',
    'The Good, the Bad and the Ugly', 'Once Upon a Time in the West', 'Django Unchained', 'Reservoir Dogs', 'Kill Bill: Vol. 1',
    'Kill Bill: Vol. 2', 'The Hateful Eight', 'Inglourious Basterds', 'The Irishman', 'Goodfellas',
    'Casino', 'Heat', 'Scarface', 'The Godfather', 'The Godfather: Part II',
    'The Godfather: Part III', 'American History X', 'Fight Club', 'Seven', 'Se7en',
    'Gone Girl', 'The Girl with the Dragon Tattoo', 'The Social Network', 'Zodiac', 'The Curious Case of Benjamin Button',
    'Pulp Fiction', 'Reservoir Dogs', 'Once Upon a Time in Hollywood', 'Jackie Brown', 'Kill Bill: Vol. 1',
    'Kill Bill: Vol. 2', 'Hugo', 'The Aviator', 'Shutter Island', 'The Departed',
    'Taxi Driver', 'Raging Bull', 'Cape Fear', 'The Irishman', 'Silence',
    'The Wolf of Wall Street', 'Casino', 'Mean Streets', 'Goodfellas', 'The Godfather',
    'The Godfather: Part II', 'The Godfather: Part III', 'Apocalypse Now', 'Full Metal Jacket', 'A Clockwork Orange']; // Add more titles as needed to reach 100

  for (const title of titles) {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}`);
      if (response.data && response.data.Poster && response.data.Poster !== 'N/A') {
        console.log(`Poster found for "${title}": ${response.data.Poster}`);
        moviesWithPosters.push({
          title: response.data.Title,
          year: response.data.Year,
          plot: response.data.Plot,
          poster: response.data.Poster,
        });
      } else {
        console.log(`No poster found for "${title}".`);
      }
      await sleep(API_DELAY); 
    } catch (error) {
      console.error(`Error fetching data for "${title}":`, error);
    }
  }

  return moviesWithPosters;
};

const seedData = async () => {
  try {
    await Actor.deleteMany({});
    await Producer.deleteMany({});
    await Movie.deleteMany({});

    const actors = [];
    for (let i = 0; i < 250; i++) {
      const actor = new Actor({
        name: faker.person.fullName(),
        gender: faker.helpers.arrayElement(['Male', 'Female']),
        dob: faker.date.past({ years: 50, refDate: new Date('2000-01-01') }),
        bio: faker.lorem.sentence(),
      });
      actors.push(actor);
    }
    await Actor.insertMany(actors);

    const producers = [];
    for (let i = 0; i < 150; i++) {
      const producer = new Producer({
        name: faker.person.fullName(),
        gender: faker.helpers.arrayElement(['Male', 'Female']),
        dob: faker.date.past({ years: 50, refDate: new Date('2000-01-01') }),
        bio: faker.lorem.sentence(),
      });
      producers.push(producer);
    }
    await Producer.insertMany(producers);

    const moviesWithPosters = await fetchMoviesWithPosters();
    const actorIds = actors.map(actor => actor._id);
    const producerIds = producers.map(producer => producer._id);

    const movies = moviesWithPosters.map(movie => ({
      title: movie.title,
      year: movie.year,
      plot: movie.plot,
      poster: movie.poster,
      producer: faker.helpers.arrayElement(producerIds),
      actors: faker.helpers.arrayElements(actorIds, faker.number.int({ min: 1, max: 5 })),
    }));

    await Movie.insertMany(movies);

    console.log('Data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedData();
