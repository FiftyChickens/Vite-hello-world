import { useContext } from "react";
import ItemAction from "./ItemAction";
import ItemCard from "./ItemCard";
import { ItemFormContext } from "../context/ItemFormContext";
import { v4 as uuid } from "uuid";

const InventoryDisplay = () => {
  const { items, deleteItem } = useContext(ItemFormContext);

  return (
    <div>
      <h2>Inventory</h2>
      {items.map((item) => (
        <section key={uuid}>
          <div>
            <ItemCard name={item.name} qty={item.qty} purpose={item.purpose} />
          </div>

          <div>
            <ItemAction itemId={item.id} deleteItem={deleteItem} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default InventoryDisplay;
