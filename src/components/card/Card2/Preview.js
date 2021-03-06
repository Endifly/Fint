import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop:20,
    minWidth: 300,
    maxWidth: 450,
  },
  media: {
    height: 140,
  },
});

function Preview(probs) {
  const classes = useStyles();
  const {onPress} = probs;
  return (
    <Card className={classes.root} onClick={()=>onPress("Card2")}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Model2
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
export default Preview;