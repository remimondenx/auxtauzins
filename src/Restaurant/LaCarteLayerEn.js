import React, { Component } from "react";

import img_entrees from "../images/food/nos_entrees.jpg";
import img_poissons from "../images/food/nos_poissons.jpg";
import img_canard from "../images/food/canard.png";
import img_sauces from "../images/food/plats_en_sauce.jpg";
import img_viandes from "../images/food/nos_viandes.jpg";
import img_desserts from "../images/food/nos_desserts_V1.jpg";

import { withStyles, Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    padding: "10px",
    textAlign: "center"
  },
  gridList: {
    padding: "20px",
    maxWidth: "1000px"
  },
  carteElt: {
    height: "300px",
    padding: "20px"
  },
  flex: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center"
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    maxWidth: "400px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
    border: "1px grey solid",
    borderRadius: "20px",
    boxShadow: "0 2px 4px #000000",
    display: "flex",
    cursor: "pointer"
  },
  darkBand: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "40px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    alignSelf: "flex-end"
  },
  titleCarteElt: {
    padding: "10px",
    fontWeight: "bold",
    fontSize: "1.1em"
  },
  darkImage: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "20px",
    width: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "auto"
  },
  table: {
    width: "100%"
  },
  titleMenu: {
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: "30px"
  },
  titleDescription: {
    textAlign: "left",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "0.9em",
    width: "100%"
  },
  foodContainer: {
    display: "flex",
    flexDirection: "column"
  },
  food: {
    textAlign: "left"
  },
  description: {
    paddingLeft: "10px",
    fontSize: "0.7em",
    lineHeight: "2em",
    textAlign: "left"
  },
  price: {
    fontFamily: "Nunito",
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: "0.9em"
  },
  separator: {
    textAlign: "center",
    color: "white",
    tewtWeight: "bold"
  }
};

class LaCarteLayer extends Component {
  state = {
    open: 0
  };

