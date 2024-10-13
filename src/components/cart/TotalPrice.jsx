import React, { useEffect, useState } from 'react'
import { useCart } from '../CartProvider'
import Button from '@mui/material/Button'
import Modal from "react-modal";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from 'react-router-dom';
import PaymentForm from '../payment/Payment';
import { Elements } from '@stripe/react-stripe-js'
// import { stripePromise } from './'
import { stripePromise } from '../../stripe/stripe';

const TotalPrice = () => {
  const countries = ['Pakistan', "India", 'Japan', 'Australia', 'England']
  const [totalPrice, setTotalPrice] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate()
  let {
    cartItem,
    setCartItem
  } = useCart()
  // console.log(cartItem?.length)


  const setAmount = () => {
    const initialValue = 0;
    const sumWithInitial = cartItem?.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity * Math.floor(currentValue.price),
      initialValue
    );
    setTotalPrice(sumWithInitial)
  }

  // const haldlePayment = () => {
  //   if (form.checkValidity()) {
  //     alert('Payment Done successfully')
  //     setModalOpen(false)
  //     // navigate('/form')
  //     setCartItem([])
  //   }

  // }
  const toForm = () => {
    if (cartItem?.length) {
      setModalOpen(true)
    }
    else {
      alert('please select Item first')
    }
  }

  const clearCart = () => {
    setCartItem(localStorage.clear())
  }

  useEffect(() => {
    setAmount()
  }, [cartItem])


  return (
    <div className='total-amount'>
      <p className='amount'>
        Total Amount: $ <span>{totalPrice}</span>
      </p>
      <div className='order-space flex justify-center gap-4'>
        <Button type='submit' variant='contained' onClick={clearCart}>Clear All</Button>
        <Button type='submit' variant='contained' color='success' onClick={toForm}>Payment Method</Button>
        <button className=''>check</button>
      </div>
      <div className=''>
        <Modal
          className='box w-[45%] py-2 shadow-lg m-auto mt-16 bg-white text-black'
          isOpen={modalOpen}>
          <Button className='cancel-icon' ><CancelIcon onClick={() => {
            setModalOpen(false)
          }} /></Button>
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </Modal>
      </div>
    </div>
  )
}

export default TotalPrice
