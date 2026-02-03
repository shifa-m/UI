// import React from 'react'

// const section4 = () => {
//   return (
//     <div className='w-1/2 flex mt-40  '>
//     <div className='h-screen bg-white text-black'>
//      <h1 className='text-9xl font-extrabold flex justify-center  pt-50  '>Let's</h1>
//       <h1 className='text-9xl font-extrabold flex justify-center pl-30 ' >Get In</h1>
//        <h1 className='text-9xl font-extrabold flex justify-center pl-50'>Touch</h1>
//     </div>
//     <div className='p-10 flex'>
//       <label htmlFor="" className='text-xl font-bold mt-90 ml-140 '>FirstName  </label>
//      <input type="text" name="" id="" className='border-2 w-70 h-10 mt-90 ml-3 ' />
//     </div>
//     <div className='p-10 mt-120 '>
//       <label htmlFor="" className='text-xl font-bold mr-2 '>LastName   </label>
//      <input type="text" name="" id="" className='border-2 w-70 h-10 ' />
//     <button className='border-2 mt-3 w-30 ml-25 bg-gray-500 border-none rounded'>Submit</button>
   
//     </div>
      
   
//     </div>

//   )
// }

// export default section4
import React from "react";
import { useState } from "react";

const Section4 = () => {


  const [formData, setformData] = useState({
    firstName:"",
    lastName:"",
    message:"",
  });

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setformData((prev)=>({
      ...prev,
      [name]:value,
    }))

    }
  


  const handleSubmit=(e)=>{
    e.preventDefault();

    localStorage.setItem("contactFormData",JSON.stringify(formData));
    alert("Data is Saved Sucessfully");
    
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-300 to-green text-xl  px-6">
      
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        
        <div className="text-black">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
            Let's <br />
            Get In <br />
            Touch
          </h1>
          <p className="mt-6 text-gray-900 text-lg max-w-md">
            Have a project in mind or just want to say hello?
            I’m always open to discussing new ideas.
          </p>
        </div>

    
        <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
          value={formData.firstName}
          onChange={handleChange}
                className="w-full h-12 bg-transparent border border-gray-500 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                placeholder="John"  
              />
            
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
          value={formData.lastName}
          onChange={handleChange}
                className="w-full h-12 bg-transparent border border-gray-500 rounded-lg px-4 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                placeholder="Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Message
              </label>
              <textarea
               name="message"
          value={formData.message}
          onChange={handleChange}
                rows="4"
                className="w-full bg-transparent border border-gray-500 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                placeholder="Write your message..."
              />
            </div>

            <button type="submit" className="w-full h-12 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300" 
             
            >
              Send Message 🚀
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}


export default Section4;