  handleEvent = id => {
    this.setState({ open: id });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="h3">
          A la Carte
        </Typography>
        <Grid className={classes.gridList} container>
          {listLaCarte.map(it => (
            <Grid
              className={classes.carteElt}
              key={it.id}
              onClick={() => this.handleEvent(it.id)}
              item
              xs={12}
              sm={6}
            >
              <div className={classes.flex}>
                <div
                  className={classes.backgroundImage}
                  style={{ backgroundImage: `url(${it.img})` }}
                >
                  {!(this.state.open === it.id) && (
                    <div className={classes.darkBand}>
                      <Typography
                        className={classes.titleCarteElt}
                        color="secondary"
                      >
                        {it.title}
                      </Typography>
                    </div>
                  )}
                  {this.state.open === it.id && (
                    <div className={classes.darkImage}>
                      {(it.titleDescription && (
                        <div style={{ width: "100%" }}>
                          <Typography
                            className={classes.titleMenu}
                            variant="h5"
                            color="secondary"
                          >
                            {it.title}
                          </Typography>
                          <Typography
                            className={classes.titleDescription}
                            variant="h5"
                            color="secondary"
                            gutterBottom
                          >
                            {it.titleDescription}
                          </Typography>
                        </div>
                      )) || (
                        <Typography
                          className={classes.titleMenu}
                          variant="h5"
                          color="secondary"
                          gutterBottom
                        >
                          {it.title}
                        </Typography>
                      )}
                      <table className={classes.table}>
                        <tbody>
                          {it.content.map(
                            (course, index) =>
                              (course && (
                                <tr key={course.food}>
                                  <th className={classes.foodContainer}>
                                    <Typography
                                      className={classes.food}
                                      color="secondary"
                                    >
                                      {course.food}
                                    </Typography>
                                    {course.description && (
                                      <Typography
                                        className={classes.description}
                                        color="secondary"
                                      >
                                        {course.description}
                                      </Typography>
                                    )}
                                  </th>
                                  <th>
                                    <div className={classes.price}>
                                      {course.price}€
                                    </div>
                                  </th>
                                </tr>
                              )) || (
                                <tr
                                  className={classes.separator}
                                  key={`separator${index}`}
                                >
                                  <th>
                                    <div>~</div>
                                  </th>
                                </tr>
                              )
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

LaCarteLayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LaCarteLayer);

const entrees = {
  id: 1,
  title: "Our starters",
  img: img_entrees,
  content: [
    { food: "Salad with tomatoes, onions, asparaguses", price: 12 },
    {
      food: "Landaise salad",
      description:
        "Salad, tomatoes, asparaguses, gizzards, smoked duck breast, foie gras",
      price: 25
    },
    false,
    { food: "Garbure Landaise soup", price: 13 },
    { food: "Fish soup", price: 13 },
    false,
    { food: "Homemade pork’s pâté", price: 10 },
    { food: "Homemade deer’s pâté", price: 10 },
    false,
    { food: "Local ham", price: 15 },
    { food: "Homemade delicatessen plate", price: 15 },
    false,
    { food: "Omelet with ham", price: 14 },
    { food: "Omelet with cheese", price: 14 },
    { food: "Omelet with cèpes (mushroom)", price: 18 }
  ]
};

const poissons = {
  id: 2,
  title: "Our fishes",
  titleDescription: "from the Atlantic ocean",
  img: img_poissons,
  content: [
    { food: "Monkfish doughnuts and its vegetables", price: 25 },
    { food: "Scallops in a Provençal way", price: 26 },
    { food: "Scallops on leeks in a flaky way", price: 26 },
    { food: "Sole meunière", price: 28 },
    { food: "Fricassee of monkfish, scallops and cèpes", price: 30 }
  ]
};

const canard = {
  id: 3,
  title: "All duck' products",
  titleDescription: "with french fries and vegetables of the season",
  img: img_canard,
  content: [
    { food: "Duck’s heart in skewer", price: 19 },
    { food: "Cold duck breast with foie gras inside", price: 24 },
    false,
    { food: 'Duck confit "the thigh"', price: 18 },
    { food: 'Duck confit "the wing"', price: 24 },
    { food: 'Goose confit "the thigh"', price: 20 },
    { food: 'Goose confit "the wing"', price: 26 },
    false,
    {
      food: "Roasted duck",
      description: "grilled or with green pepper sauce",
      price: 20
    },
    { food: "Duck foie gras slice", price: 24 },
    { food: "Warm foie gras", description: "with apples or grapes", price: 25 },
    { food: "Fried cutlets of foie gras with cèpes", price: 30 }
  ]
};

const sauces = {
  id: 4,
  title: "Our dishes in sauce",
  img: img_sauces,
  content: [
    { food: "Marinated civet", price: 18 },
    { food: "Calf's head in a gribiche sauce", price: 18 },
    { food: "Sauce of cèpes", price: 24 },
    { food: "Poultry of wood pigeon", price: 24 },
    { food: "River lamprey of the Adour", price: 24 },
    { food: "Sweet bread with financier sauce", price: 25 }
  ]
};

const viandes = {
  id: 5,
  title: "Our meats",
  titleDescription: "with french fries and vegetables of the season",
  img: img_viandes,
  content: [
    { food: "Pork confit", price: 16 },
    { food: "Veal cutlet", description: "grilled or with cream", price: 20 },
    { food: "Beef tournedos in a pepper sauce", price: 24 },
    { food: "Sirloin of beef (Blonde of Aquitaine race)", price: 28 },
    { food: "Sweet bread with cèpes", price: 30 },
    {
      food: "Landais Tournedos",
      description:
        "beef steak on garlic crouton with a slice of foie gras and cèpes",
      price: 30
    },
    false,
    { food: "Additional portion of vegetables", price: 5 }
  ]
};

const desserts = {
  id: 6,
  title: "Our desserts",
  img: img_desserts,
  content: [
    { food: "Homemade pastries", price: 8 },
    { food: "The jar of cream", price: 8 },
    { food: "Cheese plate", price: 9 },
    { food: "The ice-cold Grand Marnier foam", price: 9 },
    { food: "Homemade profiteroles", price: 9 },
    false,
    {
      food: "Choice of water ice , 2 scoops",
      description: "pear, blackcurrant, lemon, mandarin",
      price: 8
    },
    {
      food: "Choice of ice-creams, 2 scoops",
      description:
        "vanilla, coffee, pistachios, strawberries, grape rums, prunes",
      price: 8
    },
    false,
    { food: "Melba peach", price: 8 },
    { food: "The coffee ice cream", price: 8 },
    { food: "The chocolate ice cream", price: 8 },
    {
      food: "The cardinal cup",
      description: "brown sorbet, cream of brown",
      price: 8
    },
    { food: "The Colonel Cup", description: "lemon sorbet, vodka", price: 9 },
    {
      food: "Williamine cup",
      description: "pear sorbet, pear alcohol",
      price: 9
    },
    {
      food: "The cup d'Artagnan",
      description: "prune ice, prune, armagnac and chantilly",
      price: 9
    },
    false,
    { food: "Coffee", price: 2.8 },
    { food: "Ingusions or tea", price: 4 },
    { food: "Cappuccino", price: 6 },
    { food: "Café gourmand", price: 9 }
  ]
};

const listLaCarte = [entrees, poissons, canard, sauces, viandes, desserts];
