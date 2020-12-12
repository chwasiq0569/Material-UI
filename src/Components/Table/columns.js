import { format } from "date-fns";
import ColumnFilter from "./FilteringTable/ColumnFilter";
// const columns_Arr = [
//   {
//     Header: "id",
//     Footer: "id",
//     accessor: "id",
//   },
//   {
//     Header: "First Name",
//     Footer: "First Name",
//     accessor: "first_name",
//   },
//   {
//     Header: "Last Name",
//     Footer: "Last Name",
//     accessor: "last_name",
//   },
//   {
//     Header: "Email",
//     Footer: "Email",
//     accessor: "email",
//   },
//   {
//     Header: "Date Of Birth",
//     Footer: "Date Of Birth",
//     accessor: "date_of_birth",
//   },
//   {
//     Header: "Country",
//     Footer: "Country",
//     accessor: "country",
//   },
//   {
//     Header: "Phone",
//     Footer: "Phone",
//     accessor: "phone",
//   },
// ];
// export default columns_Arr;

const GROUP_COLUMNS = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
    // Filter: ColumnFilter,//we dont need filters on Id
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "Name",
    Footer: "Name",

    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Date Of Birth",
        Footer: "Date Of Birth",
        accessor: "data_of_birth",
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];

export default GROUP_COLUMNS;
