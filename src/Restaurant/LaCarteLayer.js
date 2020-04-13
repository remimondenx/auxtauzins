import { Grid, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import img_canard from '../images/food/canard.png';
import img_desserts from '../images/food/nos_desserts_V1.jpg';
import img_entrees from '../images/food/nos_entrees.jpg';
import img_poissons from '../images/food/nos_poissons.jpg';
import img_viandes from '../images/food/nos_viandes.jpg';
import img_sauces from '../images/food/plats_en_sauce.jpg';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    padding: '10px',
    textAlign: 'center',
  },
  gridList: {
    padding: '20px',
    maxWidth: '1000px',
  },
  carteElt: {
    height: '300px',
    padding: '20px',
  },
  flex: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    maxWidth: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    border: '1px grey solid',
    borderRadius: '20px',
    boxShadow: '0 2px 4px #000000',
    display: 'flex',
    cursor: 'pointer',
  },
  darkBand: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '40px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  titleCarteElt: {
    padding: '10px',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
  darkImage: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '20px',
    width: '100%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
  },
  table: {
    width: '100%',
  },
  titleMenu: {
    padding: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: '30px',
  },
  titleDescription: {
    textAlign: 'left',
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: '0.9em',
    width: '100%',
  },
  foodContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  food: {
    textAlign: 'left',
  },
  description: {
    paddingLeft: '10px',
    fontSize: '0.7em',
    lineHeight: '2em',
    textAlign: 'left',
  },
  price: {
    fontFamily: 'Nunito',
    color: '#4CAF50',
    fontWeight: 'bold',
    fontSize: '0.9em',
  },
  separator: {
    textAlign: 'center',
    color: 'white',
    tewtWeight: 'bold',
  },
};

class LaCarteLayer extends Component {
  state = {
    open: 0,
  };

