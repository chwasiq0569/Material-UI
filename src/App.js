import logo from "./logo.svg";
// import "./App.css";
import Main from "./Components/Main";
import TableHeader from "./Table/TableHeader";
import TableContent from "./Table/TableContent";
import BasicTable from "./Components/Table/BasicTable";
import SortedTable from "./Components/Table/SortedTable";
import FilteringTable from "./Components/Table/FilteringTable/FilteringTable";
import PaginationTable from "./Components/Table/PaginationTable/PaginationTable";
import RowSelection from "./Components/Table/RowSelection/RowSelection";
import ColumnOrder from "./Components/Table/ColumnOrder/ColumnOrder";
import ColumnHiding from "./Components/Table/ColumnHiding/ColumnHiding";
import StickyTable from "./Components/Table/StickyTable/StickyTable";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
   container: {
     backgroundColor: theme.palette.background.paper,
     padding: theme.spacing(8, 0, 6)
   },
   icons: {
     marginRight: "20px"
   },
   buttons: {
     marginTop: "30px"
   },
   cardGrid: {
    padding: "20px 0"
   },
   card:{
    height: "100%",
    display: "flex",
    flexDirection: "column"
   },
   cardMedia: {
    paddingTop: "56.25%" //16.9  
   },
   cardContent: {
     flexGrow: 1
   }
}))

function App() {
  
  const classes = useStyles();

  return (
    <>
      {/* <TableHeader /> */}
      {/* <TableContent /> */}
      {/* <BasicTable /> */}
      {/* <SortedTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      {/* <ColumnHiding /> */}
      {/* <StickyTable /> */}
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <PhotoCamera className={classes.icons} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" align="center" style={{ marginTop: "100px" }} >
            <Typography variant="h3" color="textPrimary" gutterBottom>The Main Heading</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              If you aren’t satisfied with the build tool and configuration
              choices, you can eject at any time. This command will remove the
              single build dependency from your project.
            </Typography>
            <div className={classes.buttons}>
                <Grid container spacing={2} justify='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                        See my Photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                        Secondary Item
                    </Button>
                  </Grid>
                </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid}>
              <Grid container spacing={1} >{
                [1,2,3,4,5,6,7,8,9].map((e) => (
                  <Grid item xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                          <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Card Image" />
                          <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5">
                              Heading
                            </Typography>
                            <Typography>
                              This is media Card you can use this section to describe the content.
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                          </CardActions>
                      </Card>
                  </Grid>
                ))

              }
                 
              </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
