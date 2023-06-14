import React, { useState } from 'react';
import './App.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      status: 'Incomplete',
    };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Completed' } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Task Management App</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
