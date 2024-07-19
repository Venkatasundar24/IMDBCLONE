import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActorList = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get('/api/actors');
        setActors(response.data);
      } catch (error) {
        console.error('Error fetching actors:', error);
      }
    };

    fetchActors();
  }, []);

  return (
    <div>
      <h2>Actors</h2>
      {actors.length === 0 ? (
        <p>No actors found.</p>
      ) : (
        actors.map(actor => (
          <div key={actor._id}>
            <h3>{actor.name}</h3>
            <p>Gender: {actor.gender}</p>
            <p>Date of Birth: {new Date(actor.dob).toLocaleDateString()}</p>
            <p>Bio: {actor.bio}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ActorList;
