import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Container } from "@material-ui/core";
import { useStyles } from "./Settings.style";
import CloseIcon from "@material-ui/icons/Close";
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
import location_green from "../../../../images/icon/location_green.svg";
import dot from "../../../../images/icon/dot.svg";
import calander from "../../../../images/icon/calander.svg";
import julianwanWNoL from "../../../../images/icon/julian-wan-WNoL.svg";
import profile from "../../../../images/icon/profile.svg";
import card_bg from "../../../../images/bg/card_bg.png";
import info_gray from "../../../../images/icon/info_gray.svg";
import home from "../../../../images/icon/home.svg";
import hart from "../../../../images/icon/AddtoFavourites.svg";
import setting from "../../../../images/icon/setting.svg";
import world_icon from "../../../../images/icon/world_icon.svg";
import Svenska from "../../../../images/icon/Svenska.svg";
import logout from "../../../../images/icon/logout.svg";
import rightArrow from "../../../../images/icon/rightArrow.svg";

import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { DataBanks, SportMans } from "./Data_Settings";
import DrawerRight from "../../Component/Drawer/DrawerRight";
import AddPaymentDrawerContent from "./AddPaymentDrawerContent";
import EditPaymentDrawerContent from "./EditPaymentDrawerContent";

const Setting = () => {
  const classes = useStyles();

  const [AddDrawerOpen, setAddDrawerOpen] = useState(false);
  const [EditDrawerOpen, setEditDrawerOpen] = useState(false);

  const handleAddDrawerOpen = () => {
    setAddDrawerOpen(true);
  };
  const handleAddDrawerClose = () => {
    setAddDrawerOpen(false);
  };
  const handleEditDrawerOpen = () => {
    setEditDrawerOpen(true);
  };
  const handleEditDrawerClose = () => {
    setEditDrawerOpen(false);
  };

  // const result = localStorage.getItem("myResult");

  // try {
  //   // const result = JSON.parse(undefined);
  //   const result = JSON.parse(localStorage.getItem('myResult'));
  //   console.log("result", result);
  // } catch (err) {
  //   // 👇️ This runs
  //   console.log('Error: ', err.message);
  // }

  // const result = JSON.parse(localStorage.getItem('myResult'));
  // console.log("result", result);

  const name = localStorage.getItem("name");
  const cardnumber = localStorage.getItem("cardnumber");
  const month = localStorage.getItem("month");
  const year = localStorage.getItem("year");

  console.log("name", name);

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
  const FormDataDisplay = ({ lable, data }) => {
    return (
      <Box className={classes.formDataDisplay}>
        <Box className="lable">
          <h5>{lable}</h5>
        </Box>
        <Box>
          <h5>{data}</h5>
        </Box>
      </Box>
    );
  };
  return (
    <div className={classes.root_main}>
      <Appbar/>
      <div className={classes.bannerSection}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <h1 className={classes.pageHeading}>Settings</h1>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.root_body_setting}>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={5}>
              {/* 1 */}
              <Box className={classes.settingBox}>
                <Item
                  title="Betalningsmetod"
                  image={world_icon}
                  content={name !== null && name?.toString().length > 0 && <span onClick={handleEditDrawerOpen}>Change</span>}
                />
                {name == null && (
                  <Box className={classes.centerBtn}>
                    <Button
                      className={classes.btn_primary}
                      onClick={handleAddDrawerOpen}
                      variant="containedPrimary"
                      color="primary"
                      // autoFocus
                      // disabled
                    >
                      Add payment method
                    </Button>
                  </Box>
                )}
                {name !== null && name?.toString().length > 0 && (
                  <Box style={{ paddingTop: "30px" }}>
                    {/* <FormDataDisplay lable="Issuer:" data={cardnumber} /> */}
                    <FormDataDisplay lable="Name:" data={name} />
                    <FormDataDisplay lable="Card Number:" data={cardnumber} />
                    <FormDataDisplay lable="Expires:" data={`${month}/${year}`} />
                  </Box>
                )}

                {/* {result && result.map((r) => (
                  <li>{r.name}</li>
                ))} */}
              </Box>
              {/* 2 */}
              <Box className={classes.settingBox}>
                <Item
                  title="Svenska"
                  image={Svenska}
                  content={<span>Ändra språk</span>}
                  mb="25px"
                />
                <Item
                  bg="#ffebef"
                  title="Logga ut"
                  image={logout}
                  content={<img src={rightArrow} />}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <DrawerRight
        DrawerOpen={AddDrawerOpen}
        content={
          <AddPaymentDrawerContent handleDrawerClose={handleAddDrawerClose} />
        }
      />
      <DrawerRight
        DrawerOpen={EditDrawerOpen}
        content={
          <EditPaymentDrawerContent handleDrawerClose={handleEditDrawerClose} />
        }
      />
      <Footer/>
    </div>
  );
};

export default Setting;
