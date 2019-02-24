import React, { Component } from 'react';

import image from '../images/main/piscine.jpg';
import FirstLayerEn from '../Common/FirstLayerEn';
import RoomsLayerEn from './RoomsLayerEn';
import FooterHotelEn from './FooterHotelEn';
import ActivitesLayerEn from './ActivitesLayerEn';

class HotelPageEn extends Component {
  render() {
    return(
      <div style={{height:'100%'}}>
        <FirstLayerEn
          hotel={true} 
          link='/en'
          image={image}
        />
        <RoomsLayerEn />
        <ActivitesLayerEn />
        <FooterHotelEn />
      </div>

    );
  }
}

export default HotelPageEn;
