 import React, { useState } from 'react';
import './App.css';
import TaskForm from './assets/composants/TaskForm';
import TodoList from './assets/composants/TaskList';


function App() {
  const [todos,setTodos] = useState(["my first todos", "my second todos"]);
  
  function handleAddTask(task) {
    setTodos([...todos,task]);
  }
  return (
   <div>
   <h1>My todo list </h1>
    <TaskForm onAddTask={handleAddTask}/>
    <TodoList todos={todos} />
   </div>
  );
}
export default App;