import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo_icon from "../../../images/logo/logo_icon.svg";
import { Box, Button } from "@material-ui/core";
import SelectWithIcon from "./SelectWithIcon/SelectWithIcon";
import flagIcon from "../../../images/icon/flagIcon.svg";
import TextField from "@material-ui/core/TextField";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "500px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  heading: {
    textAlign: "center",
    padding: "30px 50px 20px",
    "& .title": {
      fontSize: "40px",
      marginBottom: 0,
      marginTop: "10px",
    },
  },
  detail: {
    borderLeft: "3px solid #209ca2",
    paddingLeft: "15px",
    fontSize: "15px",
    color: "#000000",
    fontWeight: "600",
    marginBottom: "40px",
  },

  btn_primary: {
    width: "100%",
    backgroundColor: "#209ca2",
    height: "45px",
    marginTop: "10px",
    textTransform: "capitalize",
  },
  Footer: {
    backgroundColor: "#f4f5f7",
    textAlign: "center",
    padding: "20px 0 30px",
  },
  content: {
    padding: "0px !important",
  },
  body: {
    padding: "30px 60px 40px",
  },
  inputBox: {
    padding: "0px 0px 40px",
    "& .MuiFormControl-root": {
      width: "100%",
    },
  },
  Footer_opt: {
    padding: "0px 60px 40px",
    color: "#209ca2",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "pointer",
  },
  otp_input: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "40px",
  },
  form_full: {
    width: "100%",

    "& .MuiFormControl-root": {
      width: "100%",
      marginBottom: "20px",
    },
  },
}));

const DATA_PRICE = [
  { label: "SEK", value: 1, icon: flagIcon },
  { label: "SEK", value: 2, icon: flagIcon },
  { label: "SEK", value: 3, icon: flagIcon },
];

const SignIn = (props) => {
  const { setOpenDialogBox } = props;
  const classes = useStyles();
  const [code, setCode] = useState("");
  const [step, setStep] = useState(0);

  const handleChange = (code) => setCode(code);
  const handleClickPhone = () => {
    setStep(1);
  };
  const handleClickOTP = () => {
    setStep(2);
  };

  let navigate = useNavigate();
  function handleClickNavigate() {
    setOpenDialogBox(false);
    navigate("/seeClub");
  }

  return (
    <>
      {step == 0 && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={classes.heading}>
                <img src={logo_icon} />
                <h1 className="title">Logga in eller Skapa konto</h1>
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.content}>
              <Box className={classes.body}>
                <Box className={classes.inputBox}>
                  <TextField
                    id="outlined-basic"
                    // label="Name"
                    placeholder="Telefonnummer"
                    variant="outlined"
                  />
                </Box>

                <Box className={classes.detail}>
                  <p className="detail">
                    Ange ditt telefonnummer ovan för att gå vidare. Vi skickar
                    ett sms med en verifieringskod.
                  </p>
                </Box>
                <Button
                  className={`${classes.btn_primary} btn_full`}
                  onClick={handleClickPhone}
                  variant="containedPrimary"
                  color="primary"
                  // autoFocus
                  // disabled={!isEnabled}
                >
                  Slutför bokning
                </Button>
              </Box>
              <Box className={classes.Footer}>
                <p className="detail">Vill du logga in som Klubb? Klicka här</p>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
      {step == 1 && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={classes.heading}>
                <img src={logo_icon} />
                <h1 className="title">Välkommen tillbaka!</h1>
                <p>
                  Vi har skickat en sexsiffrig-kod via sms till +46763985750.
                  Vänligen ange koden för att logga in.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.content}>
              <Box className={classes.body}>
                <Box className={classes.otp_input}>
                  <OtpInput
                    value={code}
                    onChange={handleChange}
                    numInputs={6}
                    separator={<span style={{ width: "8px" }}></span>}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{
                      border: "1px solid #CFD3DB",
                      borderRadius: "5px",
                      width: "48px",
                      height: "48px",
                      fontSize: "20px",
                      color: "#000",
                      fontWeight: "500",
                      caretColor: "blue",
                      marginBottom: "20px",
                      outline: "none",
                    }}
                    focusStyle={{
                      border: "1px solid #209ca2",
                    }}
                  />
                </Box>

                <Button
                  className={`${classes.btn_primary} btn_full`}
                  onClick={handleClickOTP}
                  variant="containedPrimary"
                  color="primary"
                  // autoFocus
                  // disabled={!isEnabled}
                >
                  Logga in
                </Button>
              </Box>
              <Box className={classes.Footer_opt}>
                <p className="detail">Fick du inget sms? Testa igen</p>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
      {step == 2 && (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={classes.heading}>
                <img src={logo_icon} />
                <h1 className="title">Välkommen till Racqy!</h1>
                <p>
                  Skriv in ditt namn. Vill du ha komplettera ditt konto med mer
                  information och använda utökad funktioner behöver du ladda ner
                  appen här
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.content}>
              <Box className={classes.body}>
                <form
                  className={`${classes.root} ${classes.form_full} ${classes.form_Logga}`}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Förnamn"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Efternamn"
                    variant="outlined"
                  />
                </form>

                <Button
                  className={`${classes.btn_primary} btn_full`}
                  onClick={handleClickNavigate}
                  variant="containedPrimary"
                  color="primary"
                  // autoFocus
                  // disabled={!isEnabled}
                  style={{ margin: "30px 0 20px" }}
                >
                  Skapa konto
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default SignIn;
