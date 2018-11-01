import React from 'react';

import TopBar from '../Common/TopBar';

const items = [
  {title: 'En saison', href:'#'},
  {title: 'Hors saison', href:'#'},
  {title: 'Les activités', href:'#'},
  {title: 'Histoire du lieu', href:'#'},
  {title: 'Photos & Vidéos', href:'#'},
]

const TopBarHotel = () => (
  <TopBar items={items}>
  </TopBar>
)

export default TopBarHotel;
