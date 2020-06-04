import React, { useState, useEffect }  from 'react';
import Grid from '@material-ui/core/Grid';
import ScrollBar  from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme=>({
  root: {
    minWidth: 200,
    margin : 10,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
  },
  content : {
    minWidth: 100,
    marginTop : 400,
  },
  container :{
    display: 'flex',
    flexDirection: 'row',
    height: '90vh',
  },
  leftCol :{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCol :{
    flex: 1,
    overflowY: 'scroll',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  example: {
    width: '400px',
    height: '400px'
  },
  econtent: {
      width: 800,
      height: 480,
  },
  
}));

function Createmodels() {
  const classes = useStyles()
  const items = [...Array(100)].map((val, i) => `Item ${i}`);
  function logEvent(type) {
    console.log(`event '${type}' triggered!`);
  }
  return (
    <div className={classes.container}>
    
      <Grid 
        className={classes.centerCol}
        lg={7}
        sm={7}
        xs={7}>
        <span>List</span>
        <ul>
          {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
        </ul>
      </Grid>
      <Grid className={classes.centerCol}
        lg={5}
        sm={5}
        xs={5}>
        <span>List</span>
        <ul>
          {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
        </ul>
      </Grid>
      
    </div>
  )
}
export default Createmodels;