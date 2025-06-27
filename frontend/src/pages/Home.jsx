import React, { useEffect, useState } from 'react';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutItem from '../components/WorkoutItem';
import { getWorkouts } from '../services/api';
import './Home.css';
const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts().then((res) => setWorkouts(res.data));
  }, []);

  const handleAdd = (newWorkout) => {
    setWorkouts([newWorkout, ...workouts]);
  };

  const handleDelete = (id) => {
    setWorkouts(workouts.filter((w) => w._id !== id));
  };

  const handleUpdate = (updatedWorkout) => {
    setWorkouts(workouts.map((w) => (w._id === updatedWorkout._id ? updatedWorkout : w)));
  };

  return (
    <div className="home-container">
      <h2 className="home-heading">Welcome to Fitness Tracker</h2>
      <WorkoutForm onAdd={handleAdd} />
      <div className="workout-list">
        {workouts.map((w) => (
          <WorkoutItem key={w._id} workout={w} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
};

export default Home;
