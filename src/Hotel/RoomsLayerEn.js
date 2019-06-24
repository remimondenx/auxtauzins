import React, { Component } from "react";

import RoomEn from "./RoomEn";
import img_room_3 from "../images/rooms/chambre_3.jpg";
import img_room_1 from "../images/rooms/chambre_1.jpg";
import img_room_2 from "../images/rooms/chambre_2.jpg";
import img_room_4 from "../images/rooms/chambre_4.jpg";
import img_room_5 from "../images/rooms/chambre_5.jpg";
import img_room_6 from "../images/rooms/chambre_6.jpg";
import img_room_7 from "../images/rooms/chambre_7.jpg";
import img_room_8 from "../images/rooms/chambre_8.jpg";
import img_room_9 from "../images/rooms/chambre_9.jpg";
import img_room_10 from "../images/rooms/chambre_10.jpg";
import img_sdb_1 from "../images/rooms/sdb_1.jpg";
import img_sdb_2 from "../images/rooms/sdb_2.jpg";

import { withStyles, Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  root: {
    backgroundColor: "#eceff1",
    padding: "30px",
    textAlign: "center"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  rooms: {
    maxWidth: "1000px"
  }
};

class RoomsLayer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Our rooms
        </Typography>
        <div className={classes.flex}>
          <Grid className={classes.rooms} container>
            {listRooms.map(it => (
              <Grid item xs={12} sm={6} key={it.content.name}>
                <RoomEn content={it.content} imgs={it.imgs} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

RoomsLayer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RoomsLayer);

const saisonHaute = {
  name: "High season,",
  date: "May 15 - Sept. 30",
  sans: "82/92€",
  avec: "95/120€"
};

const horsSaison = {
  name: "Off season,",
  date: "October 1 - May 15",
  sans: "75€",
  avec: "82€"
};

const imgsSaisonHaute = [
  {
    label: "img saison haute 1",
    imgPath: img_room_4
  },
  {
    label: "img saison haute 2",
    imgPath: img_room_1
  },
  {
    label: "img saison haute 3",
    imgPath: img_room_2
  },
  {
    label: "img saison haute 4",
    imgPath: img_room_3
  },
  {
    label: "img saison haute 5",
    imgPath: img_room_5
  },
  {
    label: "img saison haute 6",
    imgPath: img_sdb_1
  }
];

const imgsHorsSaison = [
  {
    label: "image hors saison 1",
    imgPath: img_room_8
  },
  {
    label: "image hors saison 2",
    imgPath: img_room_6
  },
  {
    label: "image hors saison 3",
    imgPath: img_room_7
  },
  {
    label: "image hors saison 4",
    imgPath: img_room_9
  },
  {
    label: "image hors saison 5",
    imgPath: img_room_10
  },
  {
    label: "image hors saison 6",
    imgPath: img_sdb_2
  }
];

const listRooms = [
  {
    content: saisonHaute,
    imgs: imgsSaisonHaute
  },
  {
    content: horsSaison,
    imgs: imgsHorsSaison
  }
];
