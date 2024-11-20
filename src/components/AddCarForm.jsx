import React, { useState } from 'react'

const AddCarForm = ({ onAdd }) => {
  const [form, setForm] = useState({ manufacturer: '', model: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.manufacturer && form.model) {
      onAdd(form)
      setForm({ manufacturer: '', model: '' })
    }
  }

  return (
    <div>
      <h2>Add new car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Manufacturer"
          value={form.manufacturer}
          onChange={(e) => setForm({ ...form, manufacturer: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Model"
          value={form.model}
          onChange={(e) => setForm({ ...form, model: e.target.value })}
          required
        />
        <button type="submit">Add new</button>
      </form>
    </div>
  )
}

export default AddCarForm
