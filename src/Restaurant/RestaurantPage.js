import React, { Component } from 'react';

import image from '../images/main/restaurant.jpg';
import FirstLayer from '../Common/FirstLayer';

class RestaurantPage extends Component {
  render() {
    return(
			<FirstLayer 
				title="Restaurant Aux Tauzins" 
				checked={false}
				link='/hotel'
				image={image}
			/>
    );
  }
}

export default RestaurantPage;
