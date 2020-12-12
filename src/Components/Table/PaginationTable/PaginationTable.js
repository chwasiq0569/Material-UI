import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import GROUP_COLUMNS from "../columns";
import "../basictable.css";

const PaginationTable = () => {
  const columns = useMemo(() => GROUP_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;
  const { pageIndex, pageSize } = state;
  return (
    <>
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
          {page.map((row) => {
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
      </table>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        {"<<"}
      </button>
      {/* pageIndex starts from 0 */}
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous
      </button>
      {pageIndex + 1} of {pageOptions.length}
      |Goto Page{" "}
      <input
        type="number"
        defaultValue=""
        onChange={(e) => {
          const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(pageNumber);
        }}
      />
      <select
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
      >
        {[10, 20, 30].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next
      </button>
      <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        {">>"}
      </button>
    </>
  );
};

export default PaginationTable;
