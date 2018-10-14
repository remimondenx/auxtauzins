import React from 'react';

import HotelRestau from './HotelRestau.js';
import Video from './Video';
import restaurant from '../images/restaurant.jpeg';
import hotel from '../images/hotel.jpeg';

const Home = () => (
  <div>
    <HotelRestau
      name='Restaurant'
      link='./restaurant/menus'
      img={restaurant} />
    <HotelRestau
      name='Hôtel'
      link='./hotel'
      img={hotel} />
      <Video>
        Visionnez la vidéo de l'établissement !
      </Video>
  </div>
)

export default Home
