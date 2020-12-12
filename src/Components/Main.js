import React from "react";
import SideMenu from "./SideMenu";
import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Header from "./Header";
import PageHeader from "./PageHeader";
// import EnhancedTable from "./Table/Table";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFD42D",
      light: "#1746CD",
    },
    secondary: {
      main: "#1645CD",
      light: "#E7EEED",
    },
    background: {
      default: "#f4f5fd",
    },
    shape: {
      borderRadius: "10px",
    },
  },
});

const useStyles = makeStyles({
  main: {
    display: "flex",
  },
  appMenu: {
    width: "100%",
  },
});

const Main = () => {
  const classes = useStyles();
  return null;
  // <ThemeProvider theme={theme}>
  //   <div className={classes.main}>
  //     <SideMenu />
  //     <div className={classes.appMenu}>
  //       <Header />
  //       <PageHeader
  //         title="Page Title"
  //         desc="Page Description"
  //         icon={<PermIdentityIcon fontSize="large" color="secondary" />}
  //       />
  //     </div>
  //     <CssBaseline />
  //   </div>
  // </ThemeProvider>
  // <EnhancedTable />
};

export default Main;
