

import React, { useState } from 'react';
import TaskForm from './assets/composants/TaskForm';
import './App.css';
import TaskList from './assets/composants/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Aggiungi una nuova attività
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task }]);
  };

  // Elimina un'attività
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Inizia a modificare un'attività
  const startEditing = (task) => {
    setEditingTask(task);
  };

  // Modifica un'attività esistente
  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setEditingTask(null);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className='div-task'>
      <h1>To-Do List</h1>
      <TaskForm 
        onAdd={addTask} 
        onEdit={editTask} 
        editingTask={editingTask} 
        onCancel={() => setEditingTask(null)} 
      />
      <TaskList 
        tasks={tasks} 
        onDelete={deleteTask} 
        onEdit={startEditing} 
        onToggleCompletion={toggleTaskCompletion} 
      />
    </div>
  );
}

export default App;
