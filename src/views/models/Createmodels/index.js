import React, { useState, useEffect }  from 'react';
import Grid from '@material-ui/core/Grid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { CardContent } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card1 from '../../../components/card/Card1'
import Card2 from '../../../components/card/Card2'
import Card3 from '../../../components/card/Card3'
import ButtonBase from '@material-ui/core/ButtonBase';
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
    backgroundColor: "#f4f6f8",
  },
  leftCol :{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
  centerCol :{
    display:'flex',
    flex: 1,
    overflowY: 'scroll',
    justifyContent: 'top',
    alignItems:'center',
    flexDirection: 'column',
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
  const [card,SetCard] = useState("Card1");
  function handleClick(card) {
    //console.log(card)
    SetCard(card)

  }
  function nowCard(nowCard) {
    return card==nowCard
  }
  return (
    <div className={classes.container}>
      <Grid 
        className={classes.centerCol}
        lg={7}
        sm={7}
        xs={7}>
        <Grid
          lg={6}>
            <Card1 type="preview" onPress={handleClick}/>
            <Card2 type="preview" onPress={handleClick}/>
            <Card3 type="preview" onPress={handleClick}/>
        </Grid>
        
        
      </Grid>
      <Grid className={classes.centerCol}
        lg={5}
        sm={5}
        xs={5}>
        <Grid
          lg={6}>
          {nowCard("Card1") && <Card1 type="detail"/>}
          {nowCard("Card2") && <Card2 type="detail"/>}
          {nowCard("Card3") && <Card3 type="detail"/>}
        </Grid>
        
      </Grid>
     
    </div>
  )
}
export default Createmodels;