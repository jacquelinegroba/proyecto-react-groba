import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (products, qty) => {
    let item = cartList.find((item) => item.id === products.id);
    if (item === undefined) {
      setCartList([
        ...cartList,
        {
          id: products.id,
          title: products.title,
          thumbnail: products.thumbnail,
          price: products.price,
          qty: qty,
        },
      ]);
    } else {
      item.qty += qty;
      setCartList([...cartList]);
    }
  };

  const clear = () => {
    setCartList([]);
  };

  const removeItem = (id) => {
    let newState = cartList.filter((products) => products.id !== id);
    setCartList(newState);
  };

  const itemQty = () => {
    let qty = cartList.map((products) => products.qty);
    return qty.reduce((firstValue, actualValue) => firstValue + actualValue, 0);
  };

  const calculateTotalItem = (id) => {
    let totalItem = cartList.map((products) => products.id).indexOf(id);
    return cartList[totalItem].price * cartList[totalItem].qty;
  };

  const calculateSubTotal = () => {
    let totalItem = cartList.map((products) => calculateTotalItem(products.id));
    return totalItem.reduce((firstValue, actualValue) => firstValue + actualValue);
  };

  const calculateTaxes = () => {
    return calculateSubTotal() * 0.21;
  };

  const total = () => {
    return calculateSubTotal() + calculateTaxes();
  };

  return <CartContext.Provider value={{ cartList, addToCart, removeItem, clear, itemQty, calculateTotalItem, calculateSubTotal, calculateTaxes, total }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;