  handleEvent = (id) => {
    this.setState({ open: id });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h3">
          La carte
        </Typography>
        <Grid className={classes.gridList} container>
          {listLaCarte.map((it) => (
            <Grid
              className={classes.carteElt}
              key={it.id}
              onClick={() => this.handleEvent(it.id)}
              item
              xs={12}
              sm={6}
            >
              <div className={classes.flex}>
                <LazyLoad height={300}>
                  <div
                    className={classes.backgroundImage}
                    style={{ backgroundImage: `url(${it.img})` }}
                  >
                    {!(this.state.open === it.id) && (
                      <div className={classes.darkBand}>
                        <Typography
                          className={classes.titleCarteElt}
                          color="secondary"
                        >
                          {it.title}
                        </Typography>
                      </div>
                    )}
                    {this.state.open === it.id && (
                      <div className={classes.darkImage}>
                        {(it.titleDescription && (
                          <div style={{ width: '100%' }}>
                            <Typography
                              className={classes.titleMenu}
                              variant="h5"
                              color="secondary"
                            >
                              {it.title}
                            </Typography>
                            <Typography
                              className={classes.titleDescription}
                              variant="h5"
                              color="secondary"
                              gutterBottom
                            >
                              {it.titleDescription}
                            </Typography>
                          </div>
                        )) || (
                          <Typography
                            className={classes.titleMenu}
                            variant="h5"
                            color="secondary"
                            gutterBottom
                          >
                            {it.title}
                          </Typography>
                        )}
                        <table className={classes.table}>
                          <tbody>
                            {it.content.map((course, index) =>
                              course ? (
                                <tr key={course.food}>
                                  <th className={classes.foodContainer}>
                                    <Typography
                                      className={classes.food}
                                      color="secondary"
                                    >
                                      {course.food}
                                    </Typography>
                                    {course.description && (
                                      <Typography
                                        className={classes.description}
                                        color="secondary"
                                      >
                                        {course.description}
                                      </Typography>
                                    )}
                                  </th>
                                  <th>
                                    <div className={classes.price}>
                                      {course.price}€
                                    </div>
                                  </th>
                                </tr>
                              ) : (
                                <tr
                                  className={classes.separator}
                                  key={`separator${index}`}
                                >
                                  <th>
                                    <div>~</div>
                                  </th>
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </LazyLoad>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

LaCarteLayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LaCarteLayer);

const entrees = {
  id: 1,
  title: 'Nos entrées',
  img: img_entrees,
  content: [
    {
      food: 'Salade composée',
      description: "Salade verte, tomates, oignons, pointes d'asperges",
      price: 12,
    },
    {
      food: 'Salade Landaise',
      description:
        "Salade verte, pointes d'asperges, gésiers, magret fumé, foie gras",
      price: 25,
    },
    false,
    { food: 'Garbure Landaise', price: 13 },
    { food: 'Soupe de poissons', price: 13 },
    false,
    { food: 'Pâté de porc maison', price: 10 },
    { food: 'Pâté de chevreuil maison', price: 10 },
    false,
    { food: 'Jambon du pays', price: 15 },
    { food: 'Assiette de charcuterie maison', price: 15 },
    false,
    { food: 'Omelette au jambon', price: 14 },
    { food: 'Omelette au fromage', price: 14 },
    { food: 'Omelette aux cèpes', price: 18 },
  ],
};

const poissons = {
  id: 2,
  title: 'Nos poissons',
  titleDescription: 'provenance : port de Capbreton',
  img: img_poissons,
  content: [
    { food: 'Beignets de lotte aux petits légumes', price: 25 },
    { food: 'Coquilles Saint-Jacques à la Provençale', price: 26 },
    { food: 'Feuilleté de Saint-Jacques sur lit de poireaux', price: 26 },
    { food: 'Sole meunière', price: 28 },
    { food: 'Fricassée de lotte et Saint-Jacques aux cèpes', price: 30 },
  ],
};

const canard = {
  id: 3,
  title: 'Les produits du canard',
  titleDescription: 'accompagnés de frites maisons et légumes de saison',
  img: img_canard,
  content: [
    { food: 'Brochette de coeurs de canard', price: 19 },
    { food: 'Magret froid fourré au foie gras', price: 24 },
    false,
    { food: 'Confit de canard "la cuisse"', price: 18 },
    { food: 'Confit de canard "l\'aile"', price: 24 },
    { food: 'Confit d\'oie "la cuisse"', price: 20 },
    { food: 'Confit d\'oie "l\'aile"', price: 26 },
    false,
    {
      food: 'Magret de canard',
      description: 'grillé ou sauce au poivre vert',
      price: 20,
    },
    { food: 'Tranche de foie gras de canard', price: 24 },
    {
      food: 'Foie gras chaud',
      description: 'aux pommes ou aux raisins',
      price: 25,
    },
    { food: 'Escalopes de foie poêlées aux cèpes', price: 30 },
  ],
};

const sauces = {
  id: 4,
  title: 'Nos plats en sauce',
  img: img_sauces,
  content: [
    { food: 'Civet de gibier façon grand-mère', price: 18 },
    { food: 'Tête de veau sauce gribiche', price: 18 },
    { food: 'Sauce de cèpes', price: 24 },
    { food: 'Salmis de palombe', price: 24 },
    { food: "Lamproie de l'Adour à la Bordelaise", price: 24 },
    { food: 'Ris de veau sauce financière', price: 25 },
  ],
};

const viandes = {
  id: 5,
  title: 'Nos viandes',
  titleDescription: 'accompagnées de frites maison et de légumes de saison',
  img: img_viandes,
  content: [
    { food: 'Confit de porc', price: 16 },
    {
      food: 'Escalope de veau',
      description: 'grillée ou à la crème',
      price: 20,
    },
    { food: 'Tournedos au poivre', price: 24 },
    { food: "Faux-filet de boeuf blonde d'Aquitaine", price: 28 },
    { food: "Ris d'agneau aux cèpes", price: 30 },
    { food: 'Tournedos Landais', description: 'foie gras et cèpes', price: 30 },
    false,
    { food: 'Portion de légumes supplémentaire', price: 5 },
  ],
};

const desserts = {
  id: 6,
  title: 'Nos desserts',
  img: img_desserts,
  content: [
    { food: 'Pâtisseries maison', price: 8 },
    { food: 'Le pot de crème', price: 8 },
    { food: 'Assiette de fromage', price: 9 },
    {
      food: 'Mousse glâcée au Grand Marnier',
      description: 'petit verre de liqueur',
      price: 9,
    },
    { food: 'Profiteroles Maison', price: 9 },
    false,
    {
      food: 'Sorbet au choix, 2 boules',
      description: 'poire, cassis, citron, mandarine',
      price: 8,
    },
    {
      food: 'Glace au choix, 2 boules',
      description:
        'vanille, café, chocolat, pistache, fraise, rhums raisins, pruneaux',
      price: 8,
    },
    false,
    { food: 'Coupe melba', price: 8 },
    { food: 'Café liégeois', price: 8 },
    { food: 'Chocolat liégeois', price: 8 },
    {
      food: 'Coupe cardinale',
      description: 'sorbet cassis, crème de cassis',
      price: 8,
    },
    { food: 'Coupe colonel', description: 'sorbet citron, vodka', price: 9 },
    {
      food: 'Coupe williamine',
      description: 'sorbet poire, alcool de poire',
      price: 9,
    },
    {
      food: "Coupe d'Artagnan",
      description: 'glace pruneaux, pruneaux, armagnac et chantilly',
      price: 9,
    },
    false,
    { food: 'Café', price: 2.8 },
    { food: 'Infusions ou thé', price: 4 },
    { food: 'Cappuccino', price: 6 },
    { food: 'Café gourmand', price: 9 },
  ],
};

const listLaCarte = [entrees, poissons, canard, sauces, viandes, desserts];
