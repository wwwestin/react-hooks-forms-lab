import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  //finish passing onItemFormSubmit and set state for search
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items
    
    .filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    )
    
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  //add filter to itemsToDisplay for search to set all search cases to lower case
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit= {onItemFormSubmit}/>
      <Filter 
      search ={search}
      onSearchChange ={setSearch}
      onCategoryChange= {handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}
//add event handlers and values to forms/inputs
export default ShoppingList;
