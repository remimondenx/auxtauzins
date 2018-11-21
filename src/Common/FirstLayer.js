import React, { Component } from 'react';

import united_kingdom from '../images/logos/united_kingdom.png';
import logo from '../images/logos/chene.png';

import { withStyles, Typography, Switch, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
	dark: {
		height: '100%',
		backgroundColor: 'black',
	},
	root: {
		height: '100%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		overflow: 'hidden',
		opacity: 1, // change the opacity to get the image darker,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	contactElt: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingTop: '10px'
	},
	titleElt: {
		textAlign: 'center',
		textShadow: '0 0 4px #000000',
	},
	contact: {
		textShadow: '0 0 2px #000000',
		paddingRight: 5,
	},
	chene: {
		position: 'absolute',
		top: '10px',
		left: '10px',
		height: '75px',
	},
	switchContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}

class FirstLayer extends Component {
  render() {
		const { classes, title, checked, link, image } = this.props;
    return(
    	<div className={classes.dark}>
				<div className={classes.root} style={{backgroundImage:`url(${image})`}}>
					<div className={classes.contactElt}>
						<Link to='/' style={{textDecoration: 'none'}}>
							<img className={classes.chene} src={logo} alt='logo' />
						</Link>
						<Button className={classes.contact} color='secondary' href='test'>
							Nous contacter
						</Button>
						<Button>
							<img 
								src={united_kingdom}
								alt='English version'
								style={{height:'35px', padding:0}}/>
						</Button>
					</div>
					<div className={classes.titleElt}>
						<Typography color='secondary' variant='h3'>{title}</Typography>
						<div className={classes.switchContainer}>
							<Typography color='secondary' variant='h5'>Restaurant</Typography>
							<Link to={link}>
								<Switch
									checked={checked}
								/>    
							</Link>
							<Typography color='secondary' variant='h5'>Hôtel</Typography>
						</div>
					</div>
					<div id='test'>coucou</div>
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