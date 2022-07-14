import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Container } from "@material-ui/core";
import { useStyles } from "./SeeClub.style";
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
import profile from "../../../../images/icon/profile.svg";
import card_bg from "../../../../images/bg/card_bg.png";
import {Loader, LoaderOptions} from 'google-maps';
import RightSidebar from "./RightSidebar";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { SportMans } from "./Data_SportMans";
import {Link} from 'gatsby'
// import { useNavigate } from "react-router-dom";
import {SnazzyInfoWindow} from 'snazzy-info-window'
import GoogleMap from "../../Component/GoogleMap";
// import "snazzy-info-window.min.css"
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
const DownloadApp = () => {
  const classes = useStyles();
  const [TabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // let navigate = useNavigate();
  function navigateSeeProfile() {
    // navigate("/seeProfile");
  }
React.useEffect(()=>{
  // const loader = new Loader('AIzaSyAKe-qvRqyBHmLD53jYiRhRdETQUmBRWZI');
  //   const google = loader.load();
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 11,
  //       center: new google.maps.LatLng(40.72, -74)
  //   });

  //   var marker = new google.maps.Marker({
  //       map: map,
  //       position: new google.maps.LatLng(40.72, -74)
  //   });
    
  //   var info = new SnazzyInfoWindow({
  //       marker: marker,
  //       offset: {
  //           left: '46px'  
  //       },
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  //   });
    
  //   info.open();


},[])

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
          <Link to="/User/Pages/SeeProfile/SeeProfile/">
          <Button onClick={navigateSeeProfile} className={classes.btn_circle}></Button>
          </Link>
          <Link to="/User/Pages/SeeProfile/SeeProfile/">
          <Button onClick={navigateSeeProfile} className={classes.btn_circle}></Button>
          </Link>
          <Link to="/User/Pages/SeeProfile/SeeProfile/">
          <Button onClick={navigateSeeProfile} className={classes.btn_circle}></Button>
          </Link>
          <Link to="/User/Pages/SeeProfile/SeeProfile/">
          <Button onClick={navigateSeeProfile} className={classes.btn_circle}></Button>
          </Link>
            
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
        <GoogleMap/>
        </Box>
        <Box className={classes.mapBottomLogo}>
          <div className="logoBox">
            <img src={gtg_logo} />
          </div>
          <h4 className="title">Collector Bank Arena (GTG)</h4>
          <div className="location">
            <img src={location} />
            <span>Danderyd</span>
          </div>
          <Button variant="outlined">Book court here</Button>
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
                  <Tab label="Racqys (10)" {...a11yProps(0)} />
                  <Tab label="Spelare (5)" {...a11yProps(1)} />
                </Tabs>

                <TabPanel className="tabPanel" value={TabValue} index={0}>
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
                </TabPanel>
                <TabPanel className="tabPanel" value={TabValue} index={1}>
                  {/* Spelare (5) */}
                  <Box className={classes.sport_mans}>
                    {SportMans.map(function (data, index) {
                      return (
                        <Box
                          onClick={navigateSeeProfile}
                          className={classes.sport_mans_item}
                          key={index}
                        >
                          <img src={profile} />
                          <div className="right">
                            <h5 className="name">{data.name}</h5>
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

export default DownloadApp;
