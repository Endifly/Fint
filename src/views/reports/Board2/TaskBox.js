import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector,useStore } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import { CardContent } from '@material-ui/core';
import Animate from 'animate.css-react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {Animated} from "react-animated-css";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    margin : 10,
    display: 'flex',
  },
  content : {
    minWidth: 165,
    margin : 0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Taskbox(probs) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [visible, setVisible] = useState();
  function handleDelete() {
    console.log(probs.items.task)
    try {
      dispatch(probs.complete(probs.items.task))
    } catch (error) {
      // throw error
      console.log(error)
    }
  }
  useEffect(() => {
    //console.log(store.getState().todo.todos)
    setVisible(true)
  },[]);
  const handleVisible= () => {
    console.log(!visible)
    setVisible(!visible)
    console.log(visible)
    setVisible(!visible)
    console.log(visible)
  }
  return(
    <div>
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={visible}>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
      {(probs.showComplete&&probs.items.completed || probs.showUncomplete&& !probs.items.completed) &&<Card className={classes.root}
        color = "blue" >
          <CardContent className={classes.content}>
          <Typography variant="body1" color="textSecondary" component="p">
            {probs.items.task}
          </Typography>
        </CardContent>
        {probs.showDelete &&  <Checkbox
        checked={true}   
        name="checkedF"
        indeterminate
        onClick={() => {handleDelete()}}
      />}
      </Card>}
      
      </Grid>
  </Animated>
  </div>
  )
}
export default Taskbox;