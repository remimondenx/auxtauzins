import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";

class PaginationDot extends React.Component {
  handleClick = event => {
    this.props.onClick(event, this.props.index);
  };

  render() {
    const { active } = this.props;
    const styles = {
      root: {
        height: 18,
        width: 18,
        cursor: "pointer",
        border: 0,
        background: "none",
        padding: 0,
        outline: "none"
      },
      dot: {
        backgroundColor: "#9494b8",
        height: 12,
        width: 12,
        borderRadius: 6,
        boxShadow: "2px 2px 4px black",
        margin: 3
      },
      active: {
        backgroundColor: "#ffffff"
      }
    };

    let styleDot = styles.dot;

    if (active) {
      _.extend(styleDot, styles.active);
    }

    return (
      <button type="button" style={styles.root} onClick={this.handleClick}>
        <div style={styleDot} />
      </button>
    );
  }
}

PaginationDot.propTypes = {
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PaginationDot;
