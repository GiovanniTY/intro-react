import React from 'react';

function TaskList({ tasks, onDelete, onEdit, onToggleCompletion}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
        <input type="checkbox" 
            checked={task.completed} 
            onChange={() => onToggleCompletion(task.id)} 
          />
           {task.text}
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          onChange 

        </li>
      ))}
    </ul>
  );
}

export default TaskList;
