import React, { Component } from 'react';

import RestaurantMenu from './RestaurantMenu';

import img_assiette from '../images/food/assiette_du_terroir_menu1_V3.JPG';
import img_coeurs_canard from '../images/food/coeurs_de_canard_menu1_V2.JPG';
import img_patisseries from '../images/food/patisseries_maison_menu1_V1.JPG';
import img_confit from '../images/food/confit_de_canard_menu2_V2.JPG';
import img_magret_froid from '../images/food/magret_froid_fourre_menu2_V3.JPG';
import img_sorbets from '../images/food/assiette_de_sorbets_menu2_V2.JPG';
import img_magret from '../images/food/magret_de_canard_menu3_V1.JPG';
import img_omelette from '../images/food/omelette_aux_cepes_menu3.JPG';
import img_foie_gras_chaud from '../images/food/foie_gras_chaud_aux_raisins_menu4.JPG';
import img_tournedos from '../images/food/tournedos_de_boeuf_menu4_V2.JPG';
import img_artagnan from '../images/food/coupe_artagnan_menu4.JPG';

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
    imgPath: img_assiette,
  },
  {
    label: 'coeurs de canard',
    imgPath: img_coeurs_canard,
  },
  {
    label: 'patisseries',
    imgPath: img_patisseries,
  },
];

const imgs_chalossais = [
  {
    label: 'salade landaise',
    imgPath: img_confit,
  },
  {
    label: 'magret froid fourré au foie gras',
    imgPath: img_magret_froid,
  },
  {
    label: 'assiette de sorbets',
    imgPath: img_sorbets,
  },
];

const imgs_gourmand = [
  {
    label: 'magret',
    imgPath: img_magret,
  },
  {
    label: 'omelette aux cèpes',
    imgPath: img_omelette,
  },
];

const imgs_gastro = [
  {
    label: 'tournedos boeuf',
    imgPath: img_tournedos,
  },
  {
    label: 'foie gras chaud',
    imgPath: img_foie_gras_chaud,
  },
  {
    label: 'coupe d\'artagnan',
    imgPath: img_artagnan,
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