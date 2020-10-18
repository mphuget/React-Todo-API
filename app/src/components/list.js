import React from 'react';

import CardTodo from "./card";


export default function List({todos, setTodos}) {

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