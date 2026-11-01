import React from 'react'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import HomePage from "./page/HomePage";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import Dashboard from ".//page/Dashboard"



const router = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/homepage",
    element:<HomePage/>
    
  }
])

const App = () => {

  return (
    <div className=''>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App