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
            <Typography>
              Le restaurant vous accueille de 12H00 à 13H45 ainsi que de 19H30 à 21H00.
            </Typography>
            <Typography>
            Le restaurant est fermé le dimanche soir et le lundi toute la journée.
            </Typography>
            <Typography>
            En saison, du 11 juillet au 20 août, le restaurant est ouvert tous les jours.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography 
              className={classes.title} 
              style={{color:'#2196f3'}}
              gutterBottom>
              Nos services
            </Typography>
            <Typography>Connexion wifi dans tout l'établissement</Typography>
            <Typography>Chambre climatisée | TV Ecran plat | Sèche cheveux | Mini golf | 
              Babyfoot | Billard | Piscine | Parc pour balade | Parking privé sous surveillance |
              Garage à vélo
            </Typography>
            <Typography>Nous acceptons les chèques vacances.</Typography>
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
