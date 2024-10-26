import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/landing/Landing';
import Learning from './components/learning/Learning';
import Article from './components/learning/modules/Article';
import CourseModule from './components/learning/modules/CourseModule';
import Videos from './components/learning/modules/Videos';
import Navbar from './components/navbar/Navbar';
import Onboarding from './components/onboarding/Onboarding';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';

const appRouter= createBrowserRouter([
  {
    path: '/',
    element:<Home/>,
},
{
  path:'/registration',
  element:<Registration/>
},
{
  path:'/login',
  element:<Login/>
},
{
  path:'/onboarding',
  element:<Onboarding/>
},
{
  path:'/learning',
  element:<Learning/>
},
{
  path:'/course/:id',
  element:<CourseModule/>
},

{
  path:'/courses/:id/:module/videos',
  element:<Videos/>
},
{
  path:'/courses/:id/:module/articles',
  element:<Article/>
}
])

function App() {
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App
