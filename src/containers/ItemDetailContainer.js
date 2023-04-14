import CardDetail from "../components/CardDetail";
import datos from "../data/datos.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id === undefined) {
      customFetch(1, datos)
        .then((result) => setProductDetail(result[0]))
        .catch((err) => console.log(err));
    } else {
      customFetch(1, datos.filter((item) => item.id === parseInt(id))[0])
        .then((result) => setProductDetail(result))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return <CardDetail datos={productDetail} />;
};

export default ItemDetailContainer;

