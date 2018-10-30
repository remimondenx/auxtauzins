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
      <Button href='#'>
        En saison
      </Button>
      <Button href='#'>
        Hors saison
      </Button>
      <Button href='#'>
        Les activités
      </Button>
      <Button href='#'>
        Histoire du lieu
      </Button>
      <Button href='#'>
        Photos & Vidéos
      </Button>
    </Toolbar>
  </AppBar>
)

export default TopBar;
