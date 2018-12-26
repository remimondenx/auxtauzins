import React, { Component } from 'react';

import image from '../images/main/hotel.jpg';
import FirstLayer from '../Common/FirstLayer';
import FooterHotel from './FooterHotel';

class HotelPage extends Component {
  render() {
    return(
      <div style={{height:'100%'}}>
        <FirstLayer
          hotel={true} 
          link='/'
          image={image}
        />
        <FooterHotel />
      </div>

    );
  }
}

export default HotelPage;
