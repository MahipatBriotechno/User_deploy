import React from "react"
import AppBarNew from "../../Component/Appbar"
import Footer from "../../Component/Footer"
import GoogleMap from "../../Component/GoogleMap"
import SideBarMap from "./SideBarMap"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import AccountCircle from "@material-ui/icons/AccountCircle"
import SearchIcon from '@material-ui/icons/Search';
import ExpIcon1 from '../../../../images/expIcon1.svg'
import ExpIcon2 from '../../../../images/expIcon2.svg'
import ExpIcon3 from '../../../../images/expIcon3.svg'
import ExpIcon4 from '../../../../images/expIcon4.svg'
const Explore = () => {
  return (
    <>
      <AppBarNew />
      <div style={{ height: "86vh" }}>
        <div>
            <img src={ExpIcon1} width={95} style={{position:'absolute',zIndex:1,left:"43rem",opacity:0.7}}/>
            <img src={ExpIcon2} width={95} style={{position:'absolute',zIndex:1,opacity:0.7,top:"16rem",left:"32rem"}}/>
            <img src={ExpIcon3} width={95} style={{position:'absolute',zIndex:1,opacity:0.7,top:"25rem",left:"45rem"}}/>
            <img src={ExpIcon4} width={58} style={{position:'absolute',zIndex:1,opacity:0.7,top:"18rem",left:"62rem"}}/>
            <img src={ExpIcon2}  width={95} style={{position:'absolute',zIndex:1,opacity:0.7,top:"19rem",left:"74rem"}}/>
            <img src={ExpIcon1}  width={95} style={{position:'absolute',zIndex:1,opacity:0.7,top:"28rem",left:"32rem"}}/>
          <div style={{position:'absolute',zIndex:1,background:'white',top:102,left:27,borderRadius:10}}>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Spelare, plats, klubb"
            variant="outlined"
            style={{width:280}}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          </div>
          <SideBarMap />
        </div>
        <GoogleMap />
      </div>
    </>
  )
}
export default Explore
