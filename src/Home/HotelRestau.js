import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
  }
}
class HotelRestau extends Component {
  render() {
    const { name, link, img, classes } = this.props;
    return(
      <Link to={link} className={classes.root}>
        <img src={img} alt={name} />
       </Link>
    )
  }
}

HotelRestau.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default withStyles(styles)(HotelRestau);
