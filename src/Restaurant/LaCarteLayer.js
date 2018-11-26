import React, { Component } from 'react';

import st_jacques from '../images/menus/st_jacques.jpg';
import st_jacques_cepes from '../images/menus/st_jacques_aux_cepes.jpg';

import { withStyles, Typography, GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, Grid } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
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
  },
  carteElt: {
    height: '200px',
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
    alignItems: 'flex-end'
  },
  dark: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '40px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  titleCarteElt: {
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
}

class LaCarteLayer extends Component {
  render() {
    const { classes } = this.props;
    return(
			<div className={classes.root}>
        <Typography className={classes.title} variant='h2'>
          La carte
        </Typography>
        <Grid className={classes.gridList} spacing={16} container>
          {listLaCarte.map(it =>
            <Grid className={classes.carteElt} item xs={12} sm={6}>
              <div className={classes.backgroundImage} style={{backgroundImage:`url(${it.img})`}}>
                {true && <div className={classes.dark}>
                  <Typography className={classes.titleCarteElt} color='secondary'>{it.title}</Typography>
                </div>}
              </div>
            </Grid>     
          )}
        </Grid>
      </div>
    );
  }
}

LaCarteLayer.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LaCarteLayer);

const entrees = {
  title: 'Entrées',
  img: st_jacques,
  content: [
    {food: 'Salade verte', price: 6},
    {food: 'Salade composée (Salade verte, tomates, oignons, pointes d\'asperges)', price: 12},
    {food: 'Garbure landaise', price: 13}
  ]
}

const canard = {
  title: 'Le carnard passion',
  img: st_jacques_cepes,
  content: [
    {food: 'Pâté de foie de canard maison', price: 15},
    {food: 'Magret froid fourré au canard', price: 24}
  ]
}

const poisson = {
  title: 'Les poissons',
  img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  content: []
}

const sauces = {
  title: 'Les sauces',
  img: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  content: []
}

const listLaCarte = [entrees, canard, poisson, sauces]



/*
<GridListTile className={classes.tile} key={it.title}>
              <img src={it.img} alt={it.title} />
              <GridListTileBar
                title={it.title}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
*/