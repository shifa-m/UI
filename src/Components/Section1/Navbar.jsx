import React from 'react'
import MainContent from './maincontent'


const Navbar = () => {
  return (
    <div className='h-full w-full relative'>
      <div className='m-10  gap-30 absolute text-black-50 flex justify-end w-450 font-bold text-xl'  >
        <span className=''  >Home</span>
        <select name="Menu" id="">
          <option value="Pastas" className='bg-black border-0 text-white' >Pastas</option>
          <option value="Burgers" className='bg-black border-0 text-white'>Burgers</option>
          <option value="Pizza" className='bg-black border-0 text-white'>Pizza</option>
        </select>
        <span >About Us</span>
        <span >Contact Us</span>
        <span>Feedback</span>
      </div>
      <div  >
         <MainContent/>
        <img src="https://i.pinimg.com/736x/99/6e/8e/996e8e6a0f6e99d2e0b18911c3db5e8c.jpg" alt="" srcset="" className='h-screen w-full object-cover' />
        
      </div>

    </div>




  )
}

export default Navbar