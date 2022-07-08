import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Container } from "@material-ui/core";
import { useStyles } from "./Settings.style";
import CloseIcon from "@material-ui/icons/Close";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";

import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";

const BootstrapInput = withStyles((theme) => ({
  width: "100%",

  root: {
    width: "100%",
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputBase-input": {
      border: "1px solid #93949500",
    },
  },

  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    marginBottom: "20px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    "&:focus": {
      // boxShadow: `0px 0px 0px 1px #209ca2`,
      border: "1px solid #209ca2",
      outline: "none",
    },
  },
 
}))(InputBase);

const AddPaymentDrawerContent = (props) => {
  const { handleDrawerClose } = props;
  const classes = useStyles();

  const [cardnumber, setCardnumber] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCVC] = useState("");

  const [result, setResult] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const jsondata = {
    //   name: name,
    // };
    // setResult(jsondata);
    handleDrawerClose();
    localStorage.setItem("name", name);
    localStorage.setItem("cardnumber", cardnumber);
    localStorage.setItem("month", month);
    localStorage.setItem("year", year);
    localStorage.setItem("cvc", cvc);
  };

  //  localStorage.setItem('myResult', JSON.parse(result));

  // localStorage.setItem('myResult', JSON.stringify(result));

  const isEnabled =
    name?.toString().length > 0 &&
    cardnumber?.toString().length > 0 &&
    month?.toString().length > 0 &&
    year?.toString().length > 0 &&
    cvc?.toString().length > 0;

  return (
    <>
      <Box className={classes.DrawerForm_Style}>
        <Box className="heading">
          <h1>Add Payment Method</h1>
          <CloseIcon className="close" onClick={handleDrawerClose} />
        </Box>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className={classes.formStyle}
          noValidate
        >
          <FormControl className={classes.margin}>
            <lable className="inputLabel" shrink htmlFor="cardnumber">
              Cardnumber
            </lable>
            <BootstrapInput
              //   defaultValue="Cardnumber"
              id="cardnumber"
              value={cardnumber}
              onChange={(e) => setCardnumber(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <lable className="inputLabel" shrink htmlFor="name">
              First & Last name
            </lable>
            <BootstrapInput
              //   defaultValue="Cardnumber"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
          </FormControl>
          <Box className={classes.threeInput}>
            {/* Month */}
            <FormControl className={classes.formControl}>
              <lable className="selectLable" htmlFor="uncontrolled-native">
                Month
              </lable>
              <select name="month" onChange={(e) => setMonth(e.target.value)}>
                <option> </option>
                <option value={1}>01</option>
                <option value={2}>02</option>
                <option value={3}>03</option>
                <option value={4}>04</option>
                <option value={5}>05</option>
                <option value={6}>06</option>
                <option value={7}>07</option>
                <option value={8}>08</option>
                <option value={9}>09</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
            </FormControl>
            {/* Year */}
            <FormControl className={classes.formControl}>
              <lable className="selectLable" htmlFor="uncontrolled-native">
                Year
              </lable>
              <select name="year" onChange={(e) => setYear(e.target.value)}>
                <option> </option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
              </select>
            </FormControl>
            <FormControl className={classes.margin}>
              <lable className="inputLabel" shrink htmlFor="CVC">
                CVC
              </lable>
              <BootstrapInput
                //   defaultValue="Cardnumber"
                id="CVC"
                value={cvc}
                onChange={(e) => setCVC(e.target.value)}
              />
            </FormControl>
          </Box>

          <Button
            className={`${classes.btn_primary} form_save_btn`}
            // onClick={handleDrawerOpen}
            variant="containedPrimary"
            color="primary"
            type="submit"
            disabled={!isEnabled}
          >
            Save
          </Button>
        </form>

        {/* <ul>
          {result.map((r) => (
            <li key={r?.name}>
              {r?.name} 
            </li>
          ))}
        </ul> */}
      </Box>
    </>
  );
};

export default AddPaymentDrawerContent;
