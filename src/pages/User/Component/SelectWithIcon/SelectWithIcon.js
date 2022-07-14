import { InputLabel, makeStyles } from "@material-ui/core"
import React, { useState } from "react"
import Select from "react-select"
function SelectWithIcon({ placeHolder, data, label }) {
  const [selectedOption, setSelectedOption] = useState("")

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e.target.value)
  }

  const style = {
    control: base => ({
      ...base,
      
      fontSize: "12px",
      display: "flex",
      flexGrow: 1,
      position: "relative",
      height:55,
      // This line disable the blue border
      boxShadow: "none",
      paddingRight: "10px",
      marginLeft: "-10px",
      borderRadius: 10,
    }),
  }

  const useStyle = makeStyles(theme => ({
    root: {
      marginLeft: "10px",
      padding: "5px",
      display: "flex",
      paddingRight: theme.spacing(2),
    },
  }))

  const classes = useStyle()
  return (
       <Select
        placeholder={placeHolder}
        value={data[0]}
        options={data}
        className={classes.root}
        isSearchable={false}
        onChange={handleChange}
        getOptionLabel={e => (
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            {<img src={e.icon} />}
            <span style={{ marginLeft: 5 }}>{e.label}</span>
          </div>
        )}
        styles={style}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
   
  )
}

export default SelectWithIcon

// How to use

// const DATA_PRICE = [
//     { label: "SEK", value: 1, icon: flag },
//     { label: "SEK", value: 2, icon: flag },
//     { label: "SEK", value: 3, icon: flag },
// ];

// <SelectWithIcon data={DATA_PRICE} placeHolder="Select Sport" label="" />
