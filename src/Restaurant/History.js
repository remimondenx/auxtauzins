import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import history from '../images/history/history.jpg';
import { isMobileOnly } from 'react-device-detect';
import LazyLoad from 'react-lazyload';

const styles = {
  root: {
    display: 'flex',
    padding: '60px 100px',
  },
  gridContainer: {
    padding: '60px',
  },
  description: {
    textAlign: 'justify',
    padding: '0 60px 60px 0',
  },
  descriptionMobile: {
    textAlign: 'justify',
    paddingBottom: '30px',
  },
  descriptionTitle: {
    fontWeight: 900,
    marginBottom: '20px',
    fontSize: '25px',
  },
  descriptionTitleMobile: {
    fontWeight: 900,
    marginBottom: '20px',
    fontSize: '13px',
  },
  underlinedTitle: {
    borderBottom: '4px solid #01579b',
    width: '100px',
    height: '0',
    marginBottom: '20px',
  },
  descriptionContent: {
    fontSize: '20px',
    lineHeight: '25px',
  },
  descriptionContentMobile: {
    fontSize: '12px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
};

const History = ({ classes }) => (
  <Grid className={classes.gridContainer} container>
    <Grid
      item
      xs={12}
      md={6}
      className={isMobileOnly ? classes.descriptionMobile : classes.description}
    >
      <div
        className={
          isMobileOnly
            ? classes.descriptionTitleMobile
            : classes.descriptionTitle
        }
      >
        Une histoire de famille
      </div>
      <div className={classes.underlinedTitle}></div>
      <div
        className={
          isMobileOnly
            ? classes.descriptionContentMobile
            : classes.descriptionContent
        }
      >
        Déjà 4 générations (depuis 1937) que notre cuisine tente de faire la
        part belle aux produits frais du terroir landais et poissons de
        l'Atlantique. Situé entre Dax et Mont-de-Marsan, notre établissement
        vous permettra de déguster une assiette de noix de Saint-Jacques ou un
        tournedos de boeuf tout en profitant d'une vue imprenable sur la
        Chalosse grâce à sa salle panoramique. En été, c'est sur notre terrasse
        ombragée par une magnifique glycine que nous vous ferons profiter d'une
        coupe de melon au jurançon ou d'un magret de canard sauce au poivre et
        ses légumes du jardin. Qu’il s’agisse d’un séjour prévu ou d’un passage
        impromptu, prenez le temps de vous arrêter découvrir les produits de
        notre région et partager un moment de détente et convivialité.
      </div>
    </Grid>
    <Grid item xs={12} md={6} className={classes.imageContainer}>
      <LazyLoad>
        <img src={history} className={classes.image} />
      </LazyLoad>
    </Grid>
  </Grid>
);

export default withStyles(styles)(History);
