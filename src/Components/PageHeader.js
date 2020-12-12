import React from "react";
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    "& .MuiPaper-rounded": {
      borderRadius: "0px",
    },
  },
  rounded: {
    borderRadius: "0px",
  },
  paper: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "2rem",
    width: "100%",
    height: "auto",
    display: "flex",
  },
  cartItem: {
    width: "auto",
  },
  pageData: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
  },
  typo: {
    paddingTop: "3px",
  },
});

const PageHeader = ({ title, desc, icon }) => {
  const classes = useStyle();

  return (
    <Paper elevation={0} square className={classes.paper}>
      <Card classes={{ rounded: classes.rounded }}>{icon}</Card>
      <div className={classes.pageData}>
        <Typography variant="div" component="h4" className={classes.typo}>
          {title}
        </Typography>
        <Typography variant="div" component="h6" style={{ opacity: 0.5 }}>
          {desc}
        </Typography>
      </div>
    </Paper>
  );
};

export default PageHeader;
