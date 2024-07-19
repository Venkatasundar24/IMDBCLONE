import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProducer } from '../actions/producerActions';

const AddProducer = () => {
  const [producer, setProducer] = useState({ name: '', gender: '', dob: '', bio: '' });
  const dispatch = useDispatch();

  const handleChange = e => {
    setProducer({ ...producer, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProducer(producer));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={producer.name} onChange={handleChange} placeholder="Name" />
      <input name="gender" value={producer.gender} onChange={handleChange} placeholder="Gender" />
      <input name="dob" value={producer.dob} onChange={handleChange} placeholder="Date of Birth" />
      <input name="bio" value={producer.bio} onChange={handleChange} placeholder="Bio" />
      <button type="submit">Add Producer</button>
    </form>
  );
};

export default AddProducer;
