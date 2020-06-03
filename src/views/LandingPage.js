import React from 'react';
import { Router } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


 
function LandingPage() {
  return (
    <div className="App">
        <header className="App-header">
        <Button variant="contained" color="primary" disableElevation href='/app'>
        Go to dashboard
        </Button>
    </header>
    </div>
  );
}

export default LandingPage;
