import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

class TopBarList extends Component {
  state = {
    open: false,
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  render() {
    const {open} = this.state;
    const {name, list} = this.props;
    return (
      <div>
      <Button
        buttonRef={node => {
        this.anchorEl = node;
        }}
        onClick={this.handleToggle}
      >
       <div>{name}</div>
      </Button>

      <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
        {({ TransitionProps, placement }) => (
        <Grow
         {...TransitionProps}
         id="menu-list-grow"
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={this.handleClose}>
              <MenuList>
                {list.map(({name, link}) =>
                  <Link to={link} key={name}>
                    <MenuItem 
                      onClick={this.handleClose} 
                      key={name}>
                        {name}
                    </MenuItem>
                  </Link>)
                }
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
        )}
      </Popper>
      </div>
    )
  }
}

export default TopBarList;