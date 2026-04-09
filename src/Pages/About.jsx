import React from 'react'
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      
      <div className='flex flex-col md:flex-row items-center justify-around min-h-screen px-10 md:px-20 py-20 gap-10'>
        
        <div className='flex justify-center items-center w-full md:w-1/4'>
          <img 
            src="vite.svg" 
            alt="About Us" 
            className='w-64 h-64 md:w-[450px] md:h-[450px] object-contain' 
          />
        </div>
        
        <div className='flex flex-col gap-6 w-full md:w-1/2 max-w-xl'>
          <h1 className='font-bold text-6xl md:text-8xl text-black'>
            Say hello!
          </h1>
          
          <p className='text-lg md:text-xl text-gray-700 leading-relaxed max-w-md'>
            I'd love to hear from you and always welcome any feedback - please don't hesitate to get in touch!
          </p>

          <button className='w-fit px-10 py-3 border border-black rounded-full text-lg font-medium hover:bg-black hover:text-white transition-all duration-300'>
            Say hey!
          </button>
        </div>

      </div>
    </div>
  )
}

export default About