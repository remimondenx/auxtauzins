import React, { Component } from 'react';

import france from '../images/logos/france.png';
import aux_tauzins_white from '../images/logos/aux_tauzins_white.png';
import aux_tauzins_black from '../images/logos/aux_tauzins_black.png';
import facebook from '../images/logos/facebook.png';
import instagram from '../images/logos/instagram.png';
import tripadvisor from '../images/logos/tripadvisor.png';
import logo_video from '../images/logos/video.png';
import scroll from '../images/other/scroll.gif';
import logis from '../images/logos/logis.png';
import booking from '../images/logos/booking.png';

import { withStyles, Typography, Switch, Button, Dialog, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BrowserView, isBrowser, isMobile } from 'react-device-detect';

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
		justifyContent: 'space-between',
	},
	contactElt: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingTop: '10px',
	},
	titleElt: {
		textAlign: 'center',
		textShadow: '2px 2px 4px black',
	},
	contactBrowser: {
		textShadow: '0 0 2px #000000',
		padding: 5,
		border: '2px solid white',
		borderRadius: '10px',
		textTransform: 'none',
		'&:hover': {
      backgroundColor: 'white'
		},
		fontStyle: 'normal'
	},
	contactMobile: {
		alignSelf: 'flex-end',
		width: '40%',
		padding: 5,
		margin: 10,
		textShadow: '0 0 2px #000000',
		border: '2px solid white',
		borderRadius: '10px',
		textTransform: 'none',
		'&:hover': {
      backgroundColor: 'white'
		},
		fontStyle: 'normal'
	},
	englishButton: {
		'&:hover': {
      backgroundColor: 'transparent'
		},
		padding: '10px 5px 5px 5px'
	},
	aux_tauzins: {
		position: 'absolute',
		top: '10px',
		left: '10px',
		height: '100px',
	},
	aux_tauzins_mobile: {
		position: 'absolute',
		top: '10px',
		left: '10px',
		height: '68px',
	},
	link: {
		textDecoration: 'none',
	},
	underline: {
		textDecoration: 'underline',
		fontSize: '2.2em',
		textShadow: '4px 2px 4px black',
		fontWeight: '300'
	},
	cliquable: {
		borderBottom: '2px solid currentColor',
 	 	display: 'inline-block',
		lineHeight: 0.85,
		textShadow: '4px 2px 4px black',
		fontWeight: '300'
	},
	switchContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	colorSwitchBase: {
		color: '#ffffff',
    '&$colorChecked': {
      color: '#003680',
      '& + $colorBar': {
        backgroundColor: 'white',
      },
		},
	},
	colorBar: {},
  colorChecked: {},
	reserverHotel: {
		marginTop: '10px',
		borderRadius: '10px',
		backgroundColor: '#003680',
		fontStyle: 'normal'
	},
	reserverRestaurant: {
		marginTop: '10px',
		color: 'transparent',
	},
	socialMedia: {
		padding: '10px',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	scrollContainer: {
		position: 'absolute',
		bottom: '-30px',
		left: '50%'
	},
	scroll: {
		height: '100px',
		position: 'relative',
		left: '-50%',
	},
	logis: {
		position: 'absolute',
		bottom: '10px',
		right: '10px',
	},
	imgLogis: {
		height: '50px',
	},
}

class FirstLayer extends Component {
	state = {
    open: false,
  }

  handleOpen = () => {
      this.setState({open: true})
  }

  handleClose = () => {
      this.setState({open: false})
	}
	
