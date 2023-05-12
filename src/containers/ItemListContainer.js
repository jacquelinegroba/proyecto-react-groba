import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemList from '../components/ItemList';
import { productsCollection } from '../utils/firebaseConfig';
import { getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const requestFilter = categoryId ? query(productsCollection, where('category', '==', categoryId)) : productsCollection;

    getDocs(requestFilter).then((result) => setProductList(result.docs.map((doc) => ({ id: doc.id, ...doc.data() }))));
  }, [categoryId]);

  return <ItemList products={productList} />;
};

export default ItemListContainer;