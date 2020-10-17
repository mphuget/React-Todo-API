import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Todo from './components/todo';
import List from './components/list';

const initialFormData = Object.freeze({
  title: "",
  description: "",
  done: false,
  id : Math.ceil(Math.random() * 10000)
});

function App() {

  const [formData, updateFormData] = useState(initialFormData);

  const [todos, addTodos] = useState([]);

  useEffect(() => {
    console.log("useEffect Hooks in use");
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    console.log("This is where I am supposed to fetch Todos from backend API");  
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
