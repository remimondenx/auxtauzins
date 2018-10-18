import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles'
import TextMobileStepper from '../Common/TextMobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}

class MenuRestau extends Component {
  render() {
    const {classes, content, imgs, color} = this.props;
    return(
      <Paper 
        elevation={1} 
        className={classes.root} 
        style={{backgroundColor:color}}>
        <Typography variant='h4' gutterBottom>
          {content.name}
        </Typography>
        <ul>
          <li>{content.entree}</li>
          <li>{content.plat}</li>
          <li>{content.dessert}</li>
        </ul>
        <div>
          - {content.prix} euros -
        </div>
        <TextMobileStepper imgs={imgs} />
      </Paper>
  )}
}

MenuRestau.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string.isRequired,
    entree: PropTypes.string.isRequired,
    plat: PropTypes.string.isRequired,
    dessert: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
  }).isRequired,
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
}

export default withStyles(styles)(MenuRestau);
