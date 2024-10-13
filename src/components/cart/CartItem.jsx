import React from 'react'
import { useCart } from '../CartProvider'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


let EachItemTotalPrice = 0

const CartItem = ({ item, id, ItemDelete }) => {
  // console.log(item)

  let {
    setCartItem
  } = useCart()

  const increaceItem = () => {
    setCartItem((prev) => {
      const newCart = prev.map(item => {
        if (item.id === id) return { ...item, quantity: item.quantity + 1 }
        return item
      })
      return newCart
    })
  }
  const decrementItem = () => {
    setCartItem((prev) => {
      const newCart = prev.map(item => {
        if (item.id === id && item.quantity > 1) return { ...item, quantity: item.quantity - 1 }
        return item
      })
      return newCart
    })
  }
  return (
    <div>
      <div className='cartItems'>
        <img src={item.image} alt="" height={30} width={30} />
        <p className='text-sm'>{item.title.slice(0, 45)}</p>
        <div className='add-remove'>
          <Button onClick={increaceItem}><AddIcon /></Button>
          <li>{item.quantity}</li>
          <Button onClick={decrementItem}><RemoveIcon /></Button>
        </div>
        <p>${item.quantity * Math.floor(item.price)}</p>
        <Button onClick={() => {
          ItemDelete(id)
        }}><DeleteIcon /></Button>
      </div>
    </div>
  )
}

export default CartItem
export { EachItemTotalPrice }
