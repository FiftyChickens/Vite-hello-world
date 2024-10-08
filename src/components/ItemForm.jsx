import { useContext } from "react";
import { ItemFormContext } from "../context/ItemFormContext";

const ItemForm = () => {
  const { formData, setFormData, addItem, INITIAL_STATE } =
    useContext(ItemFormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        id="qty"
        name="qty"
        value={formData.qty}
        onChange={handleChange}
        placeholder="Quantity"
      />
      <input
        type="text"
        name="purpose"
        id="purpose"
        value={formData.purpose}
        onChange={handleChange}
        placeholder="Purpose"
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default ItemForm;
