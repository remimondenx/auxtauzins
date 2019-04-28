import React, { Component } from 'react';

import tel_img from '../images/logos/tel.png';
import mail_img from '../images/logos/mail.png';
import position_img from '../images/logos/position.png';
import facebook from '../images/logos/facebook.png';
import instagram from '../images/logos/instagram.png';
import booking from '../images/logos/booking.png';
import logo_video from '../images/logos/video.png';
import logis from '../images/logos/logis.png';

import { withStyles, Typography, Grid, Button, Tooltip, Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';
import { isMobileOnly } from 'react-device-detect';

const styles = {
  backgroundColor: {
    backgroundColor: '#eceff1',
    margin: 0,
    padding: 0,
  },
  root: {
    margin: '30px 30px 0 30px',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1em',
    color: '#01579b'
  },
  margin: {
    textAlign: 'justify',
    margin: '10px',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    textTransform: 'none',
    textAlign: 'justify',
    fontStyle: 'normal',
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline'
    },
  },
  picto: {
    height: '15px',
    paddingRight: '10px'
  },
  socialMedia: {
		paddingTop: '20px',
  },
	imgLogis: {
    height: '60px',
    paddingTop: '20px',
  },
  copyright: {
    marginLeft: '10px',
    fontSize: '0.8em'
  }
}

class FooterHotel extends Component {
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
    const { classes } = this.props;
    return(
      <div className={classes.backgroundColor}>
        <div className={classes.root}>
          <Grid container spacing={32}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography 
                className={classes.title} 
                gutterBottom>
                About the hotel
              </Typography>
              <div className={classes.margin}>
                <ul style={{paddingLeft:0}}>
                  <li><Typography>The hotel is <strong>fully accessible to persons with disabilities</strong></Typography></li>
                  <li><Typography>Breakfast available for an extra cost of 9,50€</Typography></li>
                  <li><Typography>We accept pets for an extra cost of 8€</Typography></li>
                  <li><Typography><strong>Half-board</strong> 39€</Typography></li>
                  <li><Typography>Additional bed 20€</Typography></li>
                  <li><Typography>The hotel is closed on <strong>Sundays evening</strong> and on <strong>Mondays</strong></Typography></li>
                  <li><Typography><strong>From July 14 to August 20</strong>, the hotel is open every day</Typography></li>
                </ul>
              </div>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
              <Typography 
                className={classes.title} 
                gutterBottom>
                Our services
              </Typography>
              <div className={classes.margin}>
                <ul style={{paddingLeft:0}}>
                  <li><Typography>Free <strong>Wifi</strong> connection in the hotel</Typography></li>
                  <li><Typography><strong>Air conditioned</strong> | Flat screen TV | Chamber hairdryer</Typography></li>
                  <li><Typography><strong>Swimming pool</strong> | Minigolf</Typography></li>
                  <li><Typography>Babyfoot | Ping Pong | Billiard</Typography></li>
                  <li><Typography>Park</Typography></li>
                  <li><Typography><strong>Parking</strong> with supervision | Cycling garage</Typography></li>
                </ul>
              </div>
            </Grid>

            <Grid className={classes.contact} id='contact' item xs={12} sm={12} md={4}>
              <Typography 
                className={classes.title} 
                gutterBottom>
                Reach us
              </Typography>
              <Button className={classes.button} href="tel:0558986022">
                <img className={classes.picto} src={tel_img} alt='tel' />05 58 98 60 22
              </Button>
              <Button className={classes.button} href="mailto:resa@auxtauzins.com">
                <img className={classes.picto} src={mail_img} alt='mail' />resa@auxtauzins.com
              </Button>
              <Button className={classes.button} target='_blank' rel="noopener noreferrer" href="https://www.google.com/maps/place/hotel+restaurant+AUX+TAUZINS/@43.709234,-0.8244906,18z/data=!3m1!4b1!4m5!3m4!1s0xd569bf8e0c594bf:0xdf3569df98d76aa8!8m2!3d43.709234!4d-0.8233963">
                <img className={classes.picto} src={position_img} alt='position' />547 route Raphael Lonné 40380, Montfort-en-Chalosse
              </Button>
            </Grid>
          </Grid>
          { isMobileOnly &&
            <div>
              <div className={classes.socialMedia}>
                <a href='https://www.facebook.com/auxtauzins' target='_blank' rel="noopener noreferrer">
                  <img style={{height:'40px', paddingRight:'10px'}} src={facebook} alt='Logo Facebook' />
                </a>
                <a href='https://www.instagram.com/auxtauzins/' target='_blank' rel="noopener noreferrer">
                  <img style={{height:'40px', paddingRight:'10px'}} src={instagram} alt='Logo Instagram' />
                </a>
                <a href='https://www.booking.com/hotel/fr/aux-tauzins-montfort.fr.html' target='_blank' rel="noopener noreferrer">
                  <img style={{height:'40px', paddingRight: '10px'}} src={booking} alt='Logo Booking' />
                </a>
                <Tooltip title="Visionnez la vidéo de l'établissement">
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
              <div>
                <a href='https://www.logishotels.com/fr' target='_blank' rel="noopener noreferrer">
                  <img className={classes.imgLogis} src={logis} alt='logis hotel' />
                </a>
              </div>
            </div>
          }
        </div>
        <Typography className={classes.copyright} variant='body1'>©Rémi Mondenx</Typography>
      </div>
    );
  }
}

FooterHotel.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FooterHotel);
