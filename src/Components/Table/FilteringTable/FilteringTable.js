import React, { useMemo } from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import GROUP_COLUMNS from "../columns";
import "../basictable.css";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";

const FilteringTable = () => {
  const columns = useMemo(() => GROUP_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      defaultColumn: defaultColumn,
    },
    useFilters,
    useGlobalFilter
  );

  const {
    getTableProps, //will be spread at table tag
    getTableBodyProps, //spread at body tag
    headerGroups, //headerGroups is object containing headers array and will render headers
    footerGroups, //footerGroups is object containing footer array and will render headers
    rows, // is an array that contains cells
    prepareRow, //is function in which we pass individual row
    state, //table state
    setGlobalFilter, //will set globalFilter text value
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead className="thead">
          {headerGroups.map((headerGroup) => (
            <tr>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
                <td></td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((footer) => (
                <td {...footer.getFooterProps()}>{footer.render("Footer")}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};

export default FilteringTable;
