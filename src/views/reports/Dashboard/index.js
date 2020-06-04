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
  

  console.log("dashboard_query")

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

  
}

export default dashboard;
