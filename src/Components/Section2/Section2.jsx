import React from 'react'
import Uppercontent from './Uppercontent'


const Section2 = ({images}) => {
  return (
    <div>
<div className='h-screen w-full p-5  '>
      <p className='flex justify-center text-xl p-10 pt-30 pb-3'>Lorem ipsum dolor sit.</p>

      <h1 className='flex justify-center text-8xl  font-bold pt-0  pb-0 mb-10' >Taly FeedBack</h1>

      <div className='flex overflow-x-auto overflow-y-hidden gap-4 no-scrollbar ' >
        <div className='flex overflow-x-auto gap-4 p-7 pt-10 pb-0'>

          {images.map((item, index) => (
            <img
              key={index}
              src={item.img}
              className='h-[400px] w-[500px] rounded-2xl flex-shrink-0 gap-6  object-cover'
              alt={`images-${index}`}
            />
          ))}
        </div>
      </div>
      
    </div>
    </div>

  )
}


export default Section2