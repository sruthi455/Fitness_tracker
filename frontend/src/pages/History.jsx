import React, { useEffect, useState } from 'react';
import { getWorkouts, deleteWorkout } from '../services/api';
import './History.css';

const History = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts().then((res) => setWorkouts(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteWorkout(id);
    setWorkouts(workouts.filter((w) => w._id !== id));
  };

  return (
    <div className="history-container">
      <h2>Your Workout History</h2>
      <div className="history-list">
        {workouts.map((w) => (
          <div key={w._id} className="workout-card">
            <p><strong>Type:</strong> {w.type}</p>
            <p><strong>Duration:</strong> {w.duration} min</p>
            <p><strong>Intensity:</strong> {w.intensity}</p>
            <p><strong>Date:</strong> {new Date(w.date).toLocaleDateString()}</p>
            <p><strong>Calories:</strong> {w.calories} kcal</p>
            <button className="delete-btn" onClick={() => handleDelete(w._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
