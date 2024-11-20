import React from 'react'

const CarItem = ({ car, onDelete }) => {
  return (
    <li>
      {car.id} - {car.manufacturer} {car.model}{' '}
      <button onClick={() => onDelete(car.id)}>Delete</button>
    </li>
  )
}

export default CarItem
