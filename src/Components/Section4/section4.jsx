import React from 'react'

const section4 = () => {
  return (
    <div className='w-1/2 flex mt-40  '>
    <div className='h-screen bg-white text-black'>
     <h1 className='text-9xl font-extrabold flex justify-center  pt-50  '>Let's</h1>
      <h1 className='text-9xl font-extrabold flex justify-center pl-30 ' >Get In</h1>
       <h1 className='text-9xl font-extrabold flex justify-center pl-50'>Touch</h1>
    </div>
    <div className='p-10 flex'>
      <label htmlFor="" className='text-xl font-bold mt-90 ml-140 '>FirstName  </label>
     <input type="text" name="" id="" className='border-2 w-70 h-10 mt-90 ml-3 ' />
    </div>
    <div className='p-10 mt-120 '>
      <label htmlFor="" className='text-xl font-bold mr-2 '>LastName   </label>
     <input type="text" name="" id="" className='border-2 w-70 h-10 ' />
    <button className='border-2 mt-3 w-30 ml-25 bg-gray-500 border-none rounded'>Submit</button>
   
    </div>
      
   
    </div>

  )
}

export default section4
