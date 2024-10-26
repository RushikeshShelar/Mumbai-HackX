import React from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-16">
      <div className='flex flex-col items-center text-center p-8'>
        <h1 className='text-8xl font-extrabold mb-4'>EdTech</h1>
        <p className='text-xl font-medium text-gray-200 mb-6'>
          Empowering Learning Through Technology
          <br />
          <span className='text-gray-300 italic'>Innovative AI Solutions for Education</span>
        </p>
        <Link to="/get-started">
          <Button className='bg-white text-black rounded-full px-6 py-3 transition-all duration-300 transform hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
