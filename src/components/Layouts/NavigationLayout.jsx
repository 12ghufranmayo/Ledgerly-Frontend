import React from 'react'
import SideBar from '../UI/SideBar.jsx'
import TopBar from '../UI/TopBar.jsx'
import { Outlet } from 'react-router'

const NavigationLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        < TopBar />
        <main className="bg-gray-100 min-h-screen p-6">
          < Outlet />
        </main>
      </div>
    </div>
  )
}

export default NavigationLayout