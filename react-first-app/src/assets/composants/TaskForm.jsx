import React, { useState, useEffect } from 'react';

function TaskForm({ onAdd, onEdit, editingTask, onCancel }) {
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
    } else {
      setTaskText('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() ==='') {
      return;
    }

    
    if (editingTask) {
      onEdit({ ...editingTask, text: taskText });
    } else {
      onAdd(taskText);
    }
    setTaskText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Add or edit task"
      />
      <button type="submit">{editingTask ? 'Save' : 'Add'}</button>
      {editingTask && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}

export default TaskForm;
