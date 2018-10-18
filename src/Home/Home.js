import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import HotelRestau from './HotelRestau.js';
import Video from './Video';
import restaurant from '../images/home/restaurant.jpg';
import hotel from '../images/home/hotel.jpg';

const styles = {
  root: {
    display: 'flex',
  }
}

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <HotelRestau
          name='Restaurant'
          link='./restaurant/menus'
          img={restaurant} />
        <HotelRestau
          name='Hôtel'
          link='./hotel'
          img={hotel} />
        <Video>
          Visionnez la vidéo de l'établissement !
        </Video>
      </div>
    )
  }
}

export default withStyles(styles)(Home);
