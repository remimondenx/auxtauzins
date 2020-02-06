import React, { Component } from 'react';

import piscine_img from '../images/activities/piscine.jpg';
import golf_img from '../images/activities/golf.jpg';
import lecture_img from '../images/activities/lecture.jpg';
import domaine_img from '../images/activities/domaine.jpg';
import ocean_img from '../images/activities/ocean.jpg';
import ferme_img from '../images/activities/ferme.jpg';
import musee_img from '../images/activities/musee.jpg';
import chateau_img from '../images/activities/chateau.jpg';

import { withStyles, Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    padding: '10px',
    textAlign: 'center',
  },
  gridList: {
    padding: '20px',
    maxWidth: '1040px',
  },
  carteElt: {
    height: '300px',
    padding: '20px',
  },
  backgroundImage: {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    border: '1px grey solid',
    borderRadius: '20px',
    boxShadow: '0 2px 4px #000000',
    display: 'flex',
  },
  darkBand: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '40px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  titleCarteElt: {
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
  titleCarteEltUnderlined: {
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '1.1em',
    textDecoration: 'underline',
  },
};

class LaCarteLayer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h3">
          Les activités
        </Typography>
        <Grid className={classes.gridList} container>
          {listActivites.map(it => (
            <Grid className={classes.carteElt} key={it.id} item xs={12} sm={6}>
              {(it.link && (
                <a
                  href={it.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  alt={it.title}
                >
                  <div
                    className={classes.backgroundImage}
                    style={{ backgroundImage: `url(${it.img})` }}
                  >
                    <div className={classes.darkBand}>
                      <Typography
                        className={classes.titleCarteEltUnderlined}
                        color="secondary"
                      >
                        {it.title}
                      </Typography>
                    </div>
                  </div>
                </a>
              )) || (
                <div
                  className={classes.backgroundImage}
                  style={{ backgroundImage: `url(${it.img})` }}
                >
                  <div className={classes.darkBand}>
                    <Typography
                      className={classes.titleCarteElt}
                      color="secondary"
                    >
                      {it.title}
                    </Typography>
                  </div>
                </div>
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

LaCarteLayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LaCarteLayer);

const piscine = {
  id: 1,
  title: 'Piscine',
  img: piscine_img,
};

const golf = {
  id: 2,
  title: 'Mini-golf',
  img: golf_img,
};

const lecture = {
  id: 3,
  title: 'Salon de lecture',
  img: lecture_img,
};

const domaine = {
  id: 4,
  title: 'Domaine de Poyaller',
  img: domaine_img,
  link: 'https://www.moulin-poyaller.com',
};

const ocean = {
  id: 5,
  title: 'Océan Atlantique',
  img: ocean_img,
};

const ferme = {
  id: 6,
  title: 'Ferme du Haut Clouzet',
  img: ferme_img,
  link: 'http://www.fermeduhautclouzet.com',
};

const musee = {
  id: 7,
  title: 'Musée de la Chalosse',
  img: musee_img,
  link: 'http://www.museedelachalosse.fr',
};

const chateau = {
  id: 8,
  title: 'Château de Gaujacq',
  img: chateau_img,
  link: 'http://chateau.de.gaujacq.free.fr',
};

const listActivites = [
  piscine,
  golf,
  lecture,
  domaine,
  ocean,
  ferme,
  musee,
  chateau,
];
