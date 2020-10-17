import React from 'react';

import CardTodo from "./card";


export default function List({todos, setTodos}) {

    console.log(todos);
    if (todos.length > 0) 
        console.log(todos[0].title);

  return (
      <div>
          <h2>Todos</h2>
          <ul>
          {todos.map((value, index) => {
            return <CardTodo key={index} todo={value} todos={todos} setTodos={setTodos}/>
           })}
        </ul>
          
      </div>
  )
}