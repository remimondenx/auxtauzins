import { Grid, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import img_canard from '../images/food/canard.jpg';
import img_desserts from '../images/food/nos_desserts_V1.jpg';
import img_entrees from '../images/food/nos_entrees.jpg';
import img_poissons from '../images/food/nos_poissons.jpg';
import img_viandes from '../images/food/nos_viandes.jpg';
import img_sauces from '../images/food/plats_en_sauce.jpg';
import img_vins from '../images/food/vins.jpg';

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
  courseTitle: {
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  courseSubtitle: {
    textDecoration: 'underline',
    marginTop: '4px',
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
                                course.title ? (
                                  <Typography
                                    className={classes.courseTitle}
                                    color="secondary"
                                  >
                                    {course.title}
                                  </Typography>
                                ) : course.subtitle ? (
                                  <Typography
                                    className={classes.courseSubtitle}
                                    color="secondary"
                                  >
                                    {course.subtitle}
                                  </Typography>
                                ) : (
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
                                )
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
      price: 13,
    },
    {
      food: 'Salade Landaise',
      description:
        "Salade verte, pointes d'asperges, gésiers, magret fumé, foie gras",
      price: 25,
    },
    false,
    { food: 'Pâté de chevreuil maison', price: 11 },
    { food: 'Pâté de foie de canard maison', price: 15 },
    false,
    { food: 'Omelette aux cèpes', price: 18 },
  ],
};

const poissons = {
  id: 2,
  title: 'Nos poissons',
  titleDescription: 'provenance : port de Capbreton',
  img: img_poissons,
  content: [
    { food: 'Coquilles Saint-Jacques à la Provençale', price: 26 },
    { food: 'Chipirons à la plancha', price: 26 },
    { food: 'Sole meunière', price: 28 },
    { food: 'Fricassée de lotte et Saint-Jacques aux cèpes', price: 30 },
  ],
};

const canard = {
  id: 3,
  title: 'Les produits du canard',
  titleDescription: 'accompagnés de frites maison et légumes de saison',
  img: img_canard,
  content: [
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
    { food: 'Tranche de foie gras de canard', price: 22 },
    { food: "Tranche de foie gras d'oie", price: 26 },
    {
      food: 'Foie gras chaud',
      description: 'aux pommes ou aux raisins',
      price: 24,
    },
    { food: 'Escalope de foie poêlée aux cèpes', price: 30 },
  ],
};

const sauces = {
  id: 4,
  title: 'Nos plats en sauce',
  titleDescription: 'accompagnées de frites maison et de légumes de saison',
  img: img_sauces,
  content: [
    { food: 'Civet de gibier façon grand-mère', price: 18 },
    { food: 'Sauce de cèpes', price: 24 },
    { food: "Lamproie de l'Adour à la Bordelaise", price: 26 },
    { food: 'Ris de veau sauce financière', price: 25 },
  ],
};

const viandes = {
  id: 5,
  title: 'Nos viandes',
  titleDescription: 'accompagnées de frites maison et de légumes de saison',
  img: img_viandes,
  content: [
    {
      food: 'Escalope de veau',
      description: 'grillée ou à la crème',
      price: 18,
    },
    { food: 'Tournedos au poivre', price: 24 },
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
    { food: 'Salade de fruits frais', price: 8 },
    { food: 'La mousse au miel', description: 'production locale', price: 8 },
    { food: 'Le pot de crème', price: 8 },
    { food: 'Profiteroles Maison', price: 9 },
    false,
    {
      food: 'Sorbet au choix, 2 boules',
      description: 'poire, cassis, citron, fraise',
      price: 8,
    },
    {
      food: 'Glace au choix, 2 boules',
      description: 'café, chocolat, rhums raisins, pruneaux',
      price: 8,
    },
    false,
    { food: 'Coupe melba', price: 8 },
    { food: 'Café liégeois', price: 8 },
    { food: 'Chocolat liégeois', price: 8 },
    {
      food: 'Coupe William',
      description: 'sorbet poire, alcool de poire',
      price: 9,
    },
    {
      food: "Coupe d'Artagnan",
      description: 'glace pruneaux, pruneaux, armagnac et chantilly',
      price: 9,
    },
    false,
    { food: "L'assiette de fromages", price: 9 },
    {
      food: 'Café gascon',
      description: 'café, armagnac, crème fraîche',
      price: 9,
    },
    { food: 'Café gourmand', price: 9 },
    false,
    { food: 'Café et ses friandises', price: 2.8 },
    { food: 'Thé', description: 'vert, ceylan, noir', price: 4 },
    { food: 'Infusion verveine', description: 'production locale', price: 4 },
    { food: "Infusion de l'abbaye de Maylis", price: 4 },
  ],
};

