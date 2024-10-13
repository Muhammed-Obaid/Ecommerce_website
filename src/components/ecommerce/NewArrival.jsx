import React from 'react'
const NewArrival = ({img, title}) => {
  return (
    <div className='new-arrival'>
      <img src={img} alt="" height={60} width={100}/>
      <h1>{title}</h1>
    </div>
  )
}

export default NewArrival
