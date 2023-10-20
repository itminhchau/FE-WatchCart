import productsApi from 'api/productsApi';
import React, { useEffect, useState } from 'react';
import SliderProduct from '../SliderProduct';

const BestSellingProduct = () => {
  const [listProduct, setListProduct] = useState([]);
  const [queryParams, setQueryParams] = useState({
    page: 1,
    limit: 10,
    news: 'DESC',
  });

  useEffect(() => {
    (async () => {
      const res = await productsApi.getAll(queryParams);
      setListProduct(res.data.data);
    })();
  }, [queryParams]);
  return <SliderProduct listProduct={listProduct} />;
};

export default BestSellingProduct;
