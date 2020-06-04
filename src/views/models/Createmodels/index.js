import React, { useState, useEffect }  from 'react';
import Grid from '@material-ui/core/Grid';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
}));

function Createmodels() {
  const classes = useStyles()
  return (
    <div>
    <Box
      height="100%"
      display="flex"
      flexDirection="row"
      flexDirection="row"
      overflow= 'hidden'

    >
       <Grid
        className={classes.wrapper}
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={7}
        sm={7}
        xs={7}
      >
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <div>
        <Card >
          <CardContent className={classes.content}>
            1
          </CardContent>
        </Card>
        <Card >
          <CardContent className={classes.content}>
            1
          </CardContent>
        </Card>
        </div>
        </PerfectScrollbar>
      </Grid>
      
      <Grid
        className={classes.wrapper}
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={5}
        sm={5}
        xs={5}
        
        
      >
        <Card >
          <CardContent className={classes.content}>
            2
          </CardContent>
        </Card>
        <Card >
          <CardContent className={classes.content}>
            2
          </CardContent>
        </Card>
      </Grid>
      
    </Box>
    </div>
  )
}
export default Createmodels;