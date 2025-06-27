const Workout = require('../models/Workout');

const calculateCalories = (duration, intensity) => {
  const multiplier = {
    slow: 4,
    medium: 7,
    intense: 10
  }[intensity.toLowerCase()] || 5;

  return duration * multiplier;
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.userId }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addWorkout = async (req, res) => {
  try {
    const { type, duration, intensity, date } = req.body;

    const calories = calculateCalories(duration, intensity);

    const newWorkout = await Workout.create({
      type,
      duration,
      intensity,
      date,
      userId: req.userId,
      calories
    });

    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateWorkout = async (req, res) => {
  try {
    const { duration, intensity } = req.body;

    const calories = calculateCalories(duration, intensity);

    const updated = await Workout.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { ...req.body, calories },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    res.json({ msg: 'Deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
