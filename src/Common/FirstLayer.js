import React, { Component } from 'react';

import { withStyles, Typography, Switch } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const styles = {
	dark: {
		height: '100%',
		width: '100%',
		backgroundColor: 'black',
	},
	root: {
		height: '100%',
		width: '100%',
		minHeight: '600px',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		opacity: 1, // change the opacity to get the image darker,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	titleElt: {
		textAlign: 'center',
	}
}

class FirstLayer extends Component {
  render() {
		const { classes, title, checked, link, image } = this.props;
    return(
    	<div className={classes.dark}>
				<div className={classes.root} style={{backgroundImage:`url(${image})`}}>
					coucou
					<div className={classes.titleElt}>
						<Typography color="secondary" variant="h3">{title}</Typography>
						<Link to={link}>
							<Switch
								checked={checked}
							/>    
     				</Link>
					</div>
					coucou
				</div>
			</div>
    );
  }
}

FirstLayer.propTypes = {
  classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	link: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

export default withStyles(styles)(FirstLayer);
