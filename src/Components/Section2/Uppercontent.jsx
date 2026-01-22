import React from 'react'

const Uppercontent = ({image}) => {
  return (
    <div className='h-screen w-full  '>
            <p className='flex justify-center text-xl p-10 pb-0 pt-20'>Lorem ipsum dolor sit.</p>
            <h1 className='flex justify-center text-8xl  font-bold'>Taly FeedBack</h1>
            <div className='flex overflow-x-auto overflow-y-hidden gap-4 no-scrollbar' >
                        {image.map((item,index)=>(
                          <img  
                          key={index} 
                           src={item.img}  
                           className='h-[200px] w-[300px] m-15 rounded-2xl ' />
                        ))}

                        
                         


                          
                          
            </div>
            <div className=' flex gap-9 pl-15 '>
                        <p className='text-10px font-semibold'><span className='text-2xl font-bold flex justify-center'>Lorem ipsum dolor sit.</span><br />Lorem ipsum dolor sit ametconsectetur adipisicing elit. Ipsa vel quos ipsum maiores consequatur! Pariatur qui expedita voluptate dicta deserunt?</p>
                        <div/>
            <div className=''>
            
                        <h1 className='text-2xl font-bold flex justify-center'>Lorem ipsum dolor sit.</h1><br />
                        <p className='text-10px font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel quos ipsum maiores consequatur! Pariatur qui expedita voluptate dicta deserunt?</p>

            </div>
            <div className=''>
            
                        <h1 className='text-2xl font-bold flex justify-center' >Lorem ipsum dolor sit.</h1><br />
                        <p className='text-10px font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vel quos ipsum maiores consequatur! Pariatur qui expedita voluptate dicta deserunt?</p>

            </div>
            </div>
            </div>
            
    
  )
}

export default Uppercontent