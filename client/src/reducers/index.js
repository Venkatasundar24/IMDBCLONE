import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import actorReducer from './actorReducer';
import producerReducer from './producerReducer';

export default combineReducers({
  movies: movieReducer,
  actors: actorReducer,
  producers: producerReducer
});
