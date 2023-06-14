// routes/tasks.js

const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Get all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a task
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Update a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
});

module.exports = router;
