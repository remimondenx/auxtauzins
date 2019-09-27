import React from 'react'
import { withStyles, Grid, Typography } from "@material-ui/core";
import family_img from "../images/history/family.jpg";

const styles = {
  container: {
    textAlign: 'justify',
  },
  imgContainer: {
    padding: '40px 40px 20px 40px',
  },
  familyImg: {
    width: '100%',
  },
  textContainer: {
    padding: '20px 40px 40px 40px',
  },
  title: {
    fontWeight: 'bold',
  },
  line: {
    width: '100px',
    margin: '20px 0',
    borderBottom: '4px solid #01579b',
  }
}

const textRestaurant = <div>
    <Typography>Déjà 4 générations (depuis 1937) que notre cuisine tente de faire la part belle aux produits frais du terroir landais et poissons de l'Atlantique. Situé entre Dax et Mont-de-Marsan, notre établissement vous permettra de déguster une assiette de noix de Saint-Jacques ou un tournedos de boeuf tout en profitant d'une vue imprenable sur la Chalosse grâce à sa salle panoramique.</Typography>
    <Typography>En été, c'est sur notre terrasse ombragée par une magnifique glycine que nous vous ferons profiter d'une coupe de melon au jurançon ou d'un magret de canard sauce au poivre et ses légumes du jardin.</Typography>
    <Typography>Qu’il s’agisse d’un séjour prévu ou d’un passage impromptu, prenez le temps de vous arrêter découvrir les produits de notre région et partager un moment de détente et de convivialité.</Typography>
  </div>

const History = ({classes}) => 
  <Grid className={classes.container} container justifyContent='center' alignItems='center'>
    <Grid className={classes.imgContainer} item xs={12} sm={10} md={6}>
      <img className={classes.familyImg} src={family_img} alt='famille'/>
    </Grid>
    <Grid className={classes.textContainer} item sm={12} md={6}>
      <Typography className={classes.title} variant="h2" gutterBottom>Le restaurant</Typography>
      <div className={classes.line} />
      <div>{textRestaurant}</div>
    </Grid>
  </Grid>


export default withStyles(styles)(History)