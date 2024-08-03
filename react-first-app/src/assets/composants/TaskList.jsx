import React, { useState } from 'react';

export default function TodoList({ todos, onEditTask, onDeleteTask, onToggleComplete}) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");



  const handleEditClick = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSaveClick = () => {
    onEditTask(editId, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
            />
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            ) : (
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.task}</span>
            )}
            {editId === todo.id ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={() => handleEditClick(todo.id, todo.task)}>Edit</button>
            )}
            <button onClick={() => onDeleteTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}