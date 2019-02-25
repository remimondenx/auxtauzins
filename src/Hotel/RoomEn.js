import React, { Component } from 'react';

import { withStyles, Typography } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import Pagination from '../Common/Pagination';
import { isMobile } from 'react-device-detect';

const styles = {
  root: {
    margin: '20px',
    backgroundColor: 'white',
    border: '1px grey solid',
    borderRadius: '20px',
    boxShadow: '0 2px 4px #000000',
    textAlign: 'center',
    overflow: 'hidden',
  },
  containerSwipeable: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden'
  },
  swipeable: {
    overflow: 'hidden',
  },
  imgElt: {
    height: '260px',
    width: '100%',
    borderRadius: '20px 20px 0px 0px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
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
  roomDate: {
    fontStyle: 'italic',
  },
  table: {
    //paddingTop: '20px'
  },
  overflow: {
    overflow: 'hidden',
  },
  inline: {
    display: 'inline',
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
      <div className={classes.root} style={isMobile ? {height: '350px'} : {height:'400px'}}>
        <div className={classes.containerSwipeable} style={isMobile ? {height: '50%'} : {height:'65%'}}>
          <SwipeableViews
            className={classes.swipeable}
            index={index} 
            onChangeIndex={this.handleChangeIndex}>
            {imgs.map(it => (
              <div style={(Object.assign({}, {backgroundImage:`url(${it.imgPath})`}, styles.imgElt))} />
              ))}
          </SwipeableViews>
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
                  <th>Without balcony</th>
                  <th>{content.sans}</th>
                </tr>
                <tr>
                  <th>With balcony</th>
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