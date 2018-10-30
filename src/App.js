import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home/Home.js';
import LesMenus from './Restaurant/LesMenus.js';
import LaCarte from './Restaurant/LaCarte.js';
import Footer from './Common/Footer';
import Video from './Home/Video';

import { withStyles } from '@material-ui/core'
import { injectGlobal } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js'

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: Source Sans Pro, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
`;

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  footer: {
    margin: '10px'
  }
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route
              path="/restaurant/menus"
              component={LesMenus}
            />
            <Route
              path="/restaurant/carte"
              component={LaCarte}
            />
            <Route
              path="/video"
              component={Video}
            />
            <Route
              path="/"
              component={Home}
            />
          </Switch>
          <div className={classes.footer}>
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
