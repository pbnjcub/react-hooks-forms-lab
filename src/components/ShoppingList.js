import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [itemsArray, setItemsArray] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchItem, setSearchItem] = useState("")



  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchItem(e) {
    setSearchItem(e.target.value.toLowerCase())
  }

 

  function onItemFormSubmit(newItem) {

    const newItemsArray = [...itemsArray, newItem]
    setItemsArray(newItemsArray)
  }


  const itemsToDisplay = itemsArray.filter((item) => {
    if (selectedCategory === "All") {
      if (searchItem === "") {
        return true
      } else {
        return item.name.toLowerCase().match(searchItem)
      }
    } else {
      if (searchItem === "") {
        return item.category === selectedCategory
      } else {
        return item.name.toLowerCase().match(searchItem)
      }
    }
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchItem} search={searchItem} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
