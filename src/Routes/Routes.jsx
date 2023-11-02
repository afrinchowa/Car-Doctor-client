// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import BookService from "../Pages/BookService/BookService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
     
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signUp',
            element:<SignUp></SignUp>
        },
        {
          path: '/book/:id',
          element:<PrivateRoute><BookService></BookService></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
        
      {
        path: '/bookings' ,
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>

      }
      
      ]
    },
  ]);

  export default router;