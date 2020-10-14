import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

async function makeGetRequest() {

  let res = await axios.get('http://localhost:3000/api/v1/todos');

  let data = res.data;

  return data;
}

async function makePostRequest() {

  let res = await axios.post('http://localhost:3000/api/v1/todo', {
    title: "Mon premier todo",
    description: "Et sa description"
  });

  return res;

}

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    //addTodo();
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    makeGetRequest()
    .then(( data ) => setTodos(data))
    .catch((err) => console.log(err))
  }
  
  const addTodo = () => {
    makePostRequest()
    .then(( data ) => console.log(data))
    .catch((err) => console.log(err))
  }

  console.log("Todos: ");
  console.log(todos);

  return (
    <div className="App">

      <ul>
      {
        todos.map((value, index) => {
          return <li key={index}> {value.title} </li>
        } )
      }
      </ul>

    </div>
  );
}

export default App;
