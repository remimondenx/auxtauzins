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
    margin: '10px',
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

class FooterHotel extends Component {
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
              <ul style={{paddingLeft:0}}>
                <li>Le restaurant est <strong>entièrement accessible aux personnes à mobilité réduite</strong>.</li>
                <li>Petit-déjeuner 9€</li>
                <li>Animal domestique accepté 8€</li>
                <li><strong>Demi-pension</strong> 39€ (par personne et par jour en supplément de la chambre)</li>
                <li>Compter 20€ par personne et nuitée supplémentaire</li>
                <li>L'hôtel est fermé le <strong>dimanche soir</strong> et le <strong>lundi toute la journée</strong></li>
                <li>En saison, <strong>du 11 juillet au 20 août</strong>, l'hôtel est ouvert tous les jours</li>
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
              <ul style={{paddingLeft:0}}>
                <li>Connexion <strong>wifi</strong> dans tout l'hôtel</li>
                <li>Chambre <strong>climatisée</strong> | TV Ecran plat | Sèche-cheveux</li>
                <li><strong>Piscine</strong> | Mini-golf</li>
                <li>Babyfoot | Ping Pong | Billard</li>
                <li>Parc pour balade</li>
                <li><strong>Parking privé</strong> sous surveillance | Garage à vélo</li>
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

FooterHotel.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FooterHotel);
