import React, { Component } from 'react';

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
  mail: {
    textTransform: 'none',
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
              <ul>
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
              <ul>
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
            <Typography>Pour tout évènement :</Typography>
            <Typography>- Réservation de salle</Typography>
            <Typography>- Communion</Typography>
            <Typography>- Baptême</Typography>
            <Typography gutterBottom>- Anniveraire</Typography>
            <Button href="tel:0558986022">05 58 98 60 22</Button>
            <Button className={classes.mail} href="mailto:auxtauzins@wanadoo.fr">auxtauzins@wanadoo.fr</Button>
            <Typography>486 route Raphael Lonné, 40380, Montfort-en-Chalosse</Typography>
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
