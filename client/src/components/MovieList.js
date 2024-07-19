import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div>
      <h2>Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie._id} className="movie-item">
            <h3>{movie.title}</h3>
            <p><strong>Year of Release:</strong> {movie.year}</p>
            <p><strong>Plot:</strong> {movie.plot}</p>
            <img src={movie.poster} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
