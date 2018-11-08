import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles'
import TextMobileStepper from '../Common/TextMobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    padding: '10px',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  flexElt: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontAlign: 'center',
  },
  prix: {
    marginTop: '10px',
  }
}

class MenuRestau extends Component {
  render() {
    const {classes, content, imgs, color, pair} = this.props;
    return(
      <Paper 
        elevation={1} 
        className={classes.root} 
        style={{backgroundColor:color}}>
        <Grid container className={classes.container}>
          {!pair &&
          <Grid className={classes.flexElt} item xs={12} sm={6}>
            <TextMobileStepper imgs={imgs} />
          </Grid>}
          <Grid className={classes.flexElt} item xs={12} sm={6}>
            <Typography variant='h4' color='secondary' gutterBottom>
              {content.name}
            </Typography>
            <ul>
              <li><Typography color='secondary'>{content.entree}</Typography></li>
              <li><Typography color='secondary'>{content.plat}</Typography></li>
              <li><Typography color='secondary'>{content.dessert}</Typography></li>
            </ul>
            <div className={classes.prix}>
              <Typography color='secondary'>- {content.prix} euros -</Typography>
            </div>
          </Grid>
          {pair &&
          <Grid className={classes.flexElt} item xs={12} sm={6}>
            <TextMobileStepper imgs={imgs} />
          </Grid>}
        </Grid>
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
