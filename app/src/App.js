import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Todo from './components/todo';
import List from './components/list';
import axios from 'axios';

const initialFormData = Object.freeze({
  title: "",
  description: "",
  done: false,
  id : Math.ceil(Math.random() * 10000)
});

async function makeGetRequest(url) {

  let res = await axios.get(url);

  let data = res.data;

  return data;
}

function App() {

  const [formData, updateFormData] = useState(initialFormData);

  const [todos, addTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    makeGetRequest('http://localhost:3000/api/v1/todos')
    .then(( data ) => addTodos(data))
    .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <Header/>
      <Todo todos={todos} addTodos={addTodos} formData={formData} updateFormData={updateFormData}/>
      <List todos={todos} setTodos={addTodos}/>
    </div>
  );
}

export default App;
