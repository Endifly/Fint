import React, { useState, useEffect }  from 'react';
import { Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AlignCenter } from 'react-feather';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { addTask,completeTask } from '../../../actions/todoAction'
import { useDispatch, useSelector,useStore } from 'react-redux';
import TaskBox  from './TaskBox'
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

  const mapStateToProps = function(state) {
    console.log("change")
    return {
      message: 'This is message from mapStateToProps',
      todo: state.todos || 0
    }
  }
//const Dispatch = useDispatch();
function Board2() {
  const classes = useStyles();
  const [textField, setTextField] = useState();
  const [task, setTask] = useState();
  const dispatch = useDispatch()
  const store = useStore()
  

  const handleChange = () => {
    //console.log("state change")
    setTask(store.getState().todo.todos)
  }
  store.subscribe(handleChange)

  useEffect(() => {
    //console.log(store.getState().todo.todos)
    setTask(store.getState().todo.todos)
  },[]);

  
  const onTextFieldChange = (e) => {
    //console.log(e);
    setTextField(e);
  };
  const handleAdd = () => {
    console.log(`Todo : ${textField}`)
    
    try {
      dispatch(addTask(textField))
    } catch (error) {
      throw error
    }
    
  }
  const handleComplete = (task) => {
    try {
      dispatch(completeTask(task))
    } catch (error) {
      throw error
    }
    //setTask(store.getState().todo.todos)
  }
  


  return (
    <div className={classes.root}>
        {/* <h3 className={classes.root}>To do list</h3> */}
        <h1></h1>
        <form className={classes.inputBox}>
            <TextField
              id="standard-search"
              label="Todo"
              type="search"
              onChange={(e) => onTextFieldChange(e.target.value)}
              style = {{maxWidth: 190}}
            />
            
            <Fab 
              color="primary" 
              aria-label="add" 
              size="small" 
              onClick={() => {handleAdd()}}
              style = {{marginTop: 7,marginLeft: 10}}>
              <AddIcon />
            </Fab>
            
        </form>
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
const Board2withMap = connect(mapStateToProps)(Board2)
export default Board2withMap;
//export default Board2;