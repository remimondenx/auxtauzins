import React, { Component } from 'react';

import Room from './Room';
import imgSaisonHaute from '../images/rooms/chambre_1.jpg';
import imgHorsSaison from '../images/rooms/chambre_2.jpg';

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
        <Grid className={classes.menus} container>
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
  name: 'Saison haute : 15 Mai - 30 Septembre',
  sans: '82/92€',
  avec: '95/120€',
}

const horsSaison = {
  name: 'Hors saison : 1 Octobre - 15 Mai',
  sans: '75€',
  avec: '82€',
}


const imgsSaisonHaute = [
  {
    label: 'assiette_terroir',
    imgPath: imgSaisonHaute,
  },
];

const imgsHorsSaison = [
  {
    label: 'coupe Melba',
    imgPath: imgHorsSaison,
  }
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