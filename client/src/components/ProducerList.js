import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProducerList = () => {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    const fetchProducers = async () => {
      try {
        const response = await axios.get('/api/producers');
        setProducers(response.data);
      } catch (error) {
        console.error('Error fetching producers:', error);
      }
    };

    fetchProducers();
  }, []);

  return (
    <div>
      <h2>Producers</h2>
      {producers.length === 0 ? (
        <p>No producers found.</p>
      ) : (
        producers.map(producer => (
          <div key={producer._id}>
            <h3>{producer.name}</h3>
            <p>Gender: {producer.gender}</p>
            <p>Date of Birth: {new Date(producer.dob).toLocaleDateString()}</p>
            <p>Bio: {producer.bio}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProducerList;
