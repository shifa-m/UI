import React from 'react'

const Section3 = ({data}) => {
  return (
    <div className='min-h-screen w-full   flex justify-center text-black  flex-wrap object-fit'>
            {data.map((item,index)=>(
                         <div key={index} className='h-100 w-80 bg-white m-7.5   rounded-2xl shadow-lg shadow-gray-600 flex flex-col items-center p-5'>
                        <img className='h-50 rounded-full  p-3 border-10 border-green-400 ' src={item.img} alt="" srcset="" />
                        <h1 className='mt-2 text-xl'>Chicken Burger</h1>
                        <p className='mt-1'>Lorem ipsum dolor sit. Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
                        <div className='flex p-3 m-3 gap-10'>
                         <button className='flex ml-4 p-2 bg-green-600 rounded-3xl w-20 justify-center' type="button">$3.50</button>
                        <button className='flex ml-4 bg-green-600 p-2 rounded-3xl w-30 justify-center' type="button">Buy Now</button>
                        </div>         
            </div>
            ))}
           
            
    </div>
  )
}

export default Section3
