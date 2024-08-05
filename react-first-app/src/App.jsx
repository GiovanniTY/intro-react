import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TaskForm from './assets/composants/TaskForm';
import TodoList from './assets/composants/TaskList';

function App() {
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage when the component mounts
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever the todos array changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleAddTask(task) {
    const newTodo = { id: uuidv4(), task, completed: false };
    setTodos([...todos, newTodo]);
  }

  function handleEditTask(id, newTask) {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  }

  function handleDeleteTask(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  function handleToggleComplete(id) {
    const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>My todo list</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TodoList todos={todos} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} onToggleComplete={handleToggleComplete} />
    </div>
  );
}

export default App;
