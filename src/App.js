import React from 'react';
import logo from './logo.svg';
import './App.css';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import theme  from './theme'
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  '@global' : {
    body : {
      background: '#ddd',
      height: '100%',
      position : 'relative',
      padding : 0,
      margin : 0,
      overflow : 'hidden',
      '& * ' : {
        boxSizing : 'border-box'
      }
    }
  },
  root : {
    display : 'flex',
    flexWrap : 'wrap',
    justifyContent : 'center',
    height: '100vh',
    position : 'relative',
    padding : 0,
    margin : 0,
    overflow : 'hidden',
  }
}));

function App() {
  const classes = useStyles();
  return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Header/>
        </div>
      </ThemeProvider>
  );
}

export default App;
