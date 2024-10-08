const ItemAction = ({ itemId, deleteItem }) => {
  return (
    <>
      <button onClick={() => deleteItem(itemId)}>Delete</button>
    </>
  );
};

export default ItemAction;
