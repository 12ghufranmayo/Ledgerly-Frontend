import React from 'react'
import { Outlet } from 'react-router'
import  DataTable  from '../../components/Common/DataTable.jsx'
import { Box } from '@mui/material';
import { PiUsersFourDuotone } from "react-icons/pi";

const ClientsList = () => {
  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      flex: 1
    },
    {
      field: 'firstName',
      headerName: 'First name',
      flex: 1,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      flex: 1,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      //type: 'number',
      flex: 1,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];

  const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const handleView = (row) => {
    alert("View action clicked for row:" + row.name);
  } 

  const handleEdit = (row) => {
    alert("Editing client: " + row.name);
  };

  const handleDelete = (row) => {
    if (window.confirm(`Delete ${row.name}?`)) {
      alert("Deleted client: " + row.name);
    }
  }

  return (
    <div>
        <div className='flex items-center justify-between p-2 px-1'>
          <h1 className='text-2xl font-medium flex ml leading-normal text-slate-700 gap-3'>
            <PiUsersFourDuotone className='h-8 w-8'/> Clients
          </h1>
        </div>
        <Box sx={{ mt: 2, height: 200, width: '100%' }}>
            <DataTable 
              rows={rows} 
              columns={columns} 
              pageSize={[5, 25, 50, 100]}
              loading={false} // Set to true when fetching data
              checkboxSelection={false}
              onView={handleView}
              onEdit={handleEdit}
              onDelete={handleDelete} 
          />
        </Box>
        <Outlet />
    </div>
  )
}

export default ClientsList