const vins = {
  id: 7,
  title: 'Nos vins et spiritueux',
  img: img_vins,
  content: [
    { title: 'Verre de vin' },
    { food: 'Rouge du mois, 16cl', price: 5 },
    { food: 'Rosé du mois, 16cl', price: 5 },
    { food: 'Jurançon sec ou moelleux, 8cl', price: 5 },
    false,
    { title: 'Nos vins rouges' },
    { subtitle: 'AOC' },
    {
      food: 'Madiran, cuvée Vieux Ceps',
      price: 26,
      description: '1/2 bouteille 18€',
    },
    {
      food: 'Château Barréjat',
      price: 20,
      description: '1/2 bouteille 16€',
    },
    { food: 'St Nicolas de Bourgueil, rouge frais', price: 26 },
    { subtitle: 'Bordeaux' },
    { food: 'Château Cap Royal (2015)', price: 26 },
    { food: 'Château de Terrefort Quancard (2014)', price: 26 },
    { food: 'Château Vieux Liron (2016)', price: 26 },
    { food: 'Château Naudonnet Plaisance (2014)', price: 26 },
    {
      food: "Château Brun d'Espagne (2015)",
      price: 26,
      description: '1/2 bouteille (2016) 17€',
    },
    { subtitle: 'Bourgogne' },
    { food: 'Côte de Nuits (2016)', price: 45 },
    { subtitle: 'Graves' },
    { food: 'Château Bel Air Gallier (2012)', price: 33 },
    { subtitle: 'Lalande de Pomerol' },
    { food: 'Vieux Cardinal Lafaurie (2014)', price: 40 },
    { subtitle: 'Margaux' },
    { food: 'Château Mongravey (2014)', price: 40 },
    { food: 'Zede de Labegorce (2015)', price: 60 },
    { subtitle: 'Médoc et Haut-Médoc' },
    { food: 'Château Gravat Cru Bourgeois (2012)', price: 35 },
    { food: 'Château Donissan (2014)', price: 35 },
    { subtitle: 'Pauillac' },
    { food: 'La Fleur de Haut Bages Libéral (2014)', price: 58 },
    { food: 'Les Chevaliers de Dauprat (2014)', price: 55 },
    { subtitle: 'Pessac Léognan' },
    { food: 'Château Seguin (2016)', price: 50 },
    {
      food: 'L’Angelot de Seguin (2016)',
      price: 40,
      description: '1/2 bouteille 22€',
    },
    { subtitle: 'St Emilion' },
    { food: 'La Croix Fourche (2016)', price: 40 },
    { food: 'Château Grand Bert (2014)', price: 40 },
    {
      food: 'Château Patris Grand (2015)',
      price: 50,
      description: '1/2 bouteille 26€',
    },
    { food: 'Château Tertre De Calon, Montagne St Emilion (2015)', price: 30 },
    { food: 'Château de Beaulieu, Montagne de St Emilion (2015)', price: 32 },
    { subtitle: 'St Estephe' },
    { food: 'Château Ségur de Cabanac (2013)', price: 50 },
    { food: 'Les Hauts de Cabanac (2014)', price: 45 },
    { food: 'Les Hauts de Pez (2014)', price: 55 },
    { food: 'Cossieu Coutelin (2015)', price: 50 },
    { subtitle: 'St Julien' },
    { food: 'Château Teynac (2004)', price: 60 },
    { food: 'La Croix Dillanges (2015)', price: 65 },
    { subtitle: 'Pomerol' },
    { food: 'Château Le Moulin Basileus (2014)', price: 70 },
    { subtitle: 'Vins de pays' },
    { food: 'Chalosse', price: 15, description: '1/2 bouteille 11€' },
    { subtitle: 'VDQS' },
    { food: 'Tursan', price: 18 },
    { food: 'Tursan Impératrice, 50cl', price: 14 },
    false,
    { title: 'Nos vins blancs' },
    { subtitle: 'Alsace' },
    { food: 'Riesling', price: 28 },
    { food: 'Gewurztraminer', price: 28 },
    { subtitle: 'AOC' },
    { food: 'Sauternes', price: 41 },
    {
      food: 'Jurançon, sec ou moelleux',
      price: 29,
      description: '1/2 bouteille 20€',
    },
    { subtitle: 'Bourgogne' },
    { food: "Côte d'Auxerre (2009)", price: 35 },
    { subtitle: 'VDQS' },
    { food: 'Tursan', price: 18 },
    { food: 'Tursan Impératrice, 50cl', price: 14 },
    false,
    { title: 'Nos vins rosés' },
    { subtitle: 'AOC' },
    { food: 'Sélection de la maison', price: 25 },
    { subtitle: 'Vins de pays' },
    { food: 'Chalosse', price: 15, description: '1/2 bouteille 11€' },
    { subtitle: 'VDQS' },
    { food: 'Tursan', price: 18 },
    { food: 'Tursan Impératrice, 50cl', price: 14 },
    false,
    { title: 'Nos champagnes' },
    { food: 'Réserve de propriétaire brut', price: 55 },
    { food: 'Veuve Cheurlin Prestige brut', price: 65 },
    false,
    { title: 'Nos apéritifs' },
    { food: 'Cocktail de jus de fruit sans alcool, 10cl', price: 3 },
    { food: 'Cocktail de jus de fruit avec alcool, 10cl', price: 6 },
    { food: 'Pousse Rapière, 10cl', price: 8 },
    { food: 'Américano, 6l', price: 6.5 },
    { food: 'Floc de Gascogne, 5cl', price: 3.5 },
    { food: 'Kir sec, 10cl', price: 3.5 },
    { food: 'Kir pétillant, 10cl', price: 6.5 },
    { food: 'Kir Champagne, 10cl', price: 9 },
    { food: 'Jurançon fruité, 8cl', price: 5 },
    { food: 'Vin cuit, 2cl', price: 3.5 },
    { food: 'Ricard, 2cl', price: 3.5 },
    { food: 'Whisky, 4cl', price: 6 },
    false,
    { title: 'Eaux minérales' },
    { subtitle: 'Plate' },
    { food: 'Evian', price: 4 },
    { food: '1/2 Vittel', price: 3 },
    { food: 'Vittel', price: 4 },
    { subtitle: 'Gazeuse' },
    { food: '1/2 Badoit', price: 3 },
    { food: 'Badoit', price: 4 },
    { food: 'San Pellegrino', price: 4 },
  ],
};

const listLaCarte = [
  entrees,
  poissons,
  canard,
  sauces,
  viandes,
  desserts,
  vins,
];
