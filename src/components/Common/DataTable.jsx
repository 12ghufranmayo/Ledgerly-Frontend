import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Box, Tooltip, IconButton, Icon } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const renderActionsCell = (params, onView, onEdit, onDelete) => {
   return (
    <>
        <Box className="flex">
            {onView && (
                <Tooltip title="View">
                    <IconButton onClick={() => onView(params.row)}>
                        <VisibilityIcon color="primary" fontSize="small"/>
                    </IconButton>
                </Tooltip>
            )}
            {onEdit && (
                <Tooltip title="Edit">
                    <IconButton onClick={() => onEdit(params.row)}>
                        <EditIcon color="success" fontSize="small" />
                    </IconButton>
                </Tooltip>
            )}
            {onDelete && (
                <Tooltip title="Delete">
                    <IconButton onClick={() => onDelete(params.row)}>
                        <DeleteIcon color="error" fontSize="small" />
                    </IconButton>
                </Tooltip>
            )}
        </Box>
    </>
   ) 
}

const DataTable = ({
    rows,
    columns, 
    pageSize = 10,
    loading = true,
    checkboxSelection = false,
    onView,
    onEdit,
    onDelete
}) => {
    const actionColumns = onView || onEdit || onDelete ? [
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            flex: 1,
            renderCell: (params) => renderActionsCell(params, onView, onEdit, onDelete)
        }
    ] : [];
  return (
    <div className='w-[99%]'>
        <DataGrid
        rows={rows}
        columns={[...columns, ...actionColumns]}
        pageSizeOptions={pageSize}
        loading={loading}
        sx={{
    "& .MuiDataGrid-columnHeaderTitle": {
        paddingLeft: "10px",  // Blue header
        color: "grey",
        fontSize: "16px",
    },
    "& .MuiDataGrid-row:hover": {
      backgroundColor: "#f5f5f5",  // Light grey on hover
    },
    "& .MuiDataGrid-cell": {
      borderBottom: "1px solid #ddd", // Add border under cells
      paddingLeft: "20px"
    },
    "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#1f2937", // White background for rows
      borderBottom: "6px solid #ddd",
      color: "#ffffff", // white text
            fontWeight: "bold",
    },
  }}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
    />
    </div>
  )
}

export default DataTable