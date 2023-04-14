import CardList from "../components/CardList"
import datos from "../data/datos.json"
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import customFetch from "../utils/customFetch";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const {id} = useParams();
    
  useEffect(() => {
    if (id === undefined) {
      customFetch(1, datos)
      .then(result => setProductList(result))
      .catch(err => console.log(err))
    } else {
      customFetch(1, datos.filter(item => item.categoryid === id))
      .then(result => setProductList(result))
      .catch(err => console.log(err))
    }

   }, [id])
        return(
            <CardList datos={productList}/>
        );
    }
    
    export default ItemListContainer;

  

