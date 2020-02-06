import React, { Component } from 'react';

import piscine from '../images/main/piscine.jpg';
import piscine_mobile from '../images/main/piscine_mobile.jpg';
import FirstLayerEn from '../Common/FirstLayerEn';
import RoomsLayerEn from './RoomsLayerEn';
import FooterHotelEn from './FooterHotelEn';
import ActivitesLayerEn from './ActivitesLayerEn';
import { isMobileOnly } from 'react-device-detect';

class HotelPageEn extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <FirstLayerEn
          hotel={true}
          link="/en"
          image={isMobileOnly ? piscine_mobile : piscine}
        />
        <RoomsLayerEn />
        <ActivitesLayerEn />
        <FooterHotelEn />
      </div>
    );
  }
}

export default HotelPageEn;
