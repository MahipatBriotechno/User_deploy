import { Button, Drawer, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    width: 250,
  },
}));

const DrawerRight = (props) => {
  const {DrawerOpen, content } = props
  const classes = useStyle();
  // const [DrawerOpen, setDrawerOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setDrawerOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setDrawerOpen(false);
  // };
  return (
    <>
      {/* <Button onClick={handleDrawerOpen}>Drawer Open</Button> */}
      <Drawer
        open={DrawerOpen}
        anchor="right"
        PaperProps={{
          style: { width: 500 },
        }}
        className={classes.root}
      >
        {/* <Button onClick={handleDrawerClose}>close</Button> */}
        {content}
      </Drawer>
    </>
  );
};

export default DrawerRight;
