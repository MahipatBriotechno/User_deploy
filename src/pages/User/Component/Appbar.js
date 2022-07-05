import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../../../images/logo.svg";

import logoText from "../../../images/name_logo.svg";
import "../../../index.css";

import { Button, Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ReactComponent as userIcon } from "../../../images/user_logo.svg";
import Container from "@material-ui/core/Container";

import laptopIcon from "../../../images/laptop.svg";
import logoutIcon from "../../../images/logout.svg";
import loginLogo from "../../../images/sign_in.svg";
import { Select, SvgIcon, Box } from "@material-ui/core";
import DialogBox from "./DialogBox/DialogBox";
import SignIn from "./SignIn";
import {Link} from 'gatsby'
// import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "DM Sans",
    width: "100%",
  },
  appBar: {
    backgroundColor: "#FFFFFF",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    // marginBottom: 15,
    // height: '8vh',
    "& .MuiToolbar-regular": {
      minHeight: "50px",
    },
    "& .MuiToolbar-gutters": {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
    width: "100%",
  },
  appHeading: {
    marginLeft: "7px",
    marginTop: "7px",
    alignItems: "center",
  },
  name: {
    // marginLeft: "100px",
    // marginRight: "15px",
    // paddingRight: "15px",
  },
  navLink: {
    color: "#000000",
    // paddingLeft: "110px",
    display: "flex",
    gap: "50px",
  },
  link: {
    textTransform: "unset",
    color: "#a5a5a5",
    textDecoration: "unset",
    cursor: "pointer",
  },
  signIn: {
    height: "25px",
  },
  dialog_custom_style: {
    "& .MuiDialog-paperWidthSm": {
      maxWidth: "100%",
      overflowX: "hidden",
      overflow: "hidden",
      borderRadius: "15px",
    },
  },
  rightBtns: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },
  menu: {
    display: "flex",
    alignItems: "center",
  },
}));

const theme = createTheme({
  link: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
    fontSize: "18px",
  },
});

const userMenu = [
  {
    icon: laptopIcon,
    title: "Platform",
  },
  {
    icon: logoutIcon,
    title: "Platform",
  },
];

export default function AppBarNew() {
  const classes = useStyles();

  const [openDialogBox, setOpenDialogBox] = React.useState(false);

  const handleClickOpenDialogBox = () => {
    setOpenDialogBox(true);
  };
  const handleCloseDialogBox = () => {
    setOpenDialogBox(false);
  };

  // let navigate = useNavigate();
  function handleClickDownloadApp() {
    // navigate("/downloadApp");
    // alert('hello')
  }

  return (
    <>
      <div className={classes.root}>
        <Container>
          <ThemeProvider theme={theme}>
            <AppBar elevation={0} position="static" className={classes.appBar}>
              <Toolbar className={classes.name}>
                <Grid
                  // justifyContent="space-around"
                  alignItems="center"
                  container
                >
                  <Grid item md={2}>
                    <img src={logo} />
                    <img src={logoText} className={classes.appHeading} />
                  </Grid>

                  <Grid item md={10}>
                    <Box className={classes.menu}>
                      <Typography className={classes.navLink}>
                        <Link className={classes.link}>Book</Link>
                        <Link className={classes.link}>Find racqys</Link>
                        <Link className={classes.link}>Explore</Link>
                      </Typography>
                      <Box className={classes.rightBtns}>
                      <Link to="/User/Pages/SeeClub/DownloadApp/" style={{textDecoration:'none'}}>
                        <Button
                          onClick={handleClickDownloadApp}
                          variant="outlined"
                          className={classes.lineButton}
                        >
                          Download app
                        </Button>
                        </Link>
                        <Button onClick={handleClickOpenDialogBox}>
                          <img src={loginLogo} className={classes.signIn} />
                        </Button>
                      </Box>
                    </Box>
                  </Grid>

                  {/* <Grid item xs={2}>
                    <Button
                      onClick={handleClickDownloadApp}
                      variant="outlined"
                      className={classes.lineButton}
                    >
                      Download app
                    </Button>
                  </Grid>
                  <Grid item xs={2}>
                    <Button onClick={handleClickOpenDialogBox}>
                      <img src={loginLogo} className={classes.signIn} />
                    </Button>
                  </Grid> */}
                </Grid>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Container>
      </div>

      {/* Sign In DialogBox */}
      <DialogBox
        open={openDialogBox}
        handleClose={handleCloseDialogBox}
        DialogTitle=""
        subTitle=""
        content={<SignIn setOpenDialogBox={setOpenDialogBox} />}
        topLogo=""
        dialog_custom_style={classes.dialog_custom_style}
      />
    </>
  );
}


