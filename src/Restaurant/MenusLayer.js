import React, { Component } from 'react';

import RestaurantMenu from './RestaurantMenu';
import tournedos_landais from '../images/menus/tournedos_landais.jpg';

import { withStyles, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
  root: {
    backgroundColor: '#FFCA28',
    padding: '30px',
    textAlign: 'center',
  },
}

class MenusLayer extends Component {
  render() {
    const { classes } = this.props;
    return(
      <div className={classes.root}>
        <Typography variant='h2' gutterBottom>Nos menus</Typography>
        <Grid className={classes.menus} container>
          {listMenus.map(it =>
            <Grid item xs={12} sm={6} lg={3} key={it.content.name}>
             <RestaurantMenu content={it.content} imgs={it.imgs} />
            </Grid> 
            )}
        </Grid>
      </div>
    );
  }
}

MenusLayer.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenusLayer);

const terroir = {
  name: 'Menu du terroir',
  entree: 'Assiette du terroir / Garbure Landaise',
  plat: 'Coq fermier sauce Madiran / Brochette de coeurs de canard',
  dessert: 'Pâtisserie maison / Glace',
  prix: 26,
}

const chalossais = {
  name: 'Menu Chalossais',
  entree: 'Magret froid fourré au foie gras sur lit de salade',
  plat: 'Confit de canard Chalossais, pommes-frites',
  dessert: 'Assiette de sorbets',
  prix: 32,
}

const gourmand = {
  name: 'Menu Gourmand',
  entree: 'Poisson de la marée / Omelette aux cèpes',
  plat: 'Civet de gibier façon grand-mère / Magret de canard sauce au poivre',
  dessert: 'Coupe Melba',
  prix: 36,
}

const gastro = {
  name: 'Menu Gastronomique',
  entree: 'Salade de gésiers d\'oie',
  plat: 'Foie gras chaud aux raisins / Tournedos de boeuf',
  dessert: 'Coupe Melba',
  prix: 36,
}

const imgs_terroir = [
  {
    label: 'assiette terroir',
    imgPath:
    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const imgs_chalossais = [
  {
    label: 'salade landaise',
    imgPath:
    'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  }
];

const imgs_gourmand = [
  {
    label: 'coupe Melba',
    imgPath:
    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  }
];

const imgs_gastro = [
  {
    label: 'tournedos boeuf',
    imgPath:
      tournedos_landais
  },
];

const listMenus = [
  {
    content: terroir,
    imgs: imgs_terroir
  },
  {
    content: chalossais,
    imgs: imgs_chalossais,
  },
  {
    content: gourmand,
    imgs: imgs_gourmand,
  },
  {
    content: gastro,
    imgs: imgs_gastro,
  }
]