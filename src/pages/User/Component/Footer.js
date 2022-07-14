import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Button, ButtonProps } from "@material-ui/core";
import footerLogo from "../../../images/footerimage.jpeg";
import CustomButton from "./CustomButton";
import fb from "../../../images/fb.svg";
import insta from "../../../images/insta.svg";
import tiktok from "../../../images/tiktok.svg";
import linkdin from "../../../images/linkdin.svg";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "DM Sans",
    width: "100%",
    position: "absolute",
  },
  boxStyle: {
    background: "white",
    padding: "50px 0px",
    color: "#979D9D",
    fontFamily: "DM Sans",
    width: "100%",
  },
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerLg: {
    width: "50px",
    height: "50px",
    margin: "5px",
  },
  footerHeading: {
    fontWeight: "normal",
    color: "#211F1F",
    marginBottom: "5px",
    alignItems: "center",
  },
  firstCol: {
    fontSize: "10px",
  },
  secondCol: {
    fontSize: "15px",
    fontFamily: "DM Sans",
    alignItems: "center",
    color: '#979d9d',
    marginBottom: '8px'
  },
  footerSocial: {
    width: "40px",
    height: "40px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid
          className={classes.boxStyle}
          spacing={25}
          maxWidth="xs"
          justifyContent="space-between"
          container
        >
          <Grid item>
            <img
              src={footerLogo}
              alt="footerLogo"
              className={classes.footerLg}
            />
            <Typography className={classes.firstCol}>
              Birger Jarlsgatan 2<br />
              114 24, Stockholm, Sweden
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.footerHeading}>Compony</Typography>
            <Typography className={classes.secondCol}>About</Typography>
            <Typography className={classes.secondCol}>Press</Typography>
            <Typography className={classes.secondCol}>Invset</Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.footerHeading}>Legal</Typography>
            <Typography className={classes.secondCol}>
              Terms and conditions
            </Typography>
            <Typography className={classes.secondCol}>
              Privacy policy
            </Typography>
            <Typography className={classes.secondCol}>
              Cookies policy
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.footerHeading}>Platform</Typography>
            <Typography className={classes.secondCol}>Language</Typography>
            <Typography className={classes.secondCol}>Download App</Typography>
            <Typography className={classes.secondCol}>Help</Typography>
          </Grid>
          <Grid>
            <CustomButton text="Racqy players" />
          </Grid>
          <Grid xs={1}>
            <img src={insta} className={classes.footerSocial} />
            <img src={linkdin} className={classes.footerSocial} />
            <Grid>
              <img src={tiktok} className={classes.footerSocial} />
              <img src={fb} className={classes.footerSocial} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
