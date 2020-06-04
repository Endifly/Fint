import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const UseStyles = makeStyles(() => ({
    root: {
      backgroundcolor: "black",
      //minheight: "100px",
      //display: "flex",
      //flexdirection: "column",
    } 
  }));

const EXCHANGE_RATES = gql`
{
  books {
    title
    author
  }
}
`

const UseQuery=useQuery
//const { loading, error, data } = useQuery(EXCHANGE_RATES);

function dashboard() {
  
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  console.log("dashboard_query")
  // client
  // .query({
  //   query: gql`
  //     {
  //       rates(currency: "USD") {
  //         currency
  //       }
  //     }
  //   `
  // })
  // .then(result => console.log(result));
  const classes = UseStyles();
  const { loading, error, data } = UseQuery(EXCHANGE_RATES);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        {title}: {author}
      </p>
    </div>
  ));

  return (
    <div className={classes.root}>
        <h3 style={{fontFamily: "Arial"}}>pizza</h3>
        <Grid
          container
          direction="row"
          justify="left"
          alignItems="center"
        >
          <Button variant="contained" color="white" disableElevation href='/app'>
            <ul>
              <li>status</li>
              {loading && <l1>Loading...</l1>}
              {error && <l1>Loading...</l1>}
            </ul>
        </Button>
        </Grid>
    </div>
  );
}

export default dashboard;
