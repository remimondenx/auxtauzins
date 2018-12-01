import React, { Component } from 'react';

import st_jacques from '../images/menus/st_jacques.jpg';
import st_jacques_cepes from '../images/menus/st_jacques_aux_cepes.jpg';

import { withStyles, Typography, GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, Grid } from '@material-ui/core';
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
    height: '300px',
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
    alignSelf: 'flex-end'
  },
  titleCarteElt: {
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
  darkImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '20px',
    width: '100%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
  },
}

class LaCarteLayer extends Component {
  state= {
    open: 0
  }

  handleEvent= id => {
    this.setState({open: id});
  }


  render() {
    const { classes } = this.props;
    return(
			<div className={classes.root}>
        <Typography className={classes.title} variant='h2'>
          La carte
        </Typography>
        <Grid className={classes.gridList} spacing={16} container>
          {listLaCarte.map(it =>
            <Grid onClick={() => this.handleEvent(it.id)}
              className={classes.carteElt}
              key={it.id}
              item xs={12} sm={6}>
              <div className={classes.backgroundImage} style={{backgroundImage:`url(${it.img})`}}>
                {!(this.state.open===it.id) && 
                  <div className={classes.darkBand}>
                    <Typography className={classes.titleCarteElt} color='secondary'>{it.title}</Typography>
                  </div>
                }
                {this.state.open===it.id &&
                  <div className={classes.darkImage}>
                    <Typography variant='h5' color='primary' style={{fontWeight:'bold'}} gutterBottom>
                      {it.title}
                    </Typography>
                    <table>
                      {it.content.map(course =>
                        <tr>
                          <th><Typography className={classes.food} color='secondary'>{course.food}</Typography></th>
                          <th>
                            <div style={{fontFamily:'Nunito', color:'#4CAF50', fontSize:'0.7em'}}>
                              {course.price}€
                            </div>
                          </th>
                        </tr>
                      )}
                    </table>
                  </div>
                }
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
  id: 1,
  title: 'Entrées',
  img: st_jacques,
  content: [
    {food: 'Salade verte', price: 6},
    {food: 'Salade composée (Salade verte, tomates, oignons, pointes d\'asperges)', price: 12},
    {food: 'Garbure landaise', price: 13},
    {food: 'Soupe de poissons', price: 13},
    {food: 'Pâté de porc maison', price: 10},
    {food: 'Pâté de chevreuil maison', price: 10},
    {food: 'Jambon du pays', price: 15},
    {food: 'Assiette de charcuterie maison', price: 15},
    {food: 'Omelette au jambon', price: 14},
    {food: 'Omelette au fromage', price: 14},
    {food: 'Omelette aux cèpes', price: 18},
  ]
}

const canard = {
  id: 2,
  title: 'Le canard passion',
  img: st_jacques_cepes,
  content: [
    {food: 'Pâté de foie de canard maison', price: 15},
    {food: 'Magret froid fourré au canard', price: 24}
  ]
}

const poisson = {
  id: 3,
  title: 'Les poissons',
  img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  content: []
}

const sauces = {
  id: 4,
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