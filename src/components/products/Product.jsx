import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';

const MenCategory = ({ item, id, addToCart }) => {

  return (
    <>
      <div className='boxxes'>
        <img src={item.image} alt="" />
        <p>
          {(item.title).slice(0, 45)}
        </p>
        <div className='price'>
          <p>${Math.floor(item.price)}</p>
          <Button variant="outlined" color="success" size='small' onClick={() => { addToCart(item, id) }}>
            <AddCircleIcon sx={{ fontSize: 35 }} />
          </Button>
        </div>
      </div>
    </>
  )
}

export default MenCategory
