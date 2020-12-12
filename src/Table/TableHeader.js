import React from "react";
import TableHead from "@material-ui/core/TableHead";
import { TableCell, TableRow } from "@material-ui/core";
import TableSortLabel from "@material-ui/core/TableSortLabel";
const TableHeader = ({ orderDirection, valueToOrderBy, handleRequestSort }) => {
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell key="name">
          <TableSortLabel
            active={valueToOrderBy === "name"} //active={true}
            direction={valueToOrderBy === "name" ? orderDirection : "asc"}
            onClick={createSortHandler("name")}
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell key="age">
          <TableSortLabel
            active={valueToOrderBy === "age"} //active={true}
            direction={valueToOrderBy === "age" ? orderDirection : "asc"}
            onClick={createSortHandler("age")}
          >
            Age
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
