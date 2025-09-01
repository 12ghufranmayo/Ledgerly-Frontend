import { React, useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUsersFourDuotone } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { RiExpandLeftLine, RiExpandRightLine  } from "react-icons/ri";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Dashboard", path: "/home", icon: <RxDashboard className="h-6 w-6" /> },
        { name: "Clients", path: "/clients", icon: <PiUsersFourDuotone className="h-6 w-6" /> },
        { name: "Settings", path: "/settings", icon: <IoSettingsOutline className="h-6 w-6" /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-55" : "w-16"
        } bg-teal-500 text-gray-200 h-screen p-5 flex flex-col transition-all duration-100`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-5 rounded-lg text-gray-100 focus:outline-none"
        >
          {isOpen ? <RiExpandLeftLine className="h-6 w-6" /> : <RiExpandRightLine className="h-6 w-6" />}
        </button>

        {/* Menu */}
        <nav className="flex-1 mt-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="flex items-center gap-2 py-3 rounded-lg text-gray-100 font-medium transition"
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <button className="flex items-center gap-2 py-3 rounded-lg text-gray-100transition">
          <TbLogout className="h-6 w-6" />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  )
}

export default SideBar