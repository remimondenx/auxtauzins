import React, { Component } from 'react';

import img_entrees from '../images/carte/nos_entrees.JPG';
import img_poissons from '../images/carte/nos_poissons.JPG';
import img_canard from '../images/food/coeurs_de_canard_menu1_V2.JPG'; // TODO
import img_sauces from '../images/carte/plats_en_sauce.JPG';
import img_viandes from '../images/carte/nos_viandes.JPG';
import img_desserts from '../images/carte/nos_desserts_V1.JPG';

import { withStyles, Typography, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

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
  },
  carteElt: {
    height: '300px',
  },
  backgroundImage: {
    height: '100%',
    backgroundSize: 'cover',
		backgroundPosition: 'center',
    overflow: 'hidden',
    border: '1px grey solid',
    borderRadius: '20px',
    boxShadow: '0 2px 4px #000000',
    display: 'flex',
  },
  darkBand: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '40px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'flex-end'
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
}

class LaCarteLayer extends Component {
  state= {
    open: 0
  }

  handleEvent= id => {
    this.setState({open: id});
  }


  render() {
    const { classes } = this.props;
    return(
			<div className={classes.root}>
        <Typography className={classes.title} variant='h2'>
          La carte
        </Typography>
        <Grid className={classes.gridList} spacing={16} container>
          {listLaCarte.map(it =>
            <Grid onClick={() => this.handleEvent(it.id)}
              className={classes.carteElt}
              key={it.id}
              item xs={12} sm={6}>
              <div className={classes.backgroundImage} style={{backgroundImage:`url(${it.img})`}}>
                {!(this.state.open===it.id) && 
                  <div className={classes.darkBand}>
                    <Typography className={classes.titleCarteElt} color='secondary'>{it.title}</Typography>
                  </div>
                }
                {this.state.open===it.id &&
                  <div className={classes.darkImage}>
                    <Typography variant='h5' color='primary' style={{fontWeight:'bold'}} gutterBottom>
                      {it.title}
                    </Typography>
                    <table>
                      {it.content.map(course =>
                        <tr>
                          <th><Typography className={classes.food} color='secondary'>{course.food}</Typography></th>
                          <th>
                            <div style={{fontFamily:'Nunito', color:'#4CAF50', fontSize:'0.7em'}}>
                              {course.price}€
                            </div>
                          </th>
                        </tr>
                      )}
                    </table>
                  </div>
                }
              </div>
            </Grid>     
          )}
        </Grid>
      </div>
    );
  }
}

LaCarteLayer.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LaCarteLayer);

const entrees = {
  id: 1,
  title: 'Nos entrées',
  img: img_entrees,
  content: [
    {food: 'Salade verte', price: 6},
    {food: 'Salade composée (Salade verte, tomates, oignons, pointes d\'asperges)', price: 12},
    {food: 'Garbure landaise', price: 13},
    {food: 'Soupe de poissons', price: 13},
    {food: 'Pâté de porc maison', price: 10},
    {food: 'Pâté de chevreuil maison', price: 10},
    {food: 'Jambon du pays', price: 15},
    {food: 'Assiette de charcuterie maison', price: 15},
    {food: 'Omelette au jambon', price: 14},
    {food: 'Omelette au fromage', price: 14},
    {food: 'Omelette aux cèpes', price: 18},
  ]
}

const poissons = {
  id: 2,
  title: 'Nos poissons',
  img: img_poissons,
  content: [
    {food: 'Beignets de lotte aux petits légumes', price: 25},
    {food: 'Coquilles Saint-Jacques à la Provinçale', price: 26},
    {food: 'Feuilleté de Saint-Jacques sur lit de poireaux', price: 26},
    {food: 'Sole meunière', price: 28},
    {food: 'Fricassée de lotte de Saint-Jacques aux cèpes', price: 30},
  ]
}

const canard = {
  id: 3,
  title: 'Les produits du canard',
  img: img_canard,
  content: [
    {food: 'Pâté de foie de canard maison', price: 15},
    {food: 'Magret froid fourré au foie gras', price: 24},
    {food: 'Salade Landaise (salade verte, pointes d\'asperges, gésiers, magret fumé, foie gras)', price: 25},
    {food: 'Tranche de foie gras de canard', price: 24},
    {food: 'Foie gras chaud aux pommes ou aux raisins', price: 25},
    {food: 'Escalopes de foie poêlées aux cèpes', price: 30},
  ]
}

const sauces = {
  id: 4,
  title: 'Nos plats en sauce',
  img: img_sauces,
  content: [
    {food: 'Civet de gibier façon grand-mère', price: 18},
    {food: 'Sauce de cèpes', price: 24},
    {food: 'Salmis de palombe', price: 24},
    {food: 'Lamproie de l\'Adour à la Bordelaise', price: 24},
    {food: 'Ris de veau sauce financière', price: 25},
    {food: 'Tête de veau sauce gribiche', price: 18},
  ]
}

const viandes = {
  id: 5,
  title: 'Nos viandes',
  img: img_viandes,
  content: [
    {food: 'Confit de porc', price: 16},
    {food: 'Confit de canard "la cuisse"', price: 18},
    {food: 'Confit de canard "l\'aile"', price: 24},
    {food: 'Confit d\'oie "la cuisse"', price: 20},
    {food: 'Confit d\'oie "l\'aile"', price: 26},
    {food: 'Brochette de coeurs de canard', price: 19},
    {food: 'Magret de canard grillé ou sauce au poivre vert', price: 20},
    {food: 'Escalope de veau grillée ou à la crème', price: 20},
    {food: 'Ris d\'agneau aux cèpes', price: 30},
    {food: 'Tournedos au poivre', price: 24},
    {food: 'Faux-filet de boeuf blonde d\'Aquitaine', price: 28},
    {food: 'Tournedos Landais (avec foie et cèpes)', price: 30},
    {food: 'Portion de légumes supplémentaire', price: 5},
  ]
}

const desserts = {
  id: 6,
  title: 'Nos desserts',
  img: img_desserts,
  content: [
    {food: 'Les pâtisseries maison', price: 8},
    {food: 'L\'assiette de fromage', price: 9},
    {food: 'Le pot de crème', price: 8},
    {food: 'La mousse glâcée au Grand Marnier et son petit verre de liqueur', price: 9},
    {food: 'Les profiteroles Maison', price: 9},
    {food: 'Les sorbets au choix (2 boules : poire, cassis, citron, mandarine)', price: 8},
    {food: 'La coupe melba', price: 8},
    {food: 'Le café liégeois', price: 8},
    {food: 'Le chocolat liégeois', price: 8},
    {food: 'Les glaces 2 boules au choix (vanille, café, chocolat, pistache, fraise, rhums raisins, pruneaux)', price: 8},
    {food: 'La coupe cardinale (sorbet cassis, crème de cassis)', price: 8},
    {food: 'La coupe colonel (sorbet citron, vodka)', price: 9},
    {food: 'La coupe williamine (sorbet poire, alcool de poire)', price: 9},
    {food: 'La coupe d\'Artagnan (glace pruneaux, pruneaux, armagnac et chantilly)', price: 9},
    {food: 'Le cappuccino', price: 6},
    {food: 'Le café gourmand', price: 9},
    {food: 'Le café et ses friandises', price: 2.80},
    {food: 'Infusions ou thé', price: 4},
  ]
}

const listLaCarte = [entrees, poissons, canard, sauces, viandes, desserts]



/*
<GridListTile className={classes.tile} key={it.title}>
              <img src={it.img} alt={it.title} />
              <GridListTileBar
                title={it.title}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
*/