import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import SiginUp from './components/SiginUp';
import AuthProviders from './components/AuthProviders';
import PriverRoute from './components/PriverRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <PriverRoute> <Inventory></Inventory></PriverRoute>
      },
      {
        path:'checkout',
        element: <PriverRoute><Checkout></Checkout></PriverRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    {
      path:'/sign',
      element: <SiginUp></SiginUp>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
 
  </React.StrictMode>,
)
