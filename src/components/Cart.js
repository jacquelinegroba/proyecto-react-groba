import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

const Cart = () => {
  const context = useContext(CartContext);

  const createOrder = () => {
    let itemsForDB = context.cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.qty,
    }));
    let order = {
      buyer: {
        email: 'groba46@hotmail.com',
        name: 'Jacqueline Belén Groba',
        phone: '1139458550',
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: context.total(),
    };

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, 'orders'));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createOrderInFirestore().then((result) => alert('Tu orden ha sido creada ID=' + result.id));

    context.cartList.forEach(async (item) => {
      const itemRef = doc(db, 'products', item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.qty),
      });
    });

    context.clear();
  };

  return (
    <div className="container">
      <div className="row d-flex pt-5">
        {context.cartList.length > 0 ? (
          <div className="d-flex justify-content-end pb-4">
            <button onClick={context.clear} type="button" className="btn btn-danger ms-2">
              Eliminar todo
            </button>
          </div>
        ) : (
          <h1>El carrito está vacío</h1>
        )}
        {context.cartList.length > 0 ? null : (
          <Link to="/">
            <button type="button" className="btn btn-danger ms-2">
              Ver productos
            </button>
          </Link>
        )}
        <div className="col-lg-6 pt-3 pt-3">
          {context.cartList.length > 0 &&
            context.cartList.map((products) => (
              <div key={products.id}>
                <div className="card mb-3" style={{ maxwidth: '540px' }}>
                  <div className="row g-0">
                    <div className="col-md-4 d-flex">
                      <img src={products.thumbnail} alt="" className="img-fluid rounded-start flex-fill" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-center">{products.title}</h5>
                        <p className="card-text d-flex justify-content-center card-text2">{products.qty} productos</p>
                        <p className="card-text d-flex justify-content-center card-text3">${context.calculateTotalItem(products.id)}</p>
                        <div className="d-flex justify-content-center">
                          <button onClick={() => context.removeItem(products.id)} type="button" className="btn btn-danger ms-2">
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {context.cartList.length > 0 ? (
          <div className="col-lg-6 pt-3">
            <ul className="list-group">
              <p className="fw-bold">Subtotal:</p>
              <li className="list-group-item">${context.calculateSubTotal()}</li>
              <p className="pt-4 fw-bold">+ IVA (21%):</p>
              <li className="list-group-item">${context.calculateTaxes()}</li>
              <p className="pt-4 fw-bold">Total:</p>
              <li className="list-group-item">${context.total()}</li>
            </ul>
          </div>
        ) : null}
        {context.cartList.length > 0 ? (
          <div className="d-flex justify-content-end pb-4">
            <button onClick={createOrder} type="button" className="btn btn-success ms-2">
              Confirmar compra
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;