import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector,useStore } from 'react-redux';
import TaskBox  from '../Board2/TaskBox'
import Grid from '@material-ui/core/Grid';

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
          {store.getState().todo.todos.map(item => 
            <TaskBox 
              key = {item.task} 
              items={item} 
              complete={handleComplete}
              showDelete={false}
              showUncomplete={true}
              showComplete={true}/>)}
        </Grid>
    </div>
  );
}

export default Board3;
