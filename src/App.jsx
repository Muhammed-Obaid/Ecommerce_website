import './App.css'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Ecommerce from './components/ecommerce/Ecommerce'
import Cart from './components/cart/Cart'
import { CartProvider } from './components/CartProvider'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise } from './stripe/stripe'
import Payment from './components/payment/Payment'


const App = () => {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Ecommerce category={`all`} />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/form' element={<Payment />} /> */}
      </>
    )
  )

  return (
    <>
      <CartProvider>
        <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
        </Elements>
      </CartProvider>
    </>
  )
}

export default App