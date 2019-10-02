import React, { Component } from "react";
import { Helmet } from "react-helmet";

import piscine from "../images/main/piscine.jpg";
import piscine_mobile from "../images/main/piscine_mobile.jpg";
import FirstLayer from "../Common/FirstLayer";
import RoomsLayer from "./RoomsLayer";
import FooterHotel from "./FooterHotel";
import ActivitesLayer from "./ActivitesLayer";
import { isMobileOnly } from "react-device-detect";

class HotelPage extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Helmet>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <meta name="author" content="Rémi MONDENX" />
          <meta name="copyright" content="Rémi MONDENX" />
          <meta name="description" content="L'hôtel Aux Tauzins compte 20 chambres en plein coeur de la Chalosse." />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <title>Aux Tauzins - Hôtel Restaurant à Montfort-en-Chalosse</title>
        </Helmet>
        <FirstLayer
          hotel={true}
          link="/"
          image={isMobileOnly ? piscine_mobile : piscine}
        />
        <RoomsLayer />
        <ActivitesLayer />
        <FooterHotel />
      </div>
    );
  }
}

export default HotelPage;
