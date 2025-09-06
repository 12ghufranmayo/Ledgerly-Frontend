import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { Box, Tooltip, IconButton, Icon } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from 'react-router-dom';
import { IoAdd } from "react-icons/io5";

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
    onDelete,
    height = 400,
    create = true,
    gridTitle = "Data Table",
    gridIcon = <Icon>table_chart</Icon>
}) => {
    const navigate = useNavigate();

    const actionColumns = onView || onEdit || onDelete ? [
        {
            field: 'actions',
            headerName: 'Actions',
            sortable: false,
            flex: 1,
            //width: 150,
            renderCell: (params) => renderActionsCell(params, onView, onEdit, onDelete)
        }
    ] : [];

    const addRecord = () => {
        console.log("Navigating to create");
        navigate('create');
    }

  return (
    <Box sx={{height, width:"100%"}}>
        <div className='flex items-center justify-between px-1 p-3'>
            <h1 className='flex items-center text-2xl font-medium ml leading-normal text-slate-700 gap-3'>
                {gridIcon} {gridTitle}
            </h1>
            { create && 
                // <div className='flex gap-'>
                    <button 
                        className='cursor-pointer bg-blue-600 hover:bg-blue-700 text-white p-2 rounded flex items-center justify-center'
                        onClick={addRecord} >
                        <IoAdd />

                    </button>
                // </div>
            }
        </div>
        
        <DataGrid
            rows={rows}
            columns={[...columns, ...actionColumns]}
            initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: typeof pageSize === 'number' ? pageSize : pageSize[0] }
                        },
                    }}
            pageSizeOptions={[5, 25, 50, 100]}
            loading={loading}
            sx={{
                "& .MuiDataGrid-columnHeaders": {
                    paddingLeft: "10px",
                    backgroundColor: '#f5f5f5', // Light gray
                    color: '#2c3e50',
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: 500,
                    borderBottom: '3px solid #bdc3c7',
                    overflow: 'visible',
                },
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: '#f5f5f5',
                    //padding: '16px 8px',
                    '&:hover': {
                        backgroundColor: '#ecf0f1',
                    },
                    '&:focus': {
                        outline: 'none',
                        backgroundColor: '#ecf0f1',
                    }
                },
                "& .MuiDataGrid-row:hover": {
                    backgroundColor: "#f5f5f5",  // Light grey on hover
                },
                "& .MuiDataGrid-cell": {
                borderBottom: "1px solid #bdc3c7", // Add border under cells
                paddingLeft: "20px"
                },
            }}
            checkboxSelection={checkboxSelection}
            disableRowSelectionOnClick
            disableColumnMenu={true}
            disableColumnResize={true}
        />
    </Box>
  )
}

export default DataTable