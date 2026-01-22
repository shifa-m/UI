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
    img:"https://i.pinimg.com/736x/3c/70/71/3c70710204308701b098f8693515d875.jpg"
  },
  {
    img:"https://i.pinimg.com/1200x/42/06/69/420669c6c7bde215b8fe5d27f1b8ba1b.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/36/62/e1/3662e1a5e9b53ed4e04cb64ba0e89888.jpg"
  },
  {
   img:"https://i.pinimg.com/736x/de/e0/de/dee0de867b0e9ca801fd9400efb86368.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/2c/05/91/2c0591c100f0feb87525dcfb13faa69c.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/fd/60/cf/fd60cf23a60527e683cae259779fcafe.jpg"
  },
  {
    img:"https://i.pinimg.com/736x/5b/d1/a2/5bd1a2689ac916f9b24b83e3a1136112.jpg"
  },
  

  ]
  return (
    <div>

    <Navbar/>
    <Section2 images={images}/>
    <Uppercontent images={images} />
    
    </div>
  )
}

export default App