import React, { useState, useEffect } from 'react'
import CarsList from './CarList'
import AddCarForm from './AddCarForm'

const API_URL = '/api/cars'

const Cars = () => {
  const [apiHostname, setApiHostname] = useState("")
  const [cars, setCars] = useState([])

  const fetchCars = async () => {
    try {
      const response = await fetch(API_URL)
      if (response.ok) {
        const data = await response.json()
        setApiHostname(response.headers.get('X-EC2-Hostname'))
        setCars(data)
      } else {
        throw new Error(`${response.status} - ${response.statusText}`)
      }
    } catch (error) {
      console.error('Error fetching cars:', error)
      alert('Error fetching cars:' + error.message)
    }
  }

  const addCar = async (car) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
      })
      if (response.ok) {
        fetchCars()
      } else {
        throw new Error(`${response.status} - ${response.statusText}`)
      }
    } catch (error) {
      console.error('Error adding car:', error)
      alert('Error adding car: ' + error.message)
    }
  }

  const deleteCar = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      if (response.ok) {
        fetchCars()
      } else {
        console.error('Error deleting car')
        throw new Error(`${response.status} - ${response.statusText}`)
      }
    } catch (error) {
      console.error('Error deleting car:', error)
      alert('Error adding car: ' + error.message)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <div>
      <code>web ({ import.meta.env.VITE_EC2_HOSTNAME }) =&gt; api ({ apiHostname })</code>
      <CarsList cars={cars} onDelete={deleteCar} />
      <AddCarForm onAdd={addCar} />
    </div>
  )
}

export default Cars
