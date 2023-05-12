import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetail = ({ products }) => {
  const [itemCount, setItemCount] = useState(0);
  const context = useContext(CartContext);

  const onAdd = (qty) => {
    setItemCount(qty);
    context.addToCart(products, qty);
  };

  return (
    <div className="p-5">
      <div className="card" style={{ maxwidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex">
            <img src={products.thumbnail} alt="" className="img-fluid rounded-start flex-fill" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center">{products.title}</h5>
              <p className="card-text">{products.detail}</p>
              <p className="card-text d-flex justify-content-center card-text3">${products.price} c/u</p>
              <div className="d-flex justify-content-center">
                {itemCount === 0 ? (
                  <ItemCount initial={itemCount} stock={products.stock} onAdd={onAdd} />
                ) : (
                  <Link to="/cart">
                    <button type="button" className="btn btn-danger ms-2">
                      Comprar
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;