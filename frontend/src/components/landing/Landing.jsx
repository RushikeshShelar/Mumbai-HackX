import React from 'react'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
function Landing() {
  return (
     <div id="home" className="mb-0 flex flex-col  items-center">
     <div className='mt-60 flex flex-col items-center text-center'>
       <h1 className='text-7xl font-extrabold font-inter-tight'>EdTech</h1>
       <p className='tracking-wide text-2xl font-bold text-gray-500 mt-5'>
         
         <br /> 
         <span className='tracking-normal text-gray-500'>advanced AI</span>
       </p>
        {/* <Link to={""} ><Button className='mt-6 bg-black border-2 border-black rounded-full bg-white text-black px-4 py-2 hover:bg-gray-200 '>Get Started</Button></Link> */}
        <button className='mt-6 bg-black border-2 border-black rounded-full bg-white text-black px-4 py-2 hover:bg-gray-200'>Get Started</button>
     </div>
   
   
   </div>
  )
}

export default Landing