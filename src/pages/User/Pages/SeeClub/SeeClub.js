import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { Box, Container } from "@material-ui/core"
import { useStyles } from "./SeeClub.style"
import Appbar from "../../Component/Appbar"
import Footer from "../../Component/Footer"
import Squash from "../../../../images/sport/Squash.svg"
import tennis from "../../../../images/sport/tennis.svg"
import Padel from "../../../../images/sport/Padel.svg"
import Golf from "../../../../images/sport/Golf.svg"
import Badminton from "../../../../images/sport/Badminton.svg"
import map from "../../../../images/bg/map.svg"
import gtg_logo from "../../../../images/logo/gtg-logo.svg"
import location from "../../../../images/icon/location.svg"
import RightSidebar from "./RightSidebar"
import Shedule from "../../../Shedule/index"
import GoogleMap from "../../Component/GoogleMap"
const SeeClub = () => {
  const classes = useStyles()

  return (
    <div className={classes.root_main}>
      <Appbar/>
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
        </Box>
      </Grid>
      <div className={classes.root}>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={8} xs={8} sm={3}>
              <Paper className={classes.paper}>Sport, date, filter</Paper>
            </Grid>

            <div style={{ display: "flex", columnGap: "40px" }}>
              <Shedule />

              <RightSidebar />
            </div>
          </Grid>
        </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default SeeClub
