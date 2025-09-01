import React from 'react'
import { PiBell } from "react-icons/pi";


function TopBar() {
  return (
    <header className="bg-white top-0 left-0 right-0 h-16 border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-10">
        <h2 className="font-bold text-gray-700 sm:truncate sm:text-2xl sm:tracking-tight">LedgerLy</h2>
        <div className="flex items-center gap-6">
            <button className="relative">
                <PiBell className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                    3
                </span>
            </button>
            <div className="flex items-center gap-4">
                <input type="text" placeholder="Search..." className="hidden md:block border border-gray-300 rounded-md px-6 py-1.5 text-sm focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600" />
                <img
                    src="https://i.pravatar.cc/40"
                    alt="User"
                    className="h-10 w-10 rounded-full border"
                />
                <div className="hidden md:block">
                    <p className="text-sm font-medium text-gray-700">John Doe</p>
                    <p className="text-xs text-gray-500">Admin</p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default TopBar