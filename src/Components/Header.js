import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  makeStyles,
} from "@material-ui/core";
import NotificationsNone from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    transform: "translateZ(0)", //to show appbar shadow atTop
  },
  searchInput: {
    paddingLeft: "0.5px",
    color: "red",
    "&:hover": {
      backgroundColor: "whitesmoke",
    },
    "& .MuiSvgIcon-root": {
      marginRight: "8px",
    },
  },
  btn: {
    backgroundColor: "blue",
  },
  labelBtn: {
    backgroundColor: "red",
  },
  // "& .MuiIconButton-label": {
  //   backgroundColor: "red",
  // },
});

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item>
              <InputBase
                placeholder="Search Topics"
                className={classes.searchInput}
                startAdornment={<SearchIcon fontSize="small" />}
              />
            </Grid>
            {/* sm={true} will expand this column to whole screen */}
            <Grid item sm={true}></Grid>
            <Grid item>
              {/*IconButton means this Icon will act like a Btn  */}
              {/* We cam use classes to overwrite materialUi Styles */}
              <IconButton
                classes={{ root: classes.btn, label: classes.labelBtn }}
              >
                <Badge badgeContent={4} color="primary">
                  <NotificationsNone fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={8} color="secondary">
                  <ChatBubbleOutlineIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={2}>
                  <PowerSettingsNewIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
