import React from 'react'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  }
])

const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App