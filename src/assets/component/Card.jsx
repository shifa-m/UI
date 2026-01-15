import React from 'react'




const Card = (props) => {
  return (
    <div className="parent">  
      <div className='border'>
      <div className='image'>
        <img src="https://i.pinimg.com/736x/09/2f/d0/092fd01fcefd06552e5549e43a552eb6.jpg
        " alt="my photo" />
      </div>
      <div className='details'>
        <p> Name:{props.names}</p>
        <p> Ages :{props.ages}</p>
        <p> Rank :{props.ranks}</p>
        <p> Points : {props.point}</p>
        <p> Level : {props.levels}</p>
      </div>
      <div className='friends'>
        <p>Add friends</p>
      </div>
      </div>
 
</div>

   
  
  )
}

export default Card
