import React, { useEffect, useState } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import { Table, TableHead, TableCell, TableRow } from "@material-ui/core";
import TableHeader from "./TableHeader";
const TableContent = () => {
  const rowInfromation = [
    { name: "Bob Johnson", age: 69 },
    { name: "Jenny Johnson", age: 25 },
  ];

  const descendingComparator = (a, b, orderby) => {
    console.log("a: ", a, "b:", b, "orderby: ", orderby);
    if (b[orderby] < a[orderby]) return -1;
    if (b[orderby] > a[orderby]) return 1;
    return 0;
  };

  const getComparator = (order, orderby) => {
    console.log("getComparator");
    console.log("order: ", order, "orderby: ", orderby);
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderby)
      : (a, b) => -descendingComparator(a, b, orderby);
  };

  const sortedRowInformation = (rowArr, comparator) => {
    console.log("rowArr: ", rowArr, "comparator: ", comparator);
    const stabilizeArr = rowArr.map((el, index) => [el, index]);
    // //will return [
    //     0: {
    //         name: "Wasiq", age: 21
    //     }
    //     1: 0
    //              ]
    // [
    //      0: {
    //          name: "Abdullah", age: 22
    //   }
    //     1: 1
    // ]
    console.log("stabilizeArr: ", stabilizeArr);
    //sorting Array
    stabilizeArr.sort((a, b) => {
      console.log("insideSort");
      console.log("a: ", a, "b: ", b);
      //comparator return a function -descendingComparator(a, b, orderby)
      const order = comparator(a[0], b[0]);
      console.log("order: ", order);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizeArr.map((el) => el[0]);
  };

  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState("name");

  const handleRequestSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    console.log("isAscending: ", isAscending);
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  useEffect(() => {
    // console.log(valueToOrderBy);
    console.log(
      "sortedRowInfo: ",
      sortedRowInformation(
        rowInfromation,
        getComparator(orderDirection, valueToOrderBy)
      )
    );
  }, [orderDirection]);

  return (
    <TableContainer>
      <Table>
        <TableHeader
          orderDirection={orderDirection}
          valueToOrderBy={valueToOrderBy}
          handleRequestSort={handleRequestSort}
        />
        {/* {sortedRowInformation(
          rowInfromation,
          getComparator(orderDirection, valueToOrderBy)
        ).map((person, index) => (
          <TableRow key={index}>
            <TableCell>{person.name}</TableCell>
            <TableCell>{person.age}</TableCell>
          </TableRow>
        ))} */}
      </Table>
    </TableContainer>
  );
};

export default TableContent;
