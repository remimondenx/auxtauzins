import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const HotelRestau = ({name, link, img}) => (
  <Link to={link}>
    <img src={img} alt={name} />
  </Link>
)

HotelRestau.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default HotelRestau
