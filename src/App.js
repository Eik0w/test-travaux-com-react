import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import theme  from './theme'
import Header from "./components/Header";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global' : {
    body : {
      background: '#fff',
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

}));

function App() {
  const classes = useStyles();
  return (
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              coucou je suis la homePAge
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
      </Provider>
  );
}

export default App;
