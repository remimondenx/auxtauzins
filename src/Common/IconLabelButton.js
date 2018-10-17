import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

const IconLabelButtons = (props) => {
  const { classes, icon, text, link } = props;
  return (
    <a href={link} style={{textDecoration: 'none'}}>
      <Button 
        variant='contained' 
        size='small' 
        className={classes.button}>
        <SvgIcon {...props}>
          <path d={icon} />
        </SvgIcon>
        <Typography>
          {text}
        </Typography>
      </Button>
    </a>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default withStyles(styles)(IconLabelButtons);