import React from 'react'
import Chatbot from './chatbot/Chatbot.jsx'
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