import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './components/Home/Home';
import Main from './components/Layout/Main';
import OrdersReview from './components/OrdersReview/OrdersReview';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
{
  path: '/',
  element: <Main/>,
  children: [
    {
      path: '/',
      element: <Home/>,
      loader: ()=> fetch('tshirts.json')
    },
    {
      path: 'review',
      element: <OrdersReview/>,
    },
    {
      path: 'grandpa',
      element: <Grandpa/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
