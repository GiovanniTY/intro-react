import React from 'react';


export default function TodoList({todos}) {
  return (
    <>
    <div>
      <h2>todos</h2>
      <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input type="checkbox" /> {todo}
            </li>
          ))}
        </ul>
    </div>



    </>
  
  )
}



