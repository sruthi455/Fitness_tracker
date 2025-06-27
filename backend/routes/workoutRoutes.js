const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout
} = require('../controllers/workoutController');

router.use(auth);
router.get('/', getWorkouts);
router.post('/', addWorkout);
router.put('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;
