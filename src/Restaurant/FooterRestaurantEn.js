import {
  Button,
  Dialog,
  Grid,
  Tooltip,
  Typography,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import facebook from '../images/logos/facebook.png';
import instagram from '../images/logos/instagram.png';
import mail_img from '../images/logos/mail.png';
import position_img from '../images/logos/position.png';
import restaurantGourmand from '../images/logos/restaurant_gourmand.png';
import tel_img from '../images/logos/tel.png';
import tripadvisor from '../images/logos/tripadvisor.png';
import logo_video from '../images/logos/video.png';
import velo from '../images/logos/velo.png';

const styles = {
  backgroundColor: {
    backgroundColor: '#eceff1',
  },
  root: {
    margin: '30px 30px 0 30px',
    textAlign: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: '1.1em',
    color: '#01579b',
  },
  margin: {
    textAlign: 'justify',
    margin: '10px',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    textTransform: 'none',
    textAlign: 'justify',
    fontStyle: 'normal',
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  },
  picto: {
    height: '15px',
    paddingRight: '10px',
  },
  socialMedia: {
    paddingTop: '20px',
  },
  imgLogis: {
    height: '40px',
    paddingTop: '20px',
    marginBottom: '20px',
  },
  copyright: {
    marginLeft: '10px',
    fontSize: '0.8em',
  },
  velo: {
    height: '70px',
  },
};

class FooterRestaurant extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backgroundColor}>
        <div className={classes.root}>
          <Grid container spacing={32}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.title} gutterBottom>
                About the restaurant
              </Typography>
              <div className={classes.margin}>
                <ul style={{ paddingLeft: 0 }}>
                  <li>
                    <Typography>
                      The restaurant welcomes you from midday to 1:45pm and from
                      7:30pm to 9pm
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Restaurant closed on <strong>Fridays</strong> (except
                      group booking), on <strong>Sundays' dinner</strong> and on{' '}
                      <strong>Mondays</strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      From <strong>July 11 to August 20</strong>, the restaurant
                      is open every day (except Monday lunch)
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      The restaurant is{' '}
                      <strong>
                        fully accessible to persons with disabilities
                      </strong>
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      Holliday and luncheon vouchers accepted
                    </Typography>
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography className={classes.title} gutterBottom>
                Our services
              </Typography>
              <div className={classes.margin}>
                <ul style={{ paddingLeft: 0 }}>
                  <li>
                    <Typography>
                      Free <strong>Wifi</strong> connection in the restaurant
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                      You can book the restaurant for birthdays, weddings,
                      workshops…
                    </Typography>
                  </li>
                </ul>
              </div>
              <a
                href="https://www.francevelotourisme.com/accueil-velo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={classes.velo}
                  src={velo}
                  alt="velo disponible"
                />
              </a>
            </Grid>

            <Grid
              className={classes.contact}
              id="contact"
              item
              xs={12}
              sm={12}
              md={4}
            >
              <Typography className={classes.title} gutterBottom>
                Reach us
              </Typography>
              <Button className={classes.button} href="tel:0558986022">
                <img className={classes.picto} src={tel_img} alt="tel" />
                05 58 98 60 22
              </Button>
              <Button
                className={classes.button}
                href="mailto:resa@auxtauzins.com"
              >
                <img className={classes.picto} src={mail_img} alt="mail" />
                resa@auxtauzins.com
              </Button>
              <Button
                className={classes.button}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/hotel+restaurant+AUX+TAUZINS/@43.709234,-0.8244906,18z/data=!3m1!4b1!4m5!3m4!1s0xd569bf8e0c594bf:0xdf3569df98d76aa8!8m2!3d43.709234!4d-0.8233963"
              >
                <img
                  className={classes.picto}
                  src={position_img}
                  alt="position"
                />
                547 route Raphael Lonné 40380, Montfort-en-Chalosse
              </Button>
            </Grid>
          </Grid>
          {isMobileOnly && (
            <div>
              <div className={classes.socialMedia}>
                <a
                  href="https://www.facebook.com/auxtauzins"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ height: '40px', paddingRight: '10px' }}
                    src={facebook}
                    alt="Logo Facebook"
                  />
                </a>
                <a
                  href="https://www.instagram.com/auxtauzins/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ height: '40px', paddingRight: '10px' }}
                    src={instagram}
                    alt="Logo Instagram"
                  />
                </a>
                <a
                  href="https://www.tripadvisor.fr/Restaurant_Review-g2068609-d3978484-Reviews-Aux_Tauzins-Montfort_en_Chalosse_Landes_Nouvelle_Aquitaine.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ height: '40px', paddingRight: '10px' }}
                    src={tripadvisor}
                    alt="Logo Tripadvisor"
                  />
                </a>
                <Tooltip title="Visionnez la vidéo de l'établissement">
                  <img
                    src={logo_video}
                    alt="logo video"
                    onClick={this.handleOpen}
                    style={{ height: '40px' }}
                  />
                </Tooltip>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                  <iframe
                    title="presentation"
                    src="https://player.vimeo.com/video/138057164?title=0&byline=0&portrait=0"
                    width="600"
                    height="338"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  />
                </Dialog>
              </div>
              <div>
                <a
                  href="https://www.logishotels.com/fr/hotel/logis-hotel-aux-tauzins-1516"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={classes.imgLogis}
                    src={restaurantGourmand}
                    alt="logis hotel"
                  />
                </a>
              </div>
            </div>
          )}
        </div>
        <Typography className={classes.copyright} variant="body1">
          ©Rémi Mondenx
        </Typography>
      </div>
    );
  }
}

FooterRestaurant.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterRestaurant);
