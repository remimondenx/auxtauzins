import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import theme from './theme.js'
import HotelPage from './Hotel/HotelPage';
import HotelPageEn from './Hotel/HotelPageEn';
import RestaurantPage from './Restaurant/RestaurantPage';
import RestaurantPageEn from './Restaurant/RestaurantPageEn';

import { isBrowser } from 'react-device-detect'
import { withStyles} from '@material-ui/core'
import { injectGlobal } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ScrollUpButton from "react-scroll-up-button";


injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: Nunito, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
`;

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}

const styleScrollUpButton = {
  width: '40px',
  height: '40px',
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route
              path="/en"
              component={RestaurantPageEn}
              />
            <Route
              path="/hotel/en"
              component={HotelPageEn}
              />
            <Route
              path="/hotel"
              component={HotelPage}
              />
            <Route
              path="/"
              component={RestaurantPage}
              />
          </Switch>
        </MuiThemeProvider>
        {isBrowser ? 
          (<ScrollUpButton style={styleScrollUpButton} ShowAtPosition={1800} />) : 
          (<ScrollUpButton style={styleScrollUpButton} ShowAtPosition={3400} />) 
        }
      </div>
    );
  }
}

export default withStyles(styles)(App);
