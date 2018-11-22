import React, { Component } from 'react';

import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  root: {
    margin: '20px',
    padding: '10px',
    height: '250px',
    backgroundColor: 'white',
    border: '1px grey solid',
    borderRadius: '10px',
    boxShadow: '0 0 4px #000000',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
}

class RestaurantMenu extends Component {
  render() {
    const { classes, content, imgs } = this.props;
    return(
			<div className={classes.root}>
        <Typography variant='h5' gutterBottom>
          {content.name}
        </Typography>
        <div className={classes.food}>
          <Typography variant='body1'>{content.entree}</Typography>
          <Typography variant='body1'>~</Typography>
          <Typography variant='body1'>{content.plat}</Typography>
          <Typography variant='body1'>~</Typography>
          <Typography variant='body1'>{content.dessert}</Typography>
        </div>
        <div className={classes.prix}>
          <Typography variant='body1'>- {content.prix} euros -</Typography>
        </div>
      </div>
    );
  }
}

RestaurantMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    entree: PropTypes.string.isRequired,
    plat: PropTypes.string.isRequired,
    dessert: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
  }).isRequired,
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
}

export default withStyles(styles)(RestaurantMenu);