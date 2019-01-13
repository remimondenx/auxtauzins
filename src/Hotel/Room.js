import React, { Component } from 'react';

import { withStyles, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    margin: '20px',
    height: '400px',
    backgroundColor: 'white',
    border: '1px grey solid',
    borderRadius: '20px',
    boxShadow: '0 2px 4px #000000',
    textAlign: 'center',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  swipeable: {
    height: '50%',
    width: '100%',
    backgroundColor: 'grey'
  },
  imgElt: {
    height: '200px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    backgroundColor: 'green'
  },
  text: {
    height: '50%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  roomName: {
    fontWeight: 'bold',
  },
  table: {
    paddingTop: '20px',
  },
}

class Room extends Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { classes, content, imgs } = this.props;
    const { index } = this.state;
    return(
			<div className={classes.root}>
        <AutoPlaySwipeableViews 
          className={classes.swipeable}
          index={index} 
          onChangeIndex={this.handleChangeIndex}>
          {imgs.map(it => (
            <div style={Object.assign({}, styles.imgElt, {backgroundImage:`url(${it.imgPath})`})}></div>
          ))}
        </AutoPlaySwipeableViews>
        
        <div className={classes.text}>
          <Typography 
            className={classes.roomName}
            variant='h5'
            color='primary'
            gutterBottom
          >
            {content.name}
          </Typography>
          <div className={classes.table}>
            <Typography variant='body1'>
              <table>
                <tr>
                  <th>Sans balcon</th>
                  <th>{content.sans}</th>
                </tr>
                <tr>
                  <th>Avec balcon</th>
                  <th>{content.avec}</th>
                </tr>
                <tr>
                  <th>Troisième personne</th>
                  <th>+20€</th>
                </tr>
              </table>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Room);