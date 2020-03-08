import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import theme  from './theme'
import Header from "./components/Header";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Result from "./components/Result";
import Submit from "./components/Submit";

const useStyles = makeStyles((theme) => ({
  '@global' : {
    body : {
      background: '#fff',
      height: '100%',
      padding : 0,
      margin : 0,
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
              <Result type={'best'}/>
            </Route>
            <Route exact path="/new">
                <Result type={'new'}/>
            </Route>
            <Route exact path="/past">
              <Result type={'past'}/>
            </Route>
            <Route exact path="/ask">
              <Result type={'ask'}/>
            </Route>
            <Route exact path="/show">
              <Result type={'show'}/>
            </Route>
            <Route exact path="/jobs">
              <Result type={'jobs'}/>
            </Route>
            <Route exact path="/submit">
              <Submit/>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
      </Provider>
  );
}

export default App;
