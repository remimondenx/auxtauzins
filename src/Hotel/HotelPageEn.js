import React, { Component } from 'react';

import image from '../images/main/piscine.jpg';
import FirstLayerEn from '../Common/FirstLayerEn';
import RoomsLayer from './RoomsLayer';
import FooterHotel from './FooterHotel';
import ActivitesLayer from './ActivitesLayer';

class HotelPageEn extends Component {
  render() {
    return(
      <div style={{height:'100%'}}>
        <FirstLayerEn
          hotel={true} 
          link='/en'
          image={image}
        />
        <RoomsLayer />
        <ActivitesLayer />
        <FooterHotel />
      </div>

    );
  }
}

export default HotelPageEn;
