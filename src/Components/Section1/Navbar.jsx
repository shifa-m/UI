import React from 'react'
import MainContent from './maincontent'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='h-full w-full relative'>
      {/* <div className='m-10  gap-30 absolute text-black-50 flex justify-end w-450 font-bold text-xl'  >
        <span className=''>Home</span>
        <select name="Menu" id="">
          <option value="Pastas" className='bg-black border-0 text-white' >Pastas</option>
          <option value="Burgers" className='bg-black border-0 text-white'>Burgers</option>
          <option value="Pizza" className='bg-black border-0 text-white'>Pizza</option>
        </select>
        <span >About Us</span>
        <span >Contact Us</span>
        <span>Feedback</span>
      </div> */}
      <div className='fixed w-full  flex  gap-50 justify-end font-bold  text-xl p-10  '>
        <Link to='/Home'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Dishe'>Dishes</Link>
      <Link to='/Contact'>Contact</Link>
      </div>
      
    
      <div>
         <MainContent/>
        <img src="https://images.unsplash.com/photo-1650012762279-e8b5f90f504f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className='h-screen w-full object-cover' />
        
      </div>

    </div>




  )
}

export default Navbar