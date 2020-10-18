import React from 'react';
import '../style/todo.css';
import axios from 'axios';

async function makePostRequest(url, newTitle, newDesc) {

    let res = await axios.post(url, {
      title: newTitle,
      description: newDesc
    });
  
    return res;
  
}

function Todo({todos, addTodos, formData, updateFormData}) {

    const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // Trimming any whitespace
          [e.target.name]: e.target.value.trim()
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        addTodos([
            ...todos,
            {title:formData.title, description: formData.description, done : false, id: Math.ceil(Math.random() * 10000)}
        ])

        // ... submit to API or something
        makePostRequest('http://localhost:3000/api/v1/todo', formData.title, formData.description)
        .then(( data ) => console.log(data))
        .catch((err) => console.log(err))
    };

    return (

        <div>
            <form>
                <label for="title">Title:</label><br/>
                <input type="text" id="title" name="title" onChange={handleChange}/><br/><br/>

                <label for="description">Description:</label><br/>
                <input type="text" id="description" name="description" onChange={handleChange}/><br/><br/>

                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>

        </div>

    )
}

export default Todo;