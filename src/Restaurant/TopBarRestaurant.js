import React from 'react';

import TopBar from '../Common/TopBar';

const items = [
  {title: 'Les Menus', href:'/restaurant/menus'},
  {title: 'La carte', href:'/restaurant/carte'}
]
const TopBarRestaurant = () => (
  <TopBar items={items}>
  </TopBar>
)

export default TopBarRestaurant;
