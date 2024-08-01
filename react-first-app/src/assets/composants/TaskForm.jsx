import React, { useState, useEffect, useRef } from 'react';

 export default function TaskForm({onAddTask}) {
  const inputRef = useRef();
  function handleClick(event) {
    event.preventDefault();
    const inputElement = inputRef.current;
    if (inputElement.value.trim() !== "") {
      onAddTask(inputElement.value);
      inputElement.value = "";
    }
  }
  return (
    <div>
    <form>
      <input
      ref={inputRef}
      type='text' 
      className='input-text'
      placeholder='add a task'
      />
      <button onClick={handleClick}>Add todo</button>
          </form>
        </div>
  );
}


