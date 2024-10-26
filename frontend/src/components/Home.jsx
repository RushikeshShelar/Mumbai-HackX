import React from 'react'
import Chatbot from './chatbot/Chatbot'
import Landing from './landing/Landing'
import Navbar from './navbar/Navbar'

function Home(){
     return(
          <>
          <Navbar/>
          <Chatbot/>
          {/* <Landing/> */}
          </>
     )
}

export default Home