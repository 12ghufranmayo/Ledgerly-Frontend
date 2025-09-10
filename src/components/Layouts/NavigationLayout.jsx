import React from 'react'
import SideBar from '../UI/SideBar.jsx'
import TopBar from '../UI/TopBar.jsx'
import { Outlet } from 'react-router'

const NavigationLayout = (props) => {

  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 flex flex-col">
        < TopBar />
        <main className="p-3">
         { props.children }
        </main>
      </div>
    </div>
  )
}

export default NavigationLayout