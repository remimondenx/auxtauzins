import React, { Component } from "react";

import RestaurantMenuEn from "./RestaurantMenuEn";

import img_artagnan from "../images/food/coupe_artagnan_menu4.jpg";
import img_assiette from "../images/food/assiette_du_terroir_menu1_V4.jpg";
import img_coeurs_canard from "../images/food/coeurs_de_canard_menu1_V5.jpg";
import img_confit from "../images/food/confit_de_canard_menu2_V2.jpg";
import img_foie_gras_chaud from "../images/food/foie_gras_chaud_aux_raisins_menu4.jpg";
import img_magret from "../images/food/magret_de_canard_menu3_V1.jpg";
import img_magret_froid from "../images/food/magret_froid_fourre_menu2_V3.jpg";
import img_omelette from "../images/food/omelette_aux_cepes_menu3.jpg";
import img_patisseries from "../images/food/patisseries_maison_menu1_V3.jpg";
import img_salade_gesiers from "../images/food/salade_de_gesiers_oie.jpg";
import img_sorbets from "../images/food/assiette_de_sorbets_menu2_V2.jpg";
import img_tournedos from "../images/food/tournedos_de_boeuf_menu4_V2.jpg";

import { withStyles, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  root: {
    backgroundColor: "#eceff1",
    padding: "30px",
    textAlign: "center"
  },
  gridList: {}
};

class MenusLayer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Our menus
        </Typography>
        <Grid className={classes.gridList} container>
          {listMenus.map(it => (
            <Grid item xs={12} sm={6} lg={3} key={it.content.name}>
              <RestaurantMenuEn content={it.content} imgs={it.imgs} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

MenusLayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenusLayer);

const terroir = {
  name: "Terroir Menu",
  entree: "Local products plate",
  entree2: "Garbure Landaise soup",
  plat: "Rooster in a Madiran sauce",
  plat2: "Duck’s heart in skewer",
  dessert: "Homemade pastries",
  dessert2: "Ice-cream",
  prix: 26
};

const chalossais = {
  name: "Chalossais Menu",
  entree: "Cold duck breast with foie gras inside",
  plat: "Duck confit with homemade potatoes",
  dessert: "Water ice composition",
  prix: 32
};

const gourmand = {
  name: "Gourmand Menu",
  entree: "Fish of Atlantic",
  entree2: "Cèpes’ omelet",
  plat: "Marinated civet",
  plat2: "Duck breast with pepper sauce",
  dessert: "Melba peach",
  prix: 36
};

const gastro = {
  name: "Gastronomic Menu",
  entree: "Gizzards of goose salad",
  plat: "Hot foie gras in grapes",
  apresPlat: "Beef tournedos",
  dessert: "Refreshing ice cream prune",
  prix: 45
};

const imgs_terroir = [
  {
    label: "assiette_terroir",
    imgPath: img_assiette
  },
  {
    label: "coeurs de canard",
    imgPath: img_coeurs_canard
  },
  {
    label: "patisseries",
    imgPath: img_patisseries
  }
];

const imgs_chalossais = [
  {
    label: "magret froid fourré au foie gras",
    imgPath: img_magret_froid
  },
  {
    label: "confit de canard",
    imgPath: img_confit
  },
  {
    label: "assiette de sorbets",
    imgPath: img_sorbets
  }
];

const imgs_gourmand = [
  {
    label: "omelette aux cèpes",
    imgPath: img_omelette
  },
  {
    label: "magret",
    imgPath: img_magret
  }
];

const imgs_gastro = [
  {
    label: "salade de gésiers d oie",
    imgPath: img_salade_gesiers
  },
  {
    label: "foie gras chaud",
    imgPath: img_foie_gras_chaud
  },
  {
    label: "tournedos boeuf",
    imgPath: img_tournedos
  },
  {
    label: "coupe d'artagnan",
    imgPath: img_artagnan
  }
];

const listMenus = [
  {
    content: terroir,
    imgs: imgs_terroir
  },
  {
    content: chalossais,
    imgs: imgs_chalossais
  },
  {
    content: gourmand,
    imgs: imgs_gourmand
  },
  {
    content: gastro,
    imgs: imgs_gastro
  }
];
