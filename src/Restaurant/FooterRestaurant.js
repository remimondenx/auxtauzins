import React, { Component } from 'react';

import tel_img from '../images/logos/tel.png';
import mail_img from '../images/logos/mail.png';
import position_img from '../images/logos/position.png';

import { withStyles, Typography, Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  root: {
    margin: '30px',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    textAlign: 'justify',
  },
  contact: {
    display: 'flex',
    flexDirection: 'column'
  },
  noCap: {
    textTransform: 'none',
    textAlign: 'justify'
  },
  picto: {
    height: '15px',
    paddingRight: '10px'
  },
}

class FooterRestaurant extends Component {
  render() {
    const { classes } = this.props;
    return(
			<div className={classes.root} id='contact'>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              className={classes.title} 
              style={{color:'red'}}
              gutterBottom>
              A propos
            </Typography>
            <Typography className={classes.content}>
              <ul>
                <li>Le restaurant vous accueille de 12h00 à 13h45 ainsi que de 19h30 à 21h00.</li>
                <li>Le restaurant est fermé le <strong>dimanche soir</strong> et le <strong>lundi toute la journée</strong>.</li>
                <li>En saison, <strong>du 11 juillet au 20 août</strong>, le restaurant est ouvert tous les jours.</li>
                <li>Le restaurant est <strong>entièrement accessible aux personnes à mobilité réduite</strong>.</li>
                <li>Chèque vacances acceptés</li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              className={classes.title} 
              style={{color:'#2196f3'}}
              gutterBottom>
              Nos services
            </Typography>
            <Typography className={classes.content}>
              <ul>
                <li>Connexion <strong>wifi</strong> disponible.</li>
                <li>Possibilité de <strong>privatiser</strong> salle de réunion ou salon.</li>
                <li>Organisation de baptêmes, communions, anniversaires.</li>
              </ul>
            </Typography>
          </Grid>

          <Grid className={classes.contact} item xs={12} sm={12} md={4}>
            <Typography 
              className={classes.title} 
              style={{color:'#ffc107'}}
              gutterBottom>
              Nous contacter
            </Typography>
            <Button href="tel:0558986022">
              <img className={classes.picto} src={tel_img} alt='tel' />05 58 98 60 22
            </Button>
            <Button className={classes.noCap} href="mailto:auxtauzins@wanadoo.fr">
              <img className={classes.picto} src={mail_img} alt='mail' />auxtauzins@wanadoo.fr
            </Button>
            <Button className={classes.noCap} href="https://www.google.com/maps/place/hotel+restaurant+AUX+TAUZINS/@43.709234,-0.8244906,18z/data=!3m1!4b1!4m5!3m4!1s0xd569bf8e0c594bf:0xdf3569df98d76aa8!8m2!3d43.709234!4d-0.8233963">
              <img className={classes.picto} src={position_img} alt='position' />486 route Raphael Lonné 40380, Montfort-en-Chalosse
            </Button>
          </Grid>
        </Grid>
			</div>
    );
  }
}

FooterRestaurant.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FooterRestaurant);
