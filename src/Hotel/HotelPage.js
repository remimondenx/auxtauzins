import React, { Component } from 'react';

import image from '../images/main/hotel.jpg';
import FirstLayer from '../Common/FirstLayer';

class HotelPage extends Component {
  render() {
    return(
      <FirstLayer 
        title='Hotel Aux Tauzins' 
        checked={true} 
        link='/'
        image={image}
      />
    );
  }
}

export default HotelPage;
