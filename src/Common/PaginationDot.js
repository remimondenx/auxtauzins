import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  root: {
    height: 18,
    width: 18,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0,
    outline: 'none',
  },
  dot: {
    backgroundColor: '#9494b8',
    height: 12,
    width: 12,
    borderRadius: 6,
    boxShadow: '2px 2px 4px black',
    margin: 3,
  },
  dot_active: {
    backgroundColor: '#ffffff',
    height: 12,
    width: 12,
    borderRadius: 6,
    boxShadow: '2px 2px 4px black',
    margin: 3,
  },
};

class PaginationDot extends React.Component {
  handleClick = event => {
    this.props.onClick(event, this.props.index);
  };

  render() {
    const { active } = this.props;

    return (
      <button type="button" style={styles.root} onClick={this.handleClick}>
        <div style={active ? styles.dot_active : styles.dot} />
      </button>
    );
  }
}

PaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PaginationDot;
