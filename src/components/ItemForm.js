import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm( { onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name:'',
    category: "Produce"
  })

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function onSubmit(e) {
    e.preventDefault()
  const newItem = {
    id: uuid(),
    name: formData.name,
    category: formData.category,
  }
  onItemFormSubmit(newItem)
}

  return (
    <form className="NewItem" onSubmit={onSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
