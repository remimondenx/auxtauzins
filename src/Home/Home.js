import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import HotelRestau from './HotelRestau.js';
import Video from './Video';
import restaurant from '../images/home/restaurant.jpg';
import hotel from '../images/home/hotel.jpg';

const styles = {
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  pictures: {
    flex: 1,
    display: 'flex',
    height: '90%'
  },
  pictureElt: {
    overflow: 'hidden',
  },
  video: {
    height: '35px',
  },
}

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.pictures}>
          <div className={classes.pictureElt}>
            <HotelRestau
              name='Restaurant'
              link='./restaurant/menus'
              img={restaurant} />
          </div>
          <div className={classes.pictureElt}>
            <HotelRestau
              name='Hôtel'
              link='./hotel'
              img={hotel} />
          </div>
        </div>
        <div className={classes.video}>
          <Video>
            Visionnez la vidéo de l'établissement !
          </Video>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home);
