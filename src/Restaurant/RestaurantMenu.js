import React, { Component } from 'react';

import { withStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  root: {
    margin: '20px',
    height: '500px',
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
    height: '35%',
    width: '100%',
    backgroundSize: 'cover',
		backgroundPosition: 'center',
		overflow: 'hidden',
  },
  text: {
    height: '65%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuName: {
    fontWeight: 'bold',
  },
  or: {
    fontSize: '0.8em',
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: '8px',
  },
  prix: {
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
            {content.entree2 && (
              <div>
                <Typography className={classes.or}>ou</Typography>
                <Typography variant='body1'>{content.entree2}</Typography>
              </div>
            )}
            <Typography variant='body1'>~</Typography>

            <Typography variant='body1'>{content.plat}</Typography>
            {content.plat2 && (
              <div>
                <Typography className={classes.or}>ou</Typography>
                <Typography variant='body1'>{content.plat2}</Typography>
              </div>
            )}
            <Typography variant='body1'>~</Typography>
            {content.apresPlat && (
              <div>
                <Typography variant='body1'>{content.apresPlat}</Typography>
                <Typography variant='body1'>~</Typography>
              </div>
            )}
            {(content.dessert2 && (
              <div>
                <Typography variant='body1'>{content.dessert}</Typography>
                <Typography className={classes.or}>ou</Typography>
                <Typography variant='body1' gutterBottom>{content.dessert2}</Typography>
              </div>
            )) ||
              <Typography variant='body1' gutterBottom>{content.dessert}</Typography>
            }
          </div>
          <Typography className={classes.prix} variant='body1'>- {content.prix} euros -</Typography>
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