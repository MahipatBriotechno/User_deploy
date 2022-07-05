import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "1000px",
    maxWidth: "100%",
    "& h1, h2, h3, h4, h5, h6, p": {
      margin: "0 0 15px",
      fontFamily: "dm sans",
    },
  },

  container: {
    padding: "0 24px 16px",
  },
  left: {
    backgroundColor: "#f9fafc",
    display: "flex",
    flexDirection: "column",
  },
  left_body: {
    padding: "0 10px",
  },
  right: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  right_body: {
    padding: "0px 20px 0px 40px",
  },
  heading: {
    fontSize: "25px",
    "& h3": {
      margin: "0 0 15px",
    },
  },
  selected_sport_detail: {
    backgroundColor: "#fff",
    borderLeft: "5px solid #209ca2",
    padding: "20px 20px 10px",
    borderRadius: "10px",
    boxShadow: "0px 0 2px 0px grey",
    marginBottom: "22px",
    "& select": {
      border: "1px solid #dfdfe2",
      padding: "2px",
      borderRadius: "4px",
      cursor: "pointer",
    },

    "& .MuiListItemText-secondary": {
      margin: "0 0 0 !important",
    },

    "& .list": {
      display: "flex",
      gap: "15px",
      fontSize: "18px",
      marginBottom: "15px",

      "& span": {
        color: "#b4b4b4",
      },
      "& img": {
        width: "20px",
      },
      "& .title": {
        display: "flex",
        gap: "5px",
        alignItems: "center",
        fontSize: "18px",
        fontFamily: "dm sans",
        "& h5": {
          marginBottom: 0,
        },
      },
    },
  },

  // Collaps Section
  collaps_style: {
    borderLeft: "none",
    paddingTop: 10,
    "& .MuiListItem-gutters": {
      padding: "0",
    },
    "& .MuiListItemIcon-root": {
      minWidth: "38px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
      margin: "10px 0 15px",
    },
    "& .close_icon": {
      position: "absolute",
      marginTop: "25px",
      marginLeft: "-35px",
      cursor: "pointer",
    },
    "& .add_spelare": {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "#209ca2",
      fontSize: "14px",
      cursor: "pointer",
      fontWeight: "500",
    },

    "& .MuiTypography-body1": {
      fontSize: "16px",
      fontWeight: "500",
    },
    "& .MuiListItemText-secondary": {
      fontSize: "14px",
      color: "#b4b4b4",
    },
  },

  //   Right Side Checkout
  radio_showhide: {
    padding: 0,
    borderLeft: "none",
    "& .radiooo_btn": {
      borderBottom: "2px solid #dfdfe3",
      "&:last-child": {
        borderBottom: "none",
      },
    },
    "& .lable": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "& .radio_and_lable": {
      display: "flex",
      gap: "8px",
    },
    "& .card_img": {
      display: "flex",
      gap: "5px",
      "& .greenText": {
        color: "#209ca2",
        fontSize: "14px",
        fontWeight: 600,
      },
    },
    "& .labale_and_sublable": {
      display: "flex",
      gap: "10px",
      "& label": {
        display: "block",
        fontSize: "16px",
        color: "#000",
        fontWeight: 600,
      },
      "& .smallLable": {
        display: "block",
        fontSize: "14px",
        color: "#b4b4b4",
        fontWeight: 500,
      },
    },
    "& .content": {
      "& span.sublable": {
        display: "block",
        fontSize: "14px",
        color: "#b4b4b4",
        position: "absolute",
        fontSize: "12px",
        marginTop: "-24px",
        marginLeft: "29px",
      },
    },
  },
  radio_button: {
    // boxShadow: '0 1px 0 0 gray',
    marginBottom: 0,
    padding: "15px",
    "& .lable": {
      display: "flex",
      gap: "10px",
      // marginBottom: '10px',
    },
    "& .content": {
      marginTop: "20px",
      display: "flex",
      gap: "10px",
    },
    "& .active": {
      display: "block",
    },
    "& .none": {
      display: "none",
    },
  },
  form_full: {
    "& .MuiFormControl-root": {
      width: "100%",
      marginBottom: "15px",
    },
  },
  // radio_showhide: {

  // }

  bottom_btn_content: {
    // paddingTop: 50,
    padding: "40px 20px 0px 40px",
    "& .btn_full": {
      width: "100%",
      backgroundColor: "#209ca2",
      height: "45px",
      marginTop: "10px",
      textTransform: 'capitalize'
    },
    "& .title": {
      marginBottom: "0px",
      fontSize: "20px",
    },
    "& .subtitle": {
      color: "#b4b4b4",
      fontSize: "16px",
    },
    "& .footer": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 0 0",
      gap: "10px",
      "& span": {
        color: "#d6d6d8",
        fontSize: "13px",
      },
    },
  },

  // CVC Input
  cvc_input: {
    display: "flex",
    boxShadow: "0px 0 2px 0px grey",
    // marginTop: "20px",
    borderRadius: "5px",

    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInputBase-input": {
      fontSize: "14px",
    },
    "& .MuiInput-root": {
      padding: "5px 10px",
    },
  },
  input_1: {
    width: "47%",
  },
  input_2: {
    width: "27%",
  },
  input_3: {
    width: "25%",
  },
  form_full: {
    "& .MuiFormControl-root": {
      width: "100%",
      marginBottom: "15px",
    },
  },

  form_Logga: {
    "& .btn_full": {
      width: "100%",
      backgroundColor: "#209ca2",
      height: "45px",
      textTransform: 'capitalize'
    },
  },
  input_50per: {
    display: "flex",
    gap: "15px",
  },

  otp_input: {

    "& .green-text": {
      color: "#209ca2",
      margin: "15px 0 0",
      cursor: "pointer",
    },
    "& .MuiOutlinedInput-input": {
      color: "#209ca2",
      margin: "15px 0 0",
      cursor: "pointer",
    },
    // "& .Mui-focused": {
    //   backgroundColor: "#209ca2 !important",
    // },
  },

  "& .dialog_custom_style": {
    "& #alert-dialog-title, .kwekjd": {
      position: "absolute",
    },
  },
  footer_text: {
    display: "flex",
    gap: "15px",
    marginTop: "auto",
    padding: "0 10px",
    "& h5": {
      marginBottom: "0 !important",
      fontSize: "15px",
    },
    "& span": {
      fontSize: "14px",
      color: "#b4b4b4",
    },
  },
  
}));

export { useStyles };
