import React, { useState } from 'react';
import { updateWorkout, deleteWorkout } from '../services/api';
import './WorkoutItem.css';

const WorkoutItem = ({ workout, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [edited, setEdited] = useState({ ...workout });

  const handleEditChange = (e) => {
    setEdited({ ...edited, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const res = await updateWorkout(workout._id, edited);
    onUpdate(res.data);
    setIsEditing(false);
  };

  return (
    <div className="workout-card">
      {isEditing ? (
        <form className="edit-form" onSubmit={handleEditSubmit}>
          <input name="type" value={edited.type} onChange={handleEditChange} required />
          <input name="duration" type="number" value={edited.duration} onChange={handleEditChange} required />
          <input name="intensity" value={edited.intensity} onChange={handleEditChange} required />
          <input name="date" type="date" value={edited.date.split('T')[0]} onChange={handleEditChange} required />
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <p><strong>{workout.type}</strong> - {workout.duration} min - {workout.intensity}</p>
          <p>{new Date(workout.date).toLocaleDateString()}</p>
          <p><strong>Calories:</strong> {workout.calories} kcal</p>
          <div className="action-buttons">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(workout._id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default WorkoutItem;
