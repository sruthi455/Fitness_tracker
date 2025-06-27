import React, { useState } from 'react';
import { addWorkout } from '../services/api';
import './WorkoutForm.css';

const WorkoutForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    type: 'running',
    duration: '',
    intensity: 'medium',
    date: new Date().toISOString().split('T')[0],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addWorkout(form);
    onAdd(res.data);
    setForm({ ...form, duration: '' });
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="running">Running</option>
          <option value="yoga">Yoga</option>
          <option value="cycling">Cycling</option>
        </select>

        <input
          name="duration"
          type="number"
          placeholder="Duration (min)"
          value={form.duration}
          onChange={handleChange}
          required
        />

        <select name="intensity" value={form.intensity} onChange={handleChange}>
          <option value="slow">Slow</option>
          <option value="medium">Medium</option>
          <option value="intense">Intense</option>
        </select>

        <input name="date" type="date" value={form.date} onChange={handleChange} />
      </div>

      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
