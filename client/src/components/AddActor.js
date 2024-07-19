import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActor } from '../actions/actorActions';

const AddActor = () => {
  const [actor, setActor] = useState({ name: '', gender: '', dob: '', bio: '' });
  const dispatch = useDispatch();

  const handleChange = e => {
    setActor({ ...actor, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addActor(actor));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={actor.name} onChange={handleChange} placeholder="Name" />
      <input name="gender" value={actor.gender} onChange={handleChange} placeholder="Gender" />
      <input name="dob" value={actor.dob} onChange={handleChange} placeholder="Date of Birth" />
      <input name="bio" value={actor.bio} onChange={handleChange} placeholder="Bio" />
      <button type="submit">Add Actor</button>
    </form>
  );
};

export default AddActor;
