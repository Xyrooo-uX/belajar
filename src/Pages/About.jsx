  import React from 'react'
  import Navbar from "../Components/Navbar";
  import Swal from 'sweetalert2';

  function About() {
    const handleOnClick = () => {
      Swal.fire("HELLOO", "ini adalah halaman about");
    };

    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
          <div className='flex flex-col md:flex-row items-center justify-around min-h-screen px-10 md:px-20 py-20 gap-10'>
          <div className='flex justify-center items-center'>
            <img 
              src="cat.jpg" 
              alt="About Us" 
              className='w-64 h-64 md:w-[450px] md:h-[450px] object-contain' 
            />
          </div>
          
          <div className='flex flex-col gap-6 w-full md:w-1/2 max-w-xl'>
            <h1 className='font-bold text-6xl md:text-8xl text-black'>
              Say hello!
            </h1>
            <p className='text-lg md:text-xl text-gray-700 leading-relaxed max-w-md'>
              hai saya siswa smkn 12 malang yang magang di hummatech  
            </p>
            <button onClick={handleOnClick} className='w-fit px-10 py-3 border border-black rounded-full text-lg font-medium hover:bg-black hover:text-white transition-all duration-[750ms]'>
            hey click the button
          </button>
          </div>
        </div>

        <div className="w-full pb-20">
          
          <div className="flex overflow-x-auto gap-6 px-10 md:px-20 scrollbar-hide py-4">
            
            {/*foto*/}
            <div className="group cursor-pointer flex-shrink-0 w-64 md:w-80 shadow-lg rounded-lg">
              <div className="relative bg-gray-100 aspect-[3/3] overflow-hidden rounded-lg">
                <img src="cat.jpg" alt="Image 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-5  00" />
              </div>
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-widest font-medium p-3">Test 1</h3>
              </div>
            </div>

            <div className="group cursor-pointer flex-shrink-0 w-64 md:w-80">
              <div className="relative bg-gray-100 aspect-[3/3] overflow-hidden rounded-lg">
                <img src="cat.jpg" alt="Image 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-widest font-medium">Test 2</h3>
              </div>
            </div>
      
            <div className="group cursor-pointer flex-shrink-0 w-64 md:w-80">
              <div className="relative bg-gray-100 aspect-[3/3] overflow-hidden rounded-lg">
                <img src="cat.jpg" alt="Image 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-widest font-medium">Test 3</h3>
              </div>
            </div>

            <div className="group cursor-pointer flex-shrink-0 w-64 md:w-80">
              <div className="relative bg-gray-100 aspect-[3/3] overflow-hidden rounded-lg">
                <img src="cat.jpg" alt="Image 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-widest font-medium">Test 4</h3>
              </div>
            </div>

                      <div className="group cursor-pointer flex-shrink-0 w-64 md:w-80">
              <div className="relative bg-gray-100 aspect-[3/3] overflow-hidden rounded-lg">
                <img src="cat.jpg" alt="Image 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-widest font-medium">Test 5</h3>
              </div>
            </div>

                      <div className="group cursor-pointer flex-shrink-0 w-64 md:w-80">
              <div className="relative bg-gray-100 aspect-[3/3] overflow-hidden rounded-lg">
                <img src="cat.jpg" alt="Image 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="mt-4">
                <h3 className="text-xs uppercase tracking-widest font-medium">Test 6</h3>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  }

  export default About