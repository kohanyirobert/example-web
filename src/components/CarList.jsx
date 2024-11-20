import React from 'react'
import CarItem from './CarItem'

const CarsList = ({ cars, hasErrors, onDelete }) => {
  const items = cars.map(car => <CarItem key={car.id} car={car} onDelete={onDelete} />)
  return (
    <div>
      <h1>Car list</h1>
      {items.length === 0
        ? <h2>No cars to display</h2>
        : <ul>{items}</ul>
      }
    </div>
  )
}

export default CarsList
