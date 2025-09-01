import React from 'react'
import { Outlet } from 'react-router'

function ClientsList() {
  return (
    <div>
        <h1 className='text-2xl font-bold'>Clients List</h1>
        <Outlet />
    </div>
  )
}

export default ClientsList