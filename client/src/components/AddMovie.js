import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    name: '',
    yearOfRelease: '',
    plot: '',
    poster: '',
    actors: [],
    producer: ''
  });

  const handleChange = e => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/movies', movie).then(response => {
      console.log(response.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={movie.name} onChange={handleChange} placeholder="Name" />
      <input name="yearOfRelease" value={movie.yearOfRelease} onChange={handleChange} placeholder="Year of Release" />
      <input name="plot" value={movie.plot} onChange={handleChange} placeholder="Plot" />
      <input name="poster" value={movie.poster} onChange={handleChange} placeholder="Poster URL" />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
