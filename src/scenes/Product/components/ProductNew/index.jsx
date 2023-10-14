import productsApi from 'api/productsApi';
import React, { useEffect, useState } from 'react';

import SliderProduct from '../SliderProduct';

const ProductNew = () => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await productsApi.getProductNew();
      setListProduct(res.data.data);
    })();
  }, []);

  return <SliderProduct listProduct={listProduct} />;
};

export default ProductNew;
