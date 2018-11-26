import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
}

class LaCarteElement extends Component {
  render() {
    const { classes, title, img, content } = this.props;
    return(
			<div className={classes.root}>
        
      </div>
    );
  }
}

LaCarteElement.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LaCarteElement);