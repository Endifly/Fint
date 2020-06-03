import React, { useState, useEffect }  from 'react';
import { Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector,useStore } from 'react-redux';
import TaskBox  from '../Board2/TaskBox'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { addTask,completeTask } from '../../../actions/todoAction'
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(() => ({
  root: {
      fontFamily: "Arial",
      //backgroundColor: '#E1F5C4',
      top:"5",
  },
  inputBox: {
    display:"flex",
    textAlignment: "center",
    justifyContent: "center",
    width:"300",
    space:"3",
    padding:"5",
    top:"5"
  },
  taskBox: {
    display:"flex",
    flexDirection:"column",
    textAlignment: "center",
    justifyContent: "center",
    width:"300",
    space:"3",
    padding:"5",
    backgroundColor: 'white',
  },
}));

function Board3() {
  const store = useStore()
  const [task, setTask] = useState();
  const classes = useStyles();
  const dispatch = useDispatch()
  const handleChange = () => {
    //console.log("state change")
    setTask(store.getState().todo.todos)
  }
  store.subscribe(handleChange)
  useEffect(() => {
    //console.log(store.getState().todo.todos)
    setTask(store.getState().todo.todos)
  },[]);

  const handleComplete = () => {
    console.log("board3")
  }
  return (
    <div className={classes.root}>
        {/* <h3 className={classes.root}>To do list</h3> */}
        <h1></h1>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {store.getState().todo.todos.map(item => <TaskBox key = {item.task} items={item} complete={handleComplete}/>)}
        </Grid>
    </div>
  );
}

export default Board3;
