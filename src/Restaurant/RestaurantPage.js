import React, { Component } from "react";

import restaurant from "../images/main/table.jpg";
import restaurant_mobile from "../images/main/table_mobile.jpg";
import FirstLayer from "../Common/FirstLayer";
import MenusLayer from "./MenusLayer";
import LaCarteLayer from "./LaCarteLayer";

import { isMobileOnly } from "react-device-detect";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import FooterRestaurant from "./FooterRestaurant";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  firstLayer: {
    height: "100%"
  }
};

class RestaurantPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.firstLayer}>
          <FirstLayer
            className={classes.elt}
            hotel={false}
            link="/hotel"
            image={isMobileOnly ? restaurant_mobile : restaurant}
          />
        </div>
        <div className={classes.following}>
          <MenusLayer />
          <LaCarteLayer />
          <FooterRestaurant />
        </div>
      </div>
    );
  }
}

RestaurantPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RestaurantPage);
