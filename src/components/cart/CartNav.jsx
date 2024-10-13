import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CartNav = () => {
  
  return (
    <header>
      <div className='cart-nav'>
        <Link to='/' className='back'><ArrowBackIcon sx={{ fontSize: 30, color: 'white' }} /></Link>
        <h2>ShopPo</h2>
      </div>
    </header>
  )
}

export default CartNav
