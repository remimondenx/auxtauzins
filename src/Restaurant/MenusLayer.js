import React, { Component } from 'react';

import RestaurantMenu from './RestaurantMenu';

import img_terroir from '../images/food/assiette_du_terroir_menu1_V3.JPG';
import img_chalossais from '../images/food/confit_de_canard_menu2_V2.JPG';
import img_gourmand from '../images/food/magret_de_canard_menu3_V1.JPG';
import img_gastro from '../images/food/foie_gras_chaud_aux_raisins_menu4.JPG';

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
  entree: 'Assiette du terroir',
  entree2: 'Garbure Landaise',
  plat: 'Coq fermier sauce Madiran',
  plat2: 'Brochette de coeurs de canard',
  dessert: 'Pâtisserie maison',
  dessert2: 'Glace',
  prix: 26,
}

const chalossais = {
  name: 'Menu Chalossais',
  entree: 'Magret froid fourré au foie gras sur lit de salade',
  plat: 'Confit de canard Chalossais, pommes frites',
  dessert: 'Assiette de sorbets',
  prix: 32,
}

const gourmand = {
  name: 'Menu Gourmand',
  entree: 'Poisson de la marée',
  entree2: 'Omelette aux cèpes',
  plat: 'Civet de gibier',
  plat2: 'Magret de canard sauce au poivre',
  dessert: 'Coupe Melba',
  prix: 36,
}

const gastro = {
  name: 'Menu Gastronomique',
  entree: 'Salade de gésiers d\'oie',
  plat: 'Foie gras chaud aux raisins',
  apresPlat: 'Tournedos de boeuf',
  dessert: 'Coupe d\'Artagnan',
  prix: 45,
}

const imgs_terroir = [
  {
    label: 'assiette_terroir',
    imgPath: img_terroir,
  },
];

const imgs_chalossais = [
  {
    label: 'salade landaise',
    imgPath: img_chalossais,
  }
];

const imgs_gourmand = [
  {
    label: 'coupe Melba',
    imgPath: img_gourmand,
  }
];

const imgs_gastro = [
  {
    label: 'tournedos boeuf',
    imgPath: img_gastro,
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