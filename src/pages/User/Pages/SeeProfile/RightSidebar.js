import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Container } from "@material-ui/core";
import { useStyles } from "./SeeProfile.style";

import Squash from "../../../../images/sport/Squash.svg";
import tennis from "../../../../images/sport/tennis.svg";
import Padel from "../../../../images/sport/Padel.svg";
import Golf from "../../../../images/sport/Golf.svg";
import Badminton from "../../../../images/sport/Badminton.svg";
import map from "../../../../images/bg/map.svg";
import gtg_logo from "../../../../images/logo/gtg-logo.svg";
import location from "../../../../images/icon/location.svg";
import info_gray from "../../../../images/icon/info_gray.svg";

const Menu = [
  { sport: "Tennis", image: tennis, greenTag: "3,9", tag: "-0,1" },
  { sport: "Golf", image: Golf, greenTag: "5,0", tag: "+0,0" },
  { sport: "Padel", image: Padel, greenTag: "5,0", tag: "+0,0" },
];

const RightSidebar = () => {
  const classes = useStyles();


  return (
    <>
      <Grid item md={4} xs={4} sm={3} style={{paddingTop: '60px'}}>
        <Box className={classes.shadowBox}>
          <h4 className="title">Jakobs nivåer</h4>
          <Box className={classes.menu_right}>
            {Menu.map((data) => (
              <Box className="item">
                <div className="left">
                  <img src={data.image} />
                  <span>{data.sport}</span>
                </div>
                <div className="right">
                  <span className="plusNumber">{data.greenTag}</span>
                  <span className="minusNumber">{data.tag}</span>
                  <img src={info_gray} />
                </div>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default RightSidebar;
