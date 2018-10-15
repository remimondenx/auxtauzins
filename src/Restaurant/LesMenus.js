import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MenuRestau from './MenuRestau';
import TopBar from '../Common/TopBar';
import InfosRestau from './InfosRestau';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
}

class LesMenus extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }
  
  render() {
    const { classes } = this.props;
    return(
      <div>
        <TopBar />
        <div className={classes.root}>
          <MenuRestau content={terroir} imgs={imgs1} />
          <MenuRestau content={chalossais} imgs={imgs2} />
          <MenuRestau content={gourmand} imgs={imgs3} />
        </div>
        <InfosRestau />
      </div>
    )
  }
}

export default withStyles(styles)(LesMenus);

const imgs1 = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  }];

const imgs2 = [
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const imgs3 = [
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  }];

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