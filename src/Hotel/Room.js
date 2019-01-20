import React, { Component } from 'react';

import { withStyles, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '../Common/Pagination';
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
  },
  containerSwipeable: {
    position: 'relative',
    height: '65%',
    width: '100%',
  },
  swipeable: {
    overflow: 'hidden',
  },
  imgElt: {
    height: '260px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden'
  },
  text: {
    height: '40%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  roomName: {
    fontWeight: 'bold',
  },
  table: {
    //paddingTop: '20px'
  },
  overflow: {
    overflow: 'hidden',
  },
  inline: {
    display: 'inline'
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
        <div className={classes.containerSwipeable}>
          <AutoPlaySwipeableViews
            className={classes.swipeable}
            index={index} 
            onChangeIndex={this.handleChangeIndex}>
            {imgs.map(it => (
              //<div style={Object.assign({}, styles.imgElt, {backgroundImage:`url(${it.imgPath})`})}></div>
              <img src={it.imgPath} style={(Object.assign({}, styles.imgElt))} alt={it.imgLabel} />
              ))}
          </AutoPlaySwipeableViews>
          <Pagination className={classes.pagination} dots={imgs.length} index={index} onChangeIndex={this.handleChangeIndex} />
        </div>
        
        <div className={classes.text}>
          <Typography 
            className={classes.roomName}
            variant='h5'
            color='primary'
          >
            {content.name}
          </Typography>
          <Typography 
            className={classes.roomDate}
            variant='h6'
            color='primary'
          >
            {content.date}
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
              </table>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Room);