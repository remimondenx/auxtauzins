import React, { Component } from 'react';

import image from '../images/main/hotel.jpg';
import FirstLayer from '../Common/FirstLayer';
import Contact from '../Common/Contact';

class HotelPage extends Component {
  render() {
    return(
      <div style={{height:'100%'}}>
        <FirstLayer
          checked={true} 
          link='/'
          image={image}
        />
        <Contact />
      </div>

    );
  }
}

export default HotelPage;
