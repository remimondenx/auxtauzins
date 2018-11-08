import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    margin: '20px',
    borderRadius: '8px',
    border: '1px grey solid',
    overflow: 'hidden',
    boxShadow: '0px 4px 8px grey',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 'auto',
    maxHeight: 300,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
});

class TextMobileStepper extends Component {
  state = {
    activeStep: 0,
  };

  handleNext = (length) => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep === length-1 ? 0 : prevState.activeStep+1
    }));
  };

  handleBack = (length) => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep === 0 ? length-1 : prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme, imgs } = this.props;
    const { activeStep } = this.state;
    const maxSteps = imgs.length;

    return (
      <div className={classes.root}>
        <img
          className={classes.img}
          src={imgs[activeStep].imgPath}
          alt={imgs[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={() => this.handleNext(maxSteps)} >
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={() => this.handleBack(maxSteps)} >
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);