import { makeStyles } from "@material-ui/core/styles";
import { ButtonColor } from "../GlobalTheme";


const useStyles = makeStyles((theme) => ({
  pagination_style: {
    display: "flex",
    justifyContent: "center",
    margin: "40px 0",
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },

  root: {
    flexGrow: 1,
  
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  hedding: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "40px 0 10px",
    "& img": {},
    "& .title": {
      fontSize: 24,
      color: "#0a3133",
    },
  },
  filters: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    padding: "0px 0 50px",
    "& .select, .makeStyles-btn_AutoComp-44": {
      backgroundColor: '#fff !important',
      border: '1px solid #c4c4c4',
    },
    "& .MuiButton-containedPrimary": {
      height: '52px',
    }


  },
  btn_primary: {
    backgroundColor: `${ButtonColor} !important`,
    color: "#fff !important",
    minWidth: "160px",
    minHeight: "42px",
  },

  //   Time section
  time_sec: {
    flexGrow: 1,
    backgroundColor: "#fff",
    // padding: "50px 0",
  },
  left: {
    display: "flex",
    gap: 30,
  },

  title: {
    fontSize: 22,
    color: "#0a3133",
    margin: "0 0 10px",
    cursor: 'pointer'
  },
  secondLine: {
    display: "flex",
    gap: 50,
    marginBottom: 15,
    "& p": {
      margin: 0,
      fontSize: 15,
      color: "#979d9d",
    },
  },
  location: {
    display: "flex",
    gap: 10,
    "& p": {
      margin: 0,
      fontSize: 15,
      color: "#979d9d",
    },
  },
  favourite: {
    display: "flex",
    gap: 10,
    cursor: "pointer",
    "& p": {
      margin: 0,
      fontSize: 15,
      color: "#23868b",
    },
  },
  smallBox: {
    height: 100,
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    cursor: 'pointer',
  },

  time_item: {
    borderBottom: "2px solid #e7e7eb",
    padding: "50px 0",
  },
  time_item_table: {
    // borderBottom: "2px solid #e7e7eb",
    padding: "50px 0 0",
  },
  btn_green: {
    backgroundColor: "#53b768 !important",
    color: "#fff !important",
    minWidth: "80px",
  },
  last_TableCell: {
    backgroundColor: "#eff0f4 !important",
    color: "#0a3133 !important",
    fontWeight: 600,
  },
  table_heading: {
    "& h5": {
      margin: 0,
      color: "#0a3133",
      fontSize: "18px",
    },
    "& p": {
      margin: 0,
      color: "#979d9d",
      fontSize: "16px",
      fontWeight: 400,
    },
  },
  cell_sport: {
    "& h5": {
      margin: 0,
      color: "#0a3133",
      fontSize: "16px",
      fontWeight: 400,
    },
    "& p": {
      margin: 0,
      color: "#979d9d",
      fontSize: "16px",
      fontWeight: 400,
    },
  },
  table_body: {
    "& .MuiTableCell-root": {
      color: "#0a3133",
      fontSize: "16px",
    },
  },
  btn_green_border: {
    textTransform: "capitalize",
    width: "494px",
    maxWidth: "100%",
    boxShadow: "0px 0px 3px 0px #53b768",
    padding: "10px",
    borderRadius: "6px",
  },

  dialog_custom_style: {
    padding: '30px 0',
    "& #alert-dialog-title, .sc-bczRLJ": {
    padding: '30px 0',

    },
  },





}));




export { useStyles };
