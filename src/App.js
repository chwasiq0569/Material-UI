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
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

function App() {
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
          <PhotoCamera />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" align="center" style={{ marginTop: "100px" }} >
            <Typography variant="h3" color="textPrimary" gutterBottom>The Main Heading</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              If you aren’t satisfied with the build tool and configuration
              choices, you can eject at any time. This command will remove the
              single build dependency from your project.
            </Typography>
            <div>
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
        </div>
      </main>
    </>
  );
}

export default App;
