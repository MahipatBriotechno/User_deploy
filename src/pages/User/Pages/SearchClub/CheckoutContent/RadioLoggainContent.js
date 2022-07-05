import React, { useState } from "react";
import { useStyles } from "./CheckoutContent.style";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";
import OtpInput from "react-otp-input";

const RadioLoggainContent = (props) => {
  const {setLayout} =props;
  const classes = useStyles();

  const [code, setCode] = useState("");
 

  const [step, setStep] = useState(0);

  const handleClickPhone = () => {
    setStep(1);
  };
  const handleClickOTP = () => {
    setStep(2);
  };
  const handleClickUserDetail = () => {
    setLayout(true);
  };
  

  const handleChange = (code) => setCode(code);

  const isEnabled = code.length == 6;

  return (

    <>
      <form
        className={`${classes.root} ${classes.form_full} ${classes.form_Logga}`}
        noValidate
        autoComplete="off"
      >
        {/* 1. Phone Number */}
        {step == 0 && (
          <>
            <TextField
              id="outlined-basic"
              // label="Name"
              placeholder="Telefonnummer"
              variant="outlined"
            />
            
            <Button
              className={`${classes.btn_primary} btn_full`}
              onClick={handleClickPhone}
              variant="containedPrimary"
              color="primary"
              // autoFocus
              // disabled
            >
              Slutför bokning
            </Button>
          </>
        )}
        {/* 2. OTP */}
        {console.log("code", code.length)}
        {step == 1 && (
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
                outline: 'none',
              }}
              focusStyle={{
                border: "1px solid #209ca2",
              }}
            />

            <Button
              className={`${classes.btn_primary} btn_full`}
              onClick={handleClickOTP}
              variant="containedPrimary"
              color="primary"
              // autoFocus
              disabled={!isEnabled}
            >
              Fortsätt
            </Button>
            <h5 className="green-text">Fick du inget sms? Testa igen</h5>
          </Box>
        )}
        {/* 3. inputs  */}
        {step == 2 && (
          <>
            <h5>Vänligen ange dina personuppgifter:</h5>

            <form
              className={`${classes.root} ${classes.form_full} `}
              noValidate
              autoComplete="off"
            >
              <Box className={classes.input_50per}>
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
              </Box>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
            </form>

            <Button
              className={`${classes.btn_primary} btn_full`}
              onClick={handleClickUserDetail}
              variant="containedPrimary"
              color="primary"
              // autoFocus
              // disabled
            >
              Skapa konto
            </Button>
          </>
        )}
      </form>
    </>
  );
};

export default RadioLoggainContent;
