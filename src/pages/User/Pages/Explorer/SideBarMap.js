import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Container } from "@material-ui/core";
import { useStyles } from "./SideBarMap.style"

import Squash from "../../../../images/sport/Squash.svg";
import tennis from "../../../../images/sport/tennis.svg";
import Padel from "../../../../images/sport/Padel.svg";
import Golf from "../../../../images/sport/Golf.svg";
import Badminton from "../../../../images/sport/Badminton.svg";
import map from "../../../../images/bg/map.svg";
import gtg_logo from "../../../../images/logo/gtg-logo.svg";
import location from "../../../../images/icon/location.svg";
import menu_icon from "../../../../images/icon/menu_icon.svg";
import info_gray from "../../../../images/icon/info_gray.svg";

const Menu = [
  { sport: "Tennis", image: tennis, checkbox: "c1" },
  { sport: "Padel", image: Padel, checkbox: "c2" },
  { sport: "Squash", image: Squash, checkbox: "c3" },
  { sport: "Badminton", image: Badminton, checkbox: "c4" },
  { sport: "Golf", image: Golf, checkbox: "c5" },
];

const SideBarMap = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item md={4} xs={4} sm={3} style={{ paddingTop: "20px",position:'absolute',zIndex:1,background:'white',width:260,top:168,borderRadius:21,left:26 }}>
        <Box className={classes.shadowBox} style={{boxShadow:'none'}}>
          <Box className="heading">
            <h4 className="title" style={{marginTop:0}}>Sporter som visas</h4>
            <img src={menu_icon} />
          </Box>
          <Box className={classes.menu_right}>
            {Menu.map((data) => (
              <Box className="item">
                <div className="left">
                  <img src={data.image} />
                  <span>{data.sport}</span>
                </div>
                <div className="right">
                  {/* <img src={info_gray} /> */}
                  <div className="round">
                    <input type="checkbox"  id={data.checkbox} />
                    <label for={data.checkbox}></label>
                  </div>
                </div>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SideBarMap;
