import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MovieList from './components/MovieList';
import ActorList from './components/ActorList';
import ProducerList from './components/ProducerList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <MovieList />
        <ActorList />
        <ProducerList />
      </div>
    </Provider>
  );
}

export default App;
