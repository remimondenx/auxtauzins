import React, { Component } from 'react';

import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  root: {
    margin: '20px',
    height: '450px',
    backgroundColor: 'white',
    border: '1px grey solid',
    borderRadius: '20px',
    boxShadow: '0 2px 4px #000000',
    textAlign: 'center',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgElt: {
    height: '40%',
    width: '100%',
    backgroundSize: 'cover',
		backgroundPosition: 'center',
		overflow: 'hidden',
  },
  text: {
    height: '60%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuName: {
    fontWeight: 'bold',
  },
}

class RestaurantMenu extends Component {
  render() {
    const { classes, content, imgs } = this.props;
    const image = imgs[0]['imgPath'];
    return(
			<div className={classes.root}>
        <div className={classes.imgElt} style={{backgroundImage:`url(${image})`}}></div>
        <div className={classes.text}>
          <Typography 
            className={classes.menuName}
            variant='h5'
            color='primary'
            gutterBottom
          >
            {content.name}
          </Typography>
          <div className={classes.food}>
            <Typography variant='body1'>{content.entree}</Typography>
            <Typography variant='body1'>~</Typography>
            <Typography variant='body1'>{content.plat}</Typography>
            <Typography variant='body1'>~</Typography>
            <Typography variant='body1' gutterBottom>{content.dessert}</Typography>
          </div>
          <div className={classes.prix}>
            <Typography variant='body1'>- {content.prix} euros -</Typography>
          </div>
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