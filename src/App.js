import logo from "./logo.svg";
import "./App.css";
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
      <StickyTable />
    </>
  );
}

export default App;
