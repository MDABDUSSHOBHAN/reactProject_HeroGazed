import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import ErrorPage from './Component/Error/Error.jsx';
import Shop from './Component/Shop/Shop.jsx';
import Cart from './Component/cart/Cart.jsx';
import { productData } from './Loders/Getcatr.js';
import Corder from './Component/corder/Corder.jsx';
import  { Toaster } from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: productData,
    children: [
      {
        path: 'home',
        element: <Home></Home>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'shop',
        element: <Shop></Shop>,
        loader : () => fetch('products.json')
      },
      //It will Be deleted....
      {
        path: 'cart',
        element: <Cart></Cart>,
        loader: productData
      },
      {
        path: 'corder',
        element:<Corder></Corder>
        
      },
    ],
   
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    
    <RouterProvider router={router} />
    <Toaster></Toaster>
    </>

  </React.StrictMode>,
)
