import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import bookingConfirm from "../../../../images/bg/bookingConfirm.svg";
import calender from "../../../../images/booking/calender.svg";
import clock from "../../../../images/booking/clock.svg";
import credit_card from "../../../../images/booking/credit-card.svg";
import marker from "../../../../images/booking/marker.svg";
import reket from "../../../../images/booking/reket.svg";
import logo_icon from "../../../../images/logo/logo_icon.svg";
import { Box, Button } from "@material-ui/core";
import { borderRadius } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  page_body: {
    backgroundColor: "#f9fafc",
    padding: '40px 0'
  },
  root: {
    flexGrow: 1,
    "& h1, h2, h3, h4, h5, h6, p": {
      margin: "0 0 15px",
      fontFamily: "dm sans",
    },
  },
  paper_main: {
    padding: "50px",
    paddingTop: "30px",
    color: theme.palette.text.secondary,
    margin: "0px auto",
    boxShadow: "0px 0px 3px 0px #808080b5",
    maxWidth: "950px",
  },
  paper: {
    padding: "30px",
    color: theme.palette.text.secondary,
    boxShadow: "0px 0px 3px 0px #808080b5",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    rowGap: "40px",

    "& .icon": {
      width: "51px",
      height: "51px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e1f3f5",
      borderRadius: "15px",
    },
    "& .spanText": {
      color: "#b4b4b4",
      fontSize: "13px",
    },
    "& .title": {
      color: "#000",
      fontSize: "14px",
    },
  },

  item_group: {
    display: "flex",
    flexDirection: "column",
    rowGap: "30px",
    "& .btn_full": {
      width: "100%",
      backgroundColor: "#209ca2",
      height: "45px",
      marginTop: "10px",
      textTransform: "capitalize",
    },
  },
  title: {
    "& .title": {
      fontSize: "40px",
      color: "#000000",
      marginBottom: "40px",
    },
    "& .detail": { fontSize: "18px", color: "#000000", marginBottom: "50px" },
  },
  bgimg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "250px",
      maxWidth: "100%",
    },
  },
  top_sec: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "30px",
  },
}));

const BookingConfirmed = () => {
  const classes = useStyles();

  const Item = ({ image, spanText, title }) => {
    return (
      <Box className={`${classes.item}  `}>
        <div className="icon">
          <img src={image} />
        </div>
        <div>
          <span className="spanText">{spanText}</span>
          <h5 className="title">{title}</h5>
        </div>
      </Box>
    );
  };

  return (
    <Box className={classes.page_body}>
      <Container>
        <div className={classes.root}>
          <Paper className={classes.paper_main}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box className={classes.top_sec}>
                  <img src={logo_icon} />
                  <h5>Gå till startsidan</h5>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Grid item xs={8}>
                  <Box className={classes.title}>
                    <h1 className="title">Klart! Din bokning är bekräftad.</h1>
                    <p className="detail">
                      Du kommer snart att få en bekräftelse via e-post med dina
                      bokningsuppgifter.
                    </p>
                  </Box>
                </Grid>
                <Grid item xs={4}></Grid>
                <Paper className={classes.paper}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Box className={classes.item_group}>
                        <Item
                          image={marker}
                          spanText="Klubb"
                          title="Collector Bank Arena (GTG)"
                        />
                        <Item
                          image={calender}
                          spanText="Datum"
                          title="Onsdag, 25 maj 2022"
                        />
                        <Item
                          image={credit_card}
                          spanText="Pris"
                          title="250 kr"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box className={classes.item_group}>
                        <Item
                          image={reket}
                          spanText="Bana"
                          title="Bana 2, Tennis"
                        />
                        <Item
                          image={clock}
                          spanText="Tid"
                          title="16:00 - 17:00"
                        />
                        <Button
                          className={`${classes.btn_primary} btn_full`}
                          // onClick={handleClickNavigate}
                          variant="containedPrimary"
                          color="primary"
                          // autoFocus
                          // disabled={!isEnabled}
                        >
                          Dela bokningsdetaljer
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={4} className={classes.bgimg}>
                <img src={bookingConfirm} />
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </Box>
  );
};

export default BookingConfirmed;
