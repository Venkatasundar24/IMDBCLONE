import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import movieReducer from './reducers/movieReducer';
import actorReducer from './reducers/actorReducer';
import producerReducer from './reducers/producerReducer';

const rootReducer = combineReducers({
  movies: movieReducer,
  actors: actorReducer,
  producers: producerReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
