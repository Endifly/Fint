import React, { useState, useEffect }  from 'react';
import { Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { AlignCenter } from 'react-feather';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { addTask } from '../../../actions/todoAction'
import { useDispatch, useSelector,useStore } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { CardContent } from '@material-ui/core';
import Animate from 'animate.css-react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    minWidth: 200,
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
  const classes = useStyles();
  const handleDelete = () => {
    console.log(probs.items.task)
  }
  return(
    
        <card
        className={classes.root}
      variant="outlined"
      >
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
      <card 
        className={classes.root}
        color = "LIGHT" >
          <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {probs.items.task}
          </Typography>
        </CardContent>
      </card>
      <Checkbox
        checked={true}   
        name="checkedF"
        indeterminate
        onClick={() => {handleDelete()}}
      />
      </Grid>
    </card>

  )
}
export default Taskbox;