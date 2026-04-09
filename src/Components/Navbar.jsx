import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#9006D6] w-full h-13 flex items-center justify-center gap-15 text-white font-semibold text-lg pb-1 mb-5 fixed top-0 left-0 z-10 pb-1 mb-5'>
      <a>Home</a>
      <a href='/about' >About</a>
      <a>contact</a>
    </div>
  )
}

export default Navbar
