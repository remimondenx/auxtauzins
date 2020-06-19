import { withStyles } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component, lazy, Suspense } from 'react';
import { isBrowser } from 'react-device-detect';
import { Route, Switch } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';
import { injectGlobal } from 'styled-components';
import './App.css';
import theme from './theme.js';

const RestaurantPage = lazy(() => import('./Restaurant/RestaurantPage'));
const RestaurantPageEn = lazy(() => import('./Restaurant/RestaurantPageEn'));
const HotelPage = lazy(() => import('./Hotel/HotelPage'));
const HotelPageEn = lazy(() => import('./Hotel/HotelPageEn'));
const NotFound = lazy(() => import('./Common/NotFound'));

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  }
`;

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
};

const styleScrollUpButton = {
  width: '40px',
  height: '40px',
};

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Suspense fallback={null}>
            <Switch>
              <Route exact path="/en" component={RestaurantPageEn} />
              <Route exact path="/hotel/en" component={HotelPageEn} />
              <Route exact path="/hotel" component={HotelPage} />
              <Route exact path="/" component={RestaurantPage} />
              <Route path="/" component={NotFound} />
            </Switch>
          </Suspense>
        </MuiThemeProvider>
        {isBrowser ? (
          <ScrollUpButton style={styleScrollUpButton} ShowAtPosition={1800} />
        ) : (
          <ScrollUpButton style={styleScrollUpButton} ShowAtPosition={3400} />
        )}
      </div>
    );
  }
}

export default withStyles(styles)(App);
