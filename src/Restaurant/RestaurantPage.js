import React, { Component } from 'react';

import restaurant from '../images/main/restaurant_dark.jpg';
import FirstLayer from '../Common/FirstLayer';
import Contact from '../Common/Contact';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';


const styles = {
	root: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%'
	},
}

class RestaurantPage extends Component {
  render() {
		const { classes } = this.props;
    return(
			<div className={classes.root}>
				<FirstLayer
					className={classes.elt}
					title="Restaurant Aux Tauzins" 
					checked={false}
					link='/hotel'
					image={restaurant}
				/>
				<Contact />
			</div>
    );
  }
}

RestaurantPage.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RestaurantPage);
