import React, { Component } from 'react';

import restaurant from '../images/main/terrasse.jpg';
import restaurant_mobile from '../images/main/terrasse_mobile.jpg';
import FirstLayerEn from '../Common/FirstLayerEn';
import MenusLayerEn from './MenusLayerEn';
import LaCarteLayerEn from './LaCarteLayerEn';

import { isMobileOnly } from 'react-device-detect';
import FooterRestaurantEn from './FooterRestaurantEn';

class RestaurantPageEn extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <FirstLayerEn
          hotel={false}
          link="/hotel/en"
          image={isMobileOnly ? restaurant_mobile : restaurant}
        />
        <MenusLayerEn />
        <LaCarteLayerEn />
        <FooterRestaurantEn />
      </div>
    );
  }
}

export default RestaurantPageEn;
