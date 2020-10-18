import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import "../App.css";

const useStyles = makeStyles({
    root: {
        width: 100,
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    },
    pos: {
      marginBottom: 12,
    },
  });

  async function makeDeleteRequest(url) {

    let res = await axios.delete(url);
  
    return res;
  }

  async function makePostRequest(url, newTitle, newDesc) {

    let res = await axios.post(url, {});
  
    return res;
  
  }

export default function CardTodo({todo, todos, setTodos}) {

    const classes = useStyles();

    const handleDone = () => {
        
        // ... submit to API or something
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return { 
                    ...item, done : !item.done
                }
            }

            return item;
        }));

        makePostRequest("http://localhost:3000/api/v1/todo/" + todo._id + "/done" )
        .then((data) => console.log(data))
        .catch((err) => console.log(err));


    };

    const handleDelete = () => {
        
        // ... submit to API or something
        setTodos(todos.filter((el) => el.id !== todo.id));

        makeDeleteRequest("http://localhost:3000/api/v1/todo/" + todo._id)
        .then((data) => console.log(data))
        .catch((err) => console.log(err)); 
        
    };

    return(

        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            <b><span className={`"title" ${todo.done ? "completed" : ''}`}> {todo.title} </span></b>
          </Typography>
          <Typography variant="body2" component="p">
            {todo.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleDone}>Done</Button>
          <Button size="small" onClick={handleDelete}>Delete</Button>
        </CardActions>
        </Card>

        // <div>
        //     <span className={`"title" ${todo.done ? "completed" : ''}`}> {todo.title} </span>    
        // </div>
        
    );
}