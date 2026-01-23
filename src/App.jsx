import React from 'react'
import Navbar from './Components/Section1/Navbar'
import Section2 from './Components/Section2/Section2'
import Uppercontent from './Components/Section2/Uppercontent'
import Section3 from './Components/Section3/Section3'

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
  }]

 const section3=[{
     img:"https://i.pinimg.com/1200x/9e/8b/6e/9e8b6ed6ee305de7e556f0480b7443b5.jpg",
     
 },
 {
     img:"https://i.pinimg.com/1200x/aa/f3/aa/aaf3aa4e15769c860aff8b2a22edfc78.jpg"
 },
 {
    
      img:"https://i.pinimg.com/1200x/30/29/3f/30293f670a7fb51be8ad92b05bf0a566.jpg",
 },
 {
     img:"https://i.pinimg.com/1200x/3c/2b/00/3c2b0020ddceaca5048f92ef76f99b65.jpg"
     
 },
 {
     img:"https://i.pinimg.com/1200x/1d/78/c4/1d78c43191f5490183d00b7e86093bfa.jpg"
     
 },
 {
     img:"https://i.pinimg.com/736x/91/ef/92/91ef92aad20d5acd4a870117464aed61.jpg"
 },
 {
     img:"https://i.pinimg.com/1200x/8b/e0/77/8be077e57ea5f8e0ebb011af7507eb1c.jpg"
 },
 {
     img:"https://i.pinimg.com/1200x/3c/a9/9a/3ca99a55d718100b7dc154093d704410.jpg"
     
 },


 ]

  
  return (
    <div>

    <Navbar/>
    <Section2 images={images}/>
    <Uppercontent images={images} />
    <Section3 data={section3}/>
    
    </div>
  )
}

export default App