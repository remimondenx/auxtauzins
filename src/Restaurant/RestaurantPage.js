import React, { Component } from 'react';
import { isMobileOnly } from 'react-device-detect';
import { Helmet } from 'react-helmet';
import FirstLayer from '../Common/FirstLayer';
import restaurant from '../images/main/terrasse.jpg';
import restaurant_mobile from '../images/main/terrasse_mobile.jpg';
import FooterRestaurant from './FooterRestaurant';
import LaCarteLayer from './LaCarteLayer';
import MenusLayer from './MenusLayer';
import History from './History';

class RestaurantPage extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Helmet>
          <meta
            name="description"
            content="L'hôtel/restaurant Aux Tauzins compte 20 chambres en plein coeur de la Chalosse et vous propose une cuisine qui met à l'honneur les produits locaux tels que le canard ou les poissons de l'Atlantique."
          />
          <title>Aux Tauzins - Hôtel Restaurant à Montfort-en-Chalosse</title>
        </Helmet>
        <FirstLayer
          hotel={false}
          link="/hotel"
          image={isMobileOnly ? restaurant_mobile : restaurant}

        />
        <MenusLayer />
        <LaCarteLayer />
        <History />
        <FooterRestaurant />
      </div>
    );
  }
}

export default RestaurantPage;
