import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

import TopBarList from './TopBarList.js';

const TopBar = () => (
  <AppBar position='sticky'>
    <Toolbar>
      <Link to='/' style={{textDecoration: 'none'}}>
        <Typography variant='title' color='inherit'>
          Aux Tauzins
        </Typography>
      </Link>
      <TopBarList 
        name='Restaurant' 
        list={[{name:'Les menus', link:'/restaurant/menus'},
          {name:'La carte', link:'/restaurant/carte'}]} />
      <TopBarList 
        name='Hôtel' 
        list={[{name:'En saison', link:'#'},
          {name:'Hors saison', link:'#'},
          {name:'Les activités', link:'#'},
          {name:'Histoire du lieu', link:'#'},
          {name:'Photos & Vidéos', link:'#'}]} />
      
    </Toolbar>
  </AppBar>
)

export default TopBar;
