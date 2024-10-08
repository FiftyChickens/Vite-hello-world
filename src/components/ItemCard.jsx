import React from "react";

const ItemCard = ({ name, qty, purpose }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>quantity: {qty}</p>
      <p>Purpose: {purpose}</p>
    </div>
  );
};

export default ItemCard;
