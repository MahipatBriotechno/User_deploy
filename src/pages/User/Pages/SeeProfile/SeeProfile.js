import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Container } from "@material-ui/core";
import { useStyles } from "./SeeProfile.style";
import Appbar from "../../Component/Appbar"
import Footer from "../../Component/Footer"
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
import julianwanWNoL from "../../../../images/icon/julian-wan-WNoL.svg";
import profile from "../../../../images/icon/profile.svg";
import card_bg from "../../../../images/bg/card_bg.png";
import info_gray from "../../../../images/icon/info_gray.svg";
import home from "../../../../images/icon/home.svg";
import hart from "../../../../images/icon/AddtoFavourites.svg";

import RightSidebar from "./RightSidebar";

import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { DataBanks, SportMans } from "./Data_SeeProfile";
import { Link } from "gatsby";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Main Component
const SeeProfile = () => {
  const classes = useStyles();
  const [TabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

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
            <Button className={classes.btn_circle}></Button>
            <Button className={classes.btn_circle}></Button>
            <Button className={classes.btn_circle}></Button>
            <Button className={classes.btn_circle}></Button>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
    <Appbar/>
    <div className={classes.root_main}>
      <Grid item xs={12}>
        <Box className={classes.mapBox}>
          <img src={map} />
        </Box>
        <Box className={classes.mapBottomLogo}>
          <div className="logoBox">
            <img src={julianwanWNoL} />
          </div>
          <h4 className="title">Jakob spade</h4>
          <div className="location">
            <img src={location} />
            <span>Danderyd</span>
          </div>
          <p className="ptag">
            Hobbyspelare som spelat hela livet och vill hitta nya personer att
            spela med.
          </p>
        </Box>
      </Grid>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={5}>
            {/* Left Side  */}
            <Grid item md={8} xs={8} sm={3}>
              <Box className={classes.tabs_style}>
                <Tabs
                  value={TabValue}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab label="Vänner  (63)" {...a11yProps(0)} />
                  <Tab label="Favorit anläggningar (5)" {...a11yProps(1)} />
                </Tabs>

                <TabPanel className="tabPanel" value={TabValue} index={0}>
                  {/* Spelare (5) */}
                  <Box className={classes.sport_mans}>
                    {SportMans.map(function (data, index) {
                      return (
                        <Box className={classes.sport_mans_item} key={index}>
                          <Link to="/User/Pages/MyProfile/MyProfile/">
                           <img src={profile} />
                          </Link>
                          
                          <div className="right">
                            <Link to="/User/Pages/MyProfile/MyProfile/" style={{textDecoration:'none'}}>
                            <h5 className="name">{data.name}</h5>
                            </Link>
                            
                            <span>{data.km}</span>
                            <div className="images">
                              {data.sports.map((img) => (
                                <img src={img} />
                              ))}
                            </div>
                          </div>
                        </Box>
                      );
                    })}
                  </Box>
                </TabPanel>
                <TabPanel className="tabPanel" value={TabValue} index={1}>
                  {/* Favorit anläggningar (5) */}

                  <Box className={classes.profile_home_items}>
                    {DataBanks.map((data) => (
                      <Box className={classes.profile_home_item}>
                        <Box className="item">
                          <div className="left">
                            <img src={home} />
                            <div className="text">
                              <h5 className="title">{data.title}</h5>
                              <span>{data.subtitle}</span>
                            </div>
                          </div>
                          <div className="right">
                            <img src={hart} />
                          </div>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </TabPanel>
              </Box>
            </Grid>

            {/* Right Sidebar  */}
            <RightSidebar />
          </Grid>
        </Container>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default SeeProfile;
