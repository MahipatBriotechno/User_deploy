import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Container } from "@material-ui/core";
import { useStyles } from "./FindRacqys.style";
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import FormControl from "@material-ui/core/FormControl";

import Squash from "../../../../images/sport/Squash.svg";
import tennis from "../../../../images/sport/tennis.svg";
import tennis_white from "../../../../images/icon/tennis_white.svg";
import Padel from "../../../../images/sport/Padel.svg";
import Golf from "../../../../images/sport/Golf.svg";
import Badminton from "../../../../images/sport/Badminton.svg";
import map from "../../../../images/bg/map.svg";
import gtg_logo from "../../../../images/logo/gtg-logo.svg";
import location from "../../../../images/icon/location.svg";
import location_dark from "../../../../images/icon/location_dark.svg";
import dot from "../../../../images/icon/dot.svg";
import calander from "../../../../images/icon/calander.svg";
import profile from "../../../../images/icon/profile.svg";
import smile from "../../../../images/icon/smile.svg";
import card_bg from "../../../../images/bg/card_bg.png";
import Appbar from "../../Component/Appbar"
import Footer from "../../Component/Footer"
import RightSidebar from "./RightSidebar";

import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { SportMans } from "./Data_FindRacqys";
// import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import { Link as NavLink } from 'gatsby'

const BootstrapInput = withStyles((theme) => ({
  width: "100%",

  root: {
    width: "100%",
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },

  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "330px",
    maxWidth: "100%",
    padding: "10px 12px",
    // marginBottom: "20px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.

    "&:focus": {
      // boxShadow: `0px 0px 0px 1px #209ca2`,
      border: "1px solid #209ca2",
      outline: "none",
    },
  },
}))(InputBase);

// Main Component
const FindRacqys = () => {
  const classes = useStyles();

  // let navigate = useNavigate();
  function navigateSeeProfile() {
    // navigate("/seeProfile");
  }

  const Card = () => {
    return (
     
      <Box className={classes.cardRounded}>
        <Box className="header" style={{ backgroundImage: `url(${card_bg})` }}>
          <Box className="top">
            <img src={tennis_white} />
            <span>2 km bort</span>
          </Box>
          <Box className="bottom">
            <h5>Tennis</h5>
            <img src={dot} />
            <h5>Match</h5>
          </Box>
        </Box>
        <Box className="body">
          <Box className="left">
            <div className="item">
              <img src={location_dark} />
              <h5>Catella Arena</h5>
            </div>
            <div className="item">
              <img src={calander} />
              <h5>Imorgon, 11:00-12:00</h5>
            </div>
            <div className="numbers">
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </Box>
          <Box className="right">
            <Button
              // onClick={navigateSeeProfile}
              className={classes.btn_circle}
            ></Button>
            <Button
              // onClick={navigateSeeProfile}
              className={classes.btn_circle}
            ></Button>
            <Button
              // onClick={navigateSeeProfile}
              className={classes.btn_circle}
            ></Button>
            <Button
              // onClick={navigateSeeProfile}
              className={classes.btn_circle}
            ></Button>
          </Box>
        </Box>
      </Box>
    );
  };

  const Item = ({ image, title, content, bg, mb }) => {
    return (
      <Box className={classes.iconWithText} style={{ marginBottom: mb }}>
        <div className="item">
          <div className={`imgBox `} style={{ backgroundColor: bg }}>
            <img src={image} />
          </div>
          <h5 className="title">{title}</h5>
        </div>
        <div className="content">{content && content}</div>
      </Box>
    );
  };

  return (
    <div className={classes.root_main}>
      <Appbar/>
      <div className={classes.bannerSection}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Item bg="#e1f3f5" title="Find racqys" image={smile} />
            </Grid>
            <Grid item xs={12}>
              <form
                // onSubmit={(e) => handleSubmit(e)}
                className={classes.formStyle}
                noValidate
              >
                <FormControl className={classes.margin}>
                  <BootstrapInput
                    //   defaultValue="Cardnumber"
                    id="bootstrap-input"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    placeholder="Skriv din plats…"
                  />
                </FormControl>

                <Button
                  className={classes.btn_primary}
                  variant="containedPrimary"
                  color="primary"
                  // autoFocus
                  // disabled
                >
                  Search
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.root_content}>
        <Container>
          <Grid container spacing={5}>
            {/* Left Side  */}
            <Grid item md={8} xs={8} sm={3}>
              <Box className={classes.tabs_style}>
                {/* Racqys (10) */}
                <Box className={classes.cards}>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </Box>
                <Box
                  className={classes.pagination_style}
                  style={{ marginTop: "40px" }}
                >
                  <Pagination count={10} shape="rounded" />
                </Box>
              </Box>
            </Grid>

            {/* Right Sidebar  */}
            <RightSidebar />
          </Grid>
        </Container>
      </div>
      <Footer/>
    </div>
  );
};

export default FindRacqys;
