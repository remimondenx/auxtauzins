import React, { Component } from 'react';

import restaurant from '../images/main/restaurant.jpg';
import FirstLayerEn from '../Common/FirstLayerEn';
import MenusLayerEn from './MenusLayerEn';
import LaCarteLayerEn from './LaCarteLayerEn';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import FooterRestaurantEn from './FooterRestaurantEn';


const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
	},
	firstLayer: {
		height: '100%'
	}
}

class RestaurantPageEn extends Component {
  render() {
		const { classes } = this.props;
    return(
			<div className={classes.root}>
				<div className={classes.firstLayer}>
					<FirstLayerEn
						className={classes.elt}
						hotel={false}
						link='/hotel/en'
						image={restaurant}
					/>
				</div>
				<div className={classes.following} >
					<MenusLayerEn />
					<LaCarteLayerEn />
					<FooterRestaurantEn />
				</div>
			</div>
    );
  }
}

RestaurantPageEn.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RestaurantPageEn);
