import React, { useMemo } from "react";
import { useTable, useFilters } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import GROUP_COLUMNS from "../columns";
import "../basictable.css";

const ColumnFiltering = () => {
  const columns = useMemo(() => GROUP_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  return (
    <table {...getTableProps()}>
      <thead className="thead">
        {headerGroups.map((headerGroup) => (
          <tr>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
  );
};

export default ColumnFiltering;
