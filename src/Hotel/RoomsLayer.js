import React, { Component } from 'react';

import Room from './Room';
import imgSaisonHaute from '../images/rooms/chambre_1.jpg';
import imgSaisonHaute2 from '../images/rooms/chambre_5.jpg';
import imgSaisonHaute3 from '../images/rooms/chambre_4.jpg';
import imgSaisonHaute4 from '../images/rooms/chambre_6.jpg';
import imgSaisonHaute5 from '../images/rooms/sdb_1.jpg';
import imgHorsSaison from '../images/rooms/chambre_2.jpg';
import imgHorsSaison2 from '../images/rooms/chambre_7_1.jpg';
import imgHorsSaison3 from '../images/rooms/chambre_8.jpg';
import imgHorsSaison4 from '../images/rooms/chambre_9.jpg';
import imgHorsSaison5 from '../images/rooms/sdb_2.jpg';

import { withStyles, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  root: {
    backgroundColor: '#FFCA28',
    padding: '30px',
    textAlign: 'center',
  },
}

class RoomsLayer extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <Typography variant='h2' gutterBottom>Nos chambres</Typography>
        <Grid className={classes.rooms} container>
          {listRooms.map(it =>
            <Grid item xs={12} sm={6} key={it.content.name}>
             <Room content={it.content} imgs={it.imgs} />
            </Grid> 
            )}
        </Grid>
      </div>
    );
  }
}

RoomsLayer.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RoomsLayer);

const saisonHaute = {
  name: 'Saison haute :',
  date: '15 Mai - 30 Septembre',
  sans: '82/92€',
  avec: '95/120€',
}

const horsSaison = {
  name: 'Hors saison :',
  date: '1 Octobre - 15 Mai',
  sans: '75€',
  avec: '82€',
}


const imgsSaisonHaute = [
  {
    label: 'img saison haute 1',
    imgPath: imgSaisonHaute,
  },
  {
    label: 'img saison haute 2',
    imgPath: imgSaisonHaute2,
  },
  {
    label: 'img saison haute 3',
    imgPath: imgSaisonHaute3,
  },
  {
    label: 'img saison haute 4',
    imgPath: imgSaisonHaute4,
  },
  {
    label: 'img saison haute 5',
    imgPath: imgSaisonHaute5,
  },
];

const imgsHorsSaison = [
  {
    label: 'image hors saison 1',
    imgPath: imgHorsSaison,
  },
  {
    label: 'image hors saison 2',
    imgPath: imgHorsSaison2,
  },
  {
    label: 'image hors saison 3',
    imgPath: imgHorsSaison3,
  },
  {
    label: 'image hors saison 4',
    imgPath: imgHorsSaison4,
  },
  {
    label: 'image hors saison 5',
    imgPath: imgHorsSaison5,
  },
];

const listRooms = [
  {
    content: saisonHaute,
    imgs: imgsSaisonHaute,
  },
  {
    content: horsSaison,
    imgs: imgsHorsSaison,
  },
]