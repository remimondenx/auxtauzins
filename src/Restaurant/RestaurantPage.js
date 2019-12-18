import React, { Component } from "react";

import restaurant from "../images/main/table.jpg";
import restaurant_mobile from "../images/main/table_mobile.jpg";
import FirstLayer from "../Common/FirstLayer";
import MenusLayer from "./MenusLayer";
import LaCarteLayer from "./LaCarteLayer";

import { isMobileOnly } from "react-device-detect";
import FooterRestaurant from "./FooterRestaurant";


class RestaurantPage extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <FirstLayer
          hotel={false}
          link="/hotel"
          image={isMobileOnly ? restaurant_mobile : restaurant}
          infoDisplayed={true}
        />
        <MenusLayer />
        <LaCarteLayer />
        <FooterRestaurant />
      </div>
    );
  }
}

export default RestaurantPage;
