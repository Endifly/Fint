import React, { useState, useEffect }  from 'react';
import { Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AlignCenter } from 'react-feather';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { addTask } from '../../../actions/todoAction'
import { useDispatch, useSelector,useStore } from 'react-redux';
import TaskBox  from './TaskBox'
import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';


const useStyles = makeStyles(() => ({
    root: {
        fontFamily: "Arial",
        color : "red",
    },
    inputBox: {
      display:"flex",
      textAlignment: "center",
      justifyContent: "center",
      width:"300",
      space:"3",
      padding:"5",
    },
    taskBox: {
      display:"flex",
      flexDirection:"column",
      textAlignment: "center",
      justifyContent: "center",
      width:"300",
      space:"3",
      padding:"5",
    },
  }));

  const mapStateToProps = function(state) {
    return {
      message: 'This is message from mapStateToProps',
      todo: state.todos || 0
    }
  }
//const Dispatch = useDispatch();
function Board2() {
  const classes = useStyles();
  const [textField, setTextField] = useState();

  useEffect(() => {
    console.log(store.getState().todo.todos)
  });

  const onTextFieldChange = (e) => {
    console.log(e);
    setTextField(e);
  };
  const handleAdd = () => {
    console.log(`Todo : ${textField}`)
    console.log(store.getState())
    try {
      dispatch(addTask(textField))
    } catch (error) {
      throw error
    }
  }
  const dispatch = useDispatch()
  const store = useStore()


  return (
    <div>
        {/* <h3 className={classes.root}>To do list</h3> */}
        <form className={classes.inputBox}>
            <TextField
              id="outlined-password-input"
              label="Todo"
              autoComplete="current-password"
              variant="outlined"
              onChange={(e) => onTextFieldChange(e.target.value)}
            />
            <Button 
              variant="contained" 
              onClick={() => {handleAdd()}}>
                Add
            </Button>
            
        </form>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {/* <TaskBox items="item"/> */}
        </Grid>
    </div>
  );
}
const Board2withMap = connect(mapStateToProps)(Board2)
export default Board2withMap;
//export default Board2;