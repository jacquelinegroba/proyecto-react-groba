import React, {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [product, setProduct] = useState(initial);
   
   
    const RemoveProduct = () =>{
      if(product > initial){
        const aux = product - 1
        setProduct(aux)
          }
    }


    const AddProduct = () =>{
        if (product < stock){
            const aux = product + 1
            setProduct(aux)
          }
    }
  return (
  <>
  <button onClick={RemoveProduct} type="button" className="btn btn-dark">-</button>
  <p className='m-2'>{product}</p>
  <button onClick={AddProduct} type="button" className="btn btn-dark">+</button>
  <button onClick={onAdd} type="button" className="btn btn-dark ms-2">Añadir al carrito</button>
  </>  
   );
  };

  export default ItemCount;