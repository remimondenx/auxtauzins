import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

import { Button } from '@material-ui/core';

const TopBar = () => (
  <AppBar position='sticky'>
    <Toolbar>
      <Link to='/' style={{textDecoration: 'none'}}>
        <Typography variant='title' color='inherit'>
          Aux Tauzins
        </Typography>
      </Link>
      <Button href='/restaurant/menus'>
        Les menus
      </Button>
      <Button href='/restaurant/carte'>
        La carte
      </Button>
    </Toolbar>
  </AppBar>
)

export default TopBar;