  render() {
		const { classes, hotel, link, image } = this.props;
    return(
    	<div className={classes.hundred}>
				<div className={classes.root} style={{backgroundImage:`url(${image})`}}>
					<div className={classes.contactElt}>
					<Link to='/en' style={{textDecoration: 'none'}}>
							{isBrowser ? (hotel ? <h1><img className={classes.aux_tauzins} src={aux_tauzins_white}  alt='Restaurant Hôtel Chalosse Landes Dax' title="Restaurant Hôtel Chalosse Landes Dax" /></h1>
							: <h1><img className={classes.aux_tauzins} src={aux_tauzins_black}  alt='Restaurant Hôtel Chalosse Landes Dax' title="Restaurant Hôtel Chalosse Landes Dax" /></h1>)
							: (hotel ? <h1><img className={classes.aux_tauzins_mobile} src={aux_tauzins_white}  alt='Restaurant Hôtel Chalosse Landes Dax' title="Restaurant Hôtel Chalosse Landes Dax" /></h1>
							: <h1><img className={classes.aux_tauzins_mobile} src={aux_tauzins_black}  alt='Restaurant Hôtel Chalosse Landes Dax' title="Restaurant Hôtel Chalosse Landes Dax" /></h1>)}
					</Link>
						{isBrowser && (
							<Button className={classes.contactBrowser} color='secondary' href='#contact'>
								Reach us
							</Button>
						)}
						{hotel ? 
							(<Link to='/hotel' className={classes.englishButton}>
								<img 
									src={france}
									alt='French version'
									style={{height:'35px', padding:0}}
								/>
							</Link>) 
						: 
							(<Link to='/' className={classes.englishButton}>
								<img 
									src={france}
									alt='French version'
									style={{height:'35px', padding:0}}
								/>
							</Link>)
						}
					</div>
					<div className={classes.titleElt}>
						<div className={classes.switchContainer}>
							<Link className={classes.link} to='/en'>
								{(isBrowser && (
									<Typography 
										className={classes.underline}
										color='secondary'
										variant='h1'
										style={{width:'180px'}}
									>
										Restaurant
									</Typography>
								)) || (
									<Typography 
										className={classes.cliquable}
										color='secondary'
										variant='h1'
									>
										Restaurant
									</Typography>
								)}
							</Link>
							<Link to={link}>
								<Switch
									checked={hotel}
									classes={{
										switchBase: classes.colorSwitchBase,
										checked: classes.colorChecked,
										bar: classes.colorBar,
									}}
								/>   
							</Link>
							<Link className={classes.link} to='/hotel/en'>
								{(isBrowser && (
									<Typography
										className={classes.underline}
										color='secondary'
										variant='h1'
										style={{width:'180px', textAlign:'justify'}}
									>
										Hotel
									</Typography>
								)) || (
									<Typography
										className={classes.cliquable}
										color='secondary'
										variant='h1'
										style={{textAlign:'justify'}}
									>
										Hotel
									</Typography>
								)}
							</Link>
						</div>
						{hotel &&
							<Button 
								className={classes.reserverHotel}
								target='_blank'
								rel="noopener noreferrer"
								href='https://www.logishotels.com/fr/tarifs-et-disponibilites-chambre?id=1516'
								color='secondary'
							>
								Book
							</Button>
						}
						{!hotel &&
							<Button 
								className={classes.reserverRestaurant}
								disabled
							>
								<div style={{color:'transparent'}}>Réserver</div>
							</Button>
						}
					</div>
					{isMobile && (
						<Button className={classes.contactMobile} color='secondary' href='#contact'>
							Reach us
						</Button>
					)}
					<BrowserView>
						<div className={classes.socialMedia}>
							<a href='https://www.facebook.com/auxtauzins' target='_blank' rel="noopener noreferrer">
								<img style={{height:'40px', paddingRight:'10px'}} src={facebook} alt='Logo Facebook' />
							</a>
							<a href='https://www.instagram.com/auxtauzins/' target='_blank' rel="noopener noreferrer">
								<img style={{height:'40px', paddingRight:'10px'}} src={instagram} alt='Logo Instagram' />
							</a>
							{(hotel && (
								<a href='https://www.booking.com/hotel/fr/aux-tauzins-montfort.fr.html' target='_blank' rel="noopener noreferrer">
									<img style={{height:'40px', paddingRight: '10px'}} src={booking} alt='Logo Booking' />
								</a>
							)) || (
								<a href='https://www.tripadvisor.fr/Restaurant_Review-g2068609-d3978484-Reviews-Aux_Tauzins-Montfort_en_Chalosse_Landes_Nouvelle_Aquitaine.html' target='_blank' rel="noopener noreferrer">
									<img style={{height:'40px', paddingRight: '10px'}} src={tripadvisor} alt='Logo Tripadvisor' />
								</a>
							)}
							<Tooltip title="Take a look to the establishment video">
								<img 
									src={logo_video}
									alt='logo video'
									onClick={this.handleOpen}
									style={{height:'40px'}}
								/>
							</Tooltip>
							<Dialog open={this.state.open} onClose={this.handleClose}>
								<iframe title="presentation" src="https://player.vimeo.com/video/138057164?title=0&byline=0&portrait=0" width="600" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
								</iframe>
							</Dialog>
						</div>
					</BrowserView>
					<div className={classes.scrollContainer}>
						<img className={classes.scroll} src={scroll} alt='scroll' />
					</div>
					<div className={classes.logis}>
						<BrowserView>
							<a href='https://www.logishotels.com/fr' target='_blank' rel="noopener noreferrer">
								<img className={classes.imgLogis} src={logis} alt='logis hotel' />
							</a>
						</BrowserView>
					</div>
				</div>
			</div>
    );
  }
}

FirstLayer.propTypes = {
  classes: PropTypes.object.isRequired,
	hotel: PropTypes.bool.isRequired,
	link: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

export default withStyles(styles)(FirstLayer);