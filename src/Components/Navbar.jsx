import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-purple-600 to-sky-400 w-full h-20 flex items-center justify-center gap-10 text-gray-600
    font-semibold text-2xl pb-1 mb-5 fixed top-0 left-0 z-10 pb-1 mb-5 hover:'>

      <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-white underline decoration-white decoration-4 underline-offset-8 decoration-3" : "hover:text-white transition-colors duration-500"}>
        Dashboard
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => isActive ? "text-white underline decoration-white decoration-4 underline-offset-8 decoration-3" : "hover:text-white transition-colors duration-500"}>
        About
      </NavLink>

      <NavLink>
        Contact
      </NavLink>

    </div>
  )
}

export default Navbar
