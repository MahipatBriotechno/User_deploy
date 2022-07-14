import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import logo from "../../../images/logo.svg"

import logoText from "../../../images/name_logo.svg"
import "../../../index.css"
import profile from "../../../images/icon/profile.svg"

import { Button, Grid } from "@material-ui/core"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { ReactComponent as userIcon } from "../../../images/user_logo.svg"
import Container from "@material-ui/core/Container"

import laptopIcon from "../../../images/laptop.svg"
import logoutIcon from "../../../images/logout.svg"
import loginLogo from "../../../images/sign_in.svg"
import { Select, SvgIcon, Box } from "@material-ui/core"
import DialogBox from "./DialogBox/DialogBox"
import SignIn from "./SignIn"
// import { useNavigate } from "react-router-dom";
import { Link } from "gatsby"
const IsLogin = localStorage.getItem("IsLogin")
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontFamily: "DM Sans",
    width: "100%",

    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#fff",
    },
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
  active: {
    fontWeight: "600",
    color: "#211f1f !important",
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
    fontFamily: "DM Sans",
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
}))

const theme = createTheme({
  link: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),
    fontSize: "18px",
  },
})

const userMenu = [
  {
    icon: laptopIcon,
    title: "Platform",
  },
  {
    icon: logoutIcon,
    title: "Platform",
  },
]

export default function AppBarNew() {
  
  const classes = useStyles()

  const [openDialogBox, setOpenDialogBox] = React.useState(false)
  const [isActive, setIsActive] = React.useState("")

  const handleClickOpenDialogBox = () => {
    setOpenDialogBox(true)
  }
  const handleCloseDialogBox = () => {
    setOpenDialogBox(false)
  }

  // let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
const Logout=()=>
{
  setAnchorEl(null)
  localStorage.clear()
  window.location.href="/"
}
  const handleClose = () => {
    setAnchorEl(null)
    
  }

  return (
    <>
      <div className={classes.root}>
        <Container>
          <ThemeProvider theme={theme}>
            <AppBar elevation={0} position="static" className={classes.appBar}>
              <Toolbar className={classes.name}>
                <Grid alignItems="center" container>
                  <Grid item md={2}>
                    <Link className={classes.link} to="/User/Pages/homepage">
                      <img src={logo} />
                      <img src={logoText} className={classes.appHeading} />
                    </Link>
                  </Grid>

                  <Grid item md={10}>
                    <Box className={classes.menu}>
                      <Typography className={classes.navLink}>
                        <Link to="/User/Pages/SearchClub/" className={classes.link} style={{textDecoration: "none"}}>
                          Book
                        </Link>
                        <Link
                          to="/User/Pages/FindRacqys/FindRacqys"
                          className={classes.link}
                          style={{textDecoration: "none"}}
                      
                        >
                          Find racqys
                        </Link>
                        <Link to="/User/Pages/Explorer"className={classes.link}>Explore</Link>
                      </Typography>
                      <Box className={classes.rightBtns}>
                        <Link
                          to="/User/Pages/SeeClub/DownloadApp/"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            // onClick={handleClickDownloadApp}
                            onClick={() => {
                              setIsActive("downloadApp")
                            }}
                            variant="outlined"
                            className={`${classes.lineButton} ${
                              isActive == "downloadApp" && classes.active
                            }`}
                          >
                            Download app
                          </Button>
                        </Link>
                        {IsLogin ? (
                          <>
                            <Button
                              aria-controls="simple-menu"
                              aria-haspopup="true"
                              onClick={handleClick}
                            >
                              <img src={profile} className={classes.signIn} />{" "}
                              Jakob spade
                            </Button>
                            <Menu
                              id="simple-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                            >
                              <Link
                                to="/User/Pages/MyProfile/MyProfile/"
                                style={{
                                  textDecoration: "none",
                                  color: "#000000d9",
                                }}
                              >
                                <MenuItem
                                  onClick={() => {
                                    handleClose()
                                  }}
                                >
                                  My Profile
                                </MenuItem>
                              </Link>
                              <MenuItem onClick={Logout}>Logout</MenuItem>
                            </Menu>
                          </>
                        ) : (
                          <Button onClick={handleClickOpenDialogBox}>
                            <img src={loginLogo} className={classes.signIn} />
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Grid>
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
  )
}
