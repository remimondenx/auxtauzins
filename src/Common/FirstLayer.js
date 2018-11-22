import React, { Component } from 'react';

import united_kingdom from '../images/logos/united_kingdom.png';
import chene from '../images/logos/chene.png';
import facebook from '../images/logos/facebook.png';
import instagram from '../images/logos/instagram.png';
import tripadvisor from '../images/logos/tripadvisor.png';

import { withStyles, Typography, Switch, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
	hundred: {
		height: '100%',
	},
	root: {
		height: '100%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		overflow: 'hidden',
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
	},
	socialMedia: {
		padding: '10px',
		display: 'flex',
		justifyContent: 'flex-start',
	}
}

class FirstLayer extends Component {
  render() {
		const { classes, title, checked, link, image } = this.props;
    return(
    	<div className={classes.hundred}>
				<div className={classes.root} style={{backgroundImage:`url(${image})`}}>
					<div className={classes.contactElt}>
						<Link to='/' style={{textDecoration: 'none'}}>
							<img className={classes.chene} src={chene} alt='logo' />
						</Link>
						<Button className={classes.contact} color='secondary' href='#contact'>
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
							<Typography 
								color='secondary'
								variant='h5'
								style={{width:'120px'}}
							>
								Restaurant
							</Typography>
							<Link to={link}>
								<Switch
									checked={checked}
								/>   
							</Link>
							<Typography
								color='secondary'
								variant='h5'
								style={{width:'120px', textAlign:'justify'}}
							>
								Hôtel
							</Typography>
						</div>
					</div>
					<div className={classes.socialMedia}>
						<a href='https://wwww.facebook.com'>
							<img style={{height:'50px', paddingRight:'10px'}} src={facebook} alt='Logo Facebook' />
						</a>
						<a href='https://wwww.facebook.com'>
							<img style={{height:'50px', paddingRight:'10px'}} src={instagram} alt='Logo Instagram' />
						</a>
						<a href='https://wwww.facebook.com'>
							<img style={{height:'50px'}} src={tripadvisor} alt='Logo Instagram' />
						</a>
					</div>
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