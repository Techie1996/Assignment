import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskListing from './components/TaskListing';
import TaskCreation from './components/TaskCreation';
import TaskEditing from './components/TaskEditing';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskCreated = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleTaskDeleted = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

    const handleTaskStatusChanged = (taskId) => {
    // Your logic to update the task status
    console.log(`Task status changed for task with ID ${taskId}`);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TaskListing tasks={tasks} onTaskCreated={handleTaskCreated} onTaskDeleted={handleTaskDeleted} onTaskStatusChanged={handleTaskStatusChanged} />}
        />
        <Route path="/taskCreation" element={<TaskCreation onTaskCreated={handleTaskCreated} />} />
        <Route
          path="/taskEditing/:taskId"
          element={<TaskEditing onTaskUpdated={handleTaskUpdated} tasks={tasks} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
