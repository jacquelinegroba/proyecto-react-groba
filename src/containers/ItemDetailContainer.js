import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../components/ItemDetail';
import { productsCollection } from '../utils/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const detailFilter = doc(productsCollection, id);

    getDoc(detailFilter).then((res) => setProductDetail({ id: res.id, ...res.data() }));
  }, [id]);
  return <ItemDetail products={productDetail} />;
};

export default ItemDetailContainer;