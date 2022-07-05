import React from "react"
import "./index.css"
import $ from "jquery"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import TextField from "@material-ui/core/TextField"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { IconButton } from "@material-ui/core"
import Select from 'react-select'
import Moment from "moment"
import Cross from './Images/cross.svg'
import Subtraction from './Images/Subtraction.svg'
// import Clock from '../../Assets/clockIconSchelude.svg'
// import Schedule from '../../Assets/scheduleIcontop.svg'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  widgetDiv:{
    background: "red",
    
  },
  widgetDiv2:{
    background: "green",
  },
  imgWrapper:{
    display: "flex", alignItems: "center", columnGap: "7px" 

  },
  imgWrapper1:{
    display: "flex",
    alignItems: "center",
    columnGap: "3px",
    justifyContent: "space-between",
    width: "90%"
  },
  TextWrapper:{
    display: "flex", alignItems: "center", columnGap: "7px" 
  },
  Section:{
    border: "1px solid rgba(128, 128, 128, 0.421)",
   
    borderRadius: "1.5rem"
  },
  CreateButton:{
    background: "#209CA2 !important",
    color: "white !important",
    textTransform: "capitalize !important",
    borderRadius: "10px !important",
    "&:hover":{
      background: "#209CA2 !important",
    }
  },
  Header:{
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    marginTop: "1rem",
    columnGap:20
  },
  ColorSDiv:{
    display:'flex',
    justifyContent:'flex-end',
    marginTop:11,
    columnGap:17
  },
  boxColorDiv:{
    display:'flex',
    columnGap:5,
    alignItems:'center'
  },
  colorBox1:{
   background:'rgb(253, 110, 132)',
   height:20,
   width:20,
   borderRadius:3
  },
  colorBox2:{
    background:'white',
    height:20,
    width:20,
    borderRadius:3,
    border:'1px solid #8080806b'
  },
  colorBox3:{
    background:'#29bbc3',
    height:20,
    width:20,
    borderRadius:3
  }

}));
const Shedule = () => {
  const classes=useStyles()
  const [DateValue, setDateValue] = React.useState(
    Moment().format("YYYY-MM-DD")
  )
const NextDate=(value)=>
{
 setDateValue(Moment(value).add(1, 'days').format('YYYY-MM-DD'))
}
const PreviousDate=(value)=>{
  setDateValue(Moment(value).subtract(1, 'days').format('YYYY-MM-DD'))
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
  const Events = [
    {
      date: "1",
    },
    {
      date: "2",
    },
    {
      date: "3",
    },
    {
      date: "4",
    },
    {
      date: "5",
    },
    {
      date: "6",
    },
    {
      date: "7",
    },
    {
      date: "8",
    },
    {
      date: "9",
    },
    {
      date: "10",
    },
    {
      date: "11",
    },
    {
      date: "12",
    },
    {
      date: "13",
    },
    {
      date: "14",
    },
    {
      date: "15",
    },
    {
      date: "16",
    },
    {
      date: "17",
    },
    {
      date: "18",
    },
  ]
  const SheduleTime = [
    {
      time: "10",
    },
    {
      time: "11",
    },
    {
      time: "12",
    },
    {
      time: "13",
    },
    {
      time: "14",
    },
    {
      time: "15",
    },
    {
      time: "16",
    },
  ]
  const data = [
    {
      date: "10",
      time: "11",
      name: "Fullbokat",
      booking:true,
    },
    {
      date: "11",
      time: "11",
      name: "Fullbokat",
      booking:true
    },
    {
      date: "12",
      time: "11",
      name: "Fullbokat",
      booking:true
    },
    {
      date: "13",
      time: "11",
      name: "Fullbokat",
      booking:true
    },
    {
      date: "14",
      time: "11",
      name: "Fullbokat",
      booking:true
    },
    
    {
      date: "12",
      time: "12",
      name: "Lediga tider",
      booking:true
    },
    {
      date: "13",
      time: "13",
      name: "Din bokning",
      booking:true
    },
    {
      date: "5",
      time: "15",
      name: "Din bokning",
      booking:true
    },
    {
      date: "6",
      time: "15",
      name: "Din bokning",
      booking:true
    },
    {
      date: "7",
      time: "15",
      name: "Din bokning",
      booking:true
    },
    {
      date: "8",
      time: "15",
      name: "Din bokning",
      booking:true
    },
    {
      date: "9",
      time: "15",
      name: "Din bokning",
      booking:true
    },
    {
      date: "16",
      time: "14",
      name: "Din bokning",
      booking:false
    },
    {
      date: "17",
      time: "10",
      name: "Din bokning",
      booking:false
    },
    {
      date: "17",
      time: "14",
      name: "Din bokning",
      booking:false
    },
    {
      date: "18",
      time: "14",
      name: "Din bokning",
      booking:false
    },
    {
      date: "4",
      time: "10",
      finish:true
    },
    {
      date: "4",
      time: "11",
      finish:true
    },
    {
      date: "4",
      time: "12",
      finish:true
    },
    {
      date: "4",
      time: "13",
      finish:true
    },
    {
      date: "4",
      time: "14",
      finish:true
    },
    {
      date: "4",
      time: "15",
      finish:true
    },
    {
      date: "4",
      time: "16",
      finish:true
    },
    {
      date: "1",
      time: "10",
      timeout:true
    },
    {
      date: "2",
      time: "10",
      timeout:true
    },
    {
      date: "3",
      time: "10",
      timeout:true
    },
    {
      date: "4",
      time: "10",
      timeout:true
    },
    {
      date: "1",
      time: "11",
      timeout:true
    },
    {
      date: "2",
      time: "11",
      timeout:true
    },
    {
      date: "3",
      time: "11",
      timeout:true
    },
    {
      date: "4",
      time: "11",
      timeout:true
    },

    {
      date: "1",
      time: "12",
      timeout:true
    },
    {
      date: "2",
      time: "12",
      timeout:true
    },
    {
      date: "3",
      time: "12",
      timeout:true
    },
    {
      date: "4",
      time: "12",
      timeout:true
    },

    {
      date: "1",
      time: "13",
      timeout:true
    },
    {
      date: "2",
      time: "13",
      timeout:true
    },
    {
      date: "3",
      time: "13",
      timeout:true
    },
    {
      date: "4",
      time: "13",
      timeout:true
    },

    {
      date: "1",
      time: "14",
      timeout:true
    },
    {
      date: "2",
      time: "14",
      timeout:true
    },
    {
      date: "3",
      time: "14",
      timeout:true
    },
    {
      date: "4",
      time: "14",
      timeout:true
    },

    {
      date: "1",
      time: "15",
      timeout:true
    },
    {
      date: "2",
      time: "15",
      timeout:true
    },
    {
      date: "3",
      time: "15",
      timeout:true
    },
    {
      date: "4",
      time: "15",
      timeout:true
    },
    {
      date: "1",
      time: "16",
      timeout:true
    },
    {
      date: "2",
      time: "16",
      timeout:true
    },
    {
      date: "3",
      time: "16",
      timeout:true
    },
    {
      date: "4",
      time: "16",
      timeout:true
    },
   
  ]
  React.useEffect(() => {
    for (var i = 0; i < data.length; i++) {
      if(data[i].name==='Fullbokat' && data[i].booking==true)
      {
       
        $("#" + data[i].date + "-" + data[i].time).css({"background-color": "#fd6e84"})
      }
      else if(data[i].name==='Din bokning' && data[i].booking==true)
      {
        $("#" + data[i].date + "-" + data[i].time).css("background-color", "#29bbc3")
      }
      else if(data[i].name==='Lediga tider' && data[i].booking==true)
      {
        $("#" + data[i].date + "-" + data[i].time).css("background-color", "white")
      }
      else if(data[i].booking==false)
      {
        $("#" + data[i].date + "-" + data[i].time).html(`<div><img src=${Cross}></img></div>`)
   
      }
      else if(data[i].timeout)
      {
        $("#" + data[i].date + "-" + data[i].time).css({"border":"1px solid transparent","background-image":"url("+Subtraction+")","background-repeat":"no-repeat"})
      }
      else
      {
        if(data[i].date + "-" + data[i].time=='4-10')
        {
          $("#" + data[i].date + "-" + data[i].time).html(`<div style="display: flex;flex-direction: column;align-items: center;margin-top: -11px;float: right;position: relative;"><div style="position:absolute;width:15px;height:15px;border-radius:10px;background:#29bbc3;"></div><div style="background:#29bbc3;height:8vh;width:5px;float:right"></div></div>`)
        }
        else
        {
          $("#" + data[i].date + "-" + data[i].time).html(`<div style="display: flex;flex-direction: column;align-items: center;margin-top: -11px;float: right;position: relative;"><div style="background:#29bbc3;height:9vh;width:5px;float:right"></div></div>`)
  
        }
         }
     
    }
  }, [])

  return (
    <div>
      
      <div className={classes.Section}>
        <div className={classes.Header}>
        <span className="header-text"> Book court</span>
        <div className="date-div">
        <Select options={options} placeholder="Select Sport"/>

          <div className="icon-wrapper">
           

            <TextField
              variant="outlined"
              className="input-text"
              id="date"
              type="date"
              size="small"
              value={DateValue}
              InputLabelProps={{
                shrink: true,
              }}
            />
          
          </div>
        </div>
      </div>
        <div className="time-picker-container" id="time-picker-container">
          <table className="tardis">
            <tbody>
              <tr>
                <td className="corner" style={{ border: "0.5px solid rgba(128, 128, 128, 0.27)" }}>
                  &nbsp;
                </td>
                {Events.map(dt => {
                  return <th style={{ border: "0.5px solid rgba(128, 128, 128, 0.27)" }}>{dt.date}</th>
                })}
              </tr>

              {SheduleTime.map(dt => {
                return (
                  <tr>
                    <th style={{ border: "0.5px solid rgba(128, 128, 128, 0.27)", width: 50 }}>{dt.time}</th>
                    {Events.map(t => {
                      return (
                        <td
                          id={t.date + "-" + dt.time}
                          style={{
                            
                            border: "0.5px solid #80808045",
                            width: 165,
                            padding: 0,
                          }}
                        ></td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
       
      </div>
     <div className={classes.ColorSDiv}>
     <div className={classes.boxColorDiv}>
          <div className={classes.colorBox1}></div>Fullbokat
        </div>
        <div className={classes.boxColorDiv}>
          <div className={classes.colorBox2}></div>Lediga tider
        </div>
        <div className={classes.boxColorDiv}>
          <div className={classes.colorBox3}></div>Din bokning
        </div>
     </div>
    </div>
  )
}
export default Shedule
