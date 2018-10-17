import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './Home/Home.js';
import LesMenus from './Restaurant/LesMenus.js';
import LaCarte from './Restaurant/LaCarte.js';
import Footer from './Common/Footer';
import Video from './Home/Video';

import { injectGlobal } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js'

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'Roboto, Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
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
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
