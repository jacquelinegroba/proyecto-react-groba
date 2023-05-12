import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <div className="row p-2">
      {products.map((item) => (
        <Item key={item.id} products={item} />
      ))}
    </div>
  );
};

export default ItemList;