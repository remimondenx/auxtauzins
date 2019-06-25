import React, { Component } from "react";

import restaurant from "../images/main/table.jpg";
import restaurant_mobile from "../images/main/table_mobile.jpg";
import FirstLayerEn from "../Common/FirstLayerEn";
import MenusLayerEn from "./MenusLayerEn";
import LaCarteLayerEn from "./LaCarteLayerEn";

import { isMobileOnly } from "react-device-detect";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import FooterRestaurantEn from "./FooterRestaurantEn";

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

class RestaurantPageEn extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.firstLayer}>
          <FirstLayerEn
            className={classes.elt}
            hotel={false}
            link="/hotel/en"
            image={isMobileOnly ? restaurant_mobile : restaurant}
          />
        </div>
        <div className={classes.following}>
          <MenusLayerEn />
          <LaCarteLayerEn />
          <FooterRestaurantEn />
        </div>
      </div>
    );
  }
}

RestaurantPageEn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RestaurantPageEn);
