import React, { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";
import { ItemFormContext } from "../context/ItemFormContext";

const SpacecraftBuilder = () => {
  const INITIAL_STATE = {
    name: "",
    qty: "",
    purpose: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h1>Spacecraft Builder</h1>
      <h2>Add an Item to the Inventory</h2>
      <ItemFormContext.Provider
        value={{
          formData,
          setFormData,
          items,
          addItem,
          INITIAL_STATE,
          deleteItem,
        }}
      >
        <div>
          <ItemForm />
        </div>

        <div>
          <InventoryDisplay />
        </div>
      </ItemFormContext.Provider>
    </div>
  );
};

export default SpacecraftBuilder;
