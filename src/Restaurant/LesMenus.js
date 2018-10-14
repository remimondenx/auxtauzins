import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles'
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
  render() {
    const { classes } = this.props;
    return(
      <div>
        <TopBar />
        <div className={classes.root}>
          <MenuRestau content={content1} imgs={imgs1} />
          <MenuRestau content={content1} imgs={imgs2} />
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

const content1 = {
  name: 'Menu du terroir',
  entree: 'Assiette du terroir / Garbure Landaise',
  plat: 'Coq fermier sauce Madiran / Brochette de coeurs de canard',
  dessert: 'Pâtisserie maison / Glace',
  prix: 26,

}