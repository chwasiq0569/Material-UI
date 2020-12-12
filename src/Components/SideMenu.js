import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles({
  sideMenu: {
    width: "25vw",
    height: "100vh",
    backgroundColor: "red",
  },
});

const styles = {
  sideMenu: {
    width: "25vw",
    height: "100vh",
    backgroundColor: "red",
  },
};
// const useStyles = makeStyles({
//   sideMenu: {
//     width: "25vw",
//     height: "100vh",
//     backgroundColor: "red",
//   },
// });

const SideMenu = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.sideMenu}>Sidebar</div>
    </>
  );
};

// export default withStyles(styles)(SideMenu);
export default SideMenu;
//withStyles is HOC than wraps our styles object and Component
// we can access those styles via props in our component
