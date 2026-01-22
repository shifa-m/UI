import React from 'react'
import Navbar from './Components/Section1/Navbar'
import Section2 from './Components/Section2/Section2'
import Uppercontent from './Components/Section2/Uppercontent'

const App = () => {

  const images=[
    {
    img:"https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg"
  },
  {
    img:"https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg"
  },
  {
    img:"https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg"
  },
  {
    img:"https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg"
  },
  {
   img:"https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg"
  },
  {
    img:"https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg"
  },
  {
    img:"https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg"
  },
  {
    img:"https://i.pinimg.com/1200x/de/a0/1a/dea01a87b4e0389b06ea43a19e6af30c.jpg"
  },
  

  ]
  return (
    <div>

    <Navbar/>
    <Section2 />
    <Uppercontent image={images}/>
    
    </div>
  )
}

export default App