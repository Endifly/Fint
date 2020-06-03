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

function Taskbox() {
  console.log("test")
  return(
    <card
      variant="outlined">
      <Button 
        variant="contained"
        color = "white" >
          Exercise
      </Button>
      <Checkbox
        checked={true}   
        name="checkedF"
        indeterminate
      />
    </card>
  )
}
export default Taskbox;