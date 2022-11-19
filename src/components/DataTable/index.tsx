import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns, ParamsData } from "../../dataSourse";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function DataTable() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id: any) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: ParamsData) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 700, width: "100%" }} className="datatable">
      <div className="datatable-title">
        All User
        <Link to="/users/newuser" className="link">
          add New User
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
