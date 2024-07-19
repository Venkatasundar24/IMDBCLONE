import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const fetchMovies = () => api.get('/movies');
export const addMovie = (movie) => api.post('/movies', movie);
export const fetchActors = () => api.get('/actors');
export const addActor = (actor) => api.post('/actors', actor);
export const fetchProducers = () => api.get('/producers');
export const addProducer = (producer) => api.post('/producers', producer);
