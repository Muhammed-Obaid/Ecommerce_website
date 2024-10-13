import React, { useEffect } from 'react'
import CartItem from './CartItem'
import TotalPrice from './TotalPrice'
import CartNav from './CartNav'
import { useCart } from '../CartProvider'
import Footer from '../ecommerce/Footer'

const Cart = () => {
  const {
    cartItem,
    setCartItem,
  } = useCart()

  const ItemDelete = (id) => {
    let filterItem = cartItem.filter(item => item.id !== id)
    setCartItem(filterItem)
    localStorage.setItem('cart', JSON.stringify(filterItem));
  }

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItem(savedCart);
  }, [])

  return (
    <div>
      <CartNav />
      {cartItem?.map((item, index) => {
        return (
          <CartItem item={item}
            id={item.id}
            ItemDelete={ItemDelete}
            key={index} />
        )
      })}
      <TotalPrice />
      {/* <Footer cart={true}/> */}
    </div>
  )
}

export default Cart
