import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemProduct from '../ItemProduct';
import apple from '../../../../assets/image/apple.png';
import samsung from '../../../../assets/image/samsung.png';
import xiaomi from '../../../../assets/image/xiaomi.png';
import brandApi from 'api/brandApi';
import productsApi from 'api/productsApi';

CategoryProduct.propTypes = {};

function CategoryProduct() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [listBrand, setListBrand] = useState();
  const [idBrand, setIdBrand] = useState({ idBrand: 1 });
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await brandApi.getAllBrand();
      setListBrand(res.data.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await productsApi.getProductOfCategory(idBrand);
      setListProduct(res.data.data);
    })();
  }, [idBrand]);

  const imageBrand = (id) => {
    switch (id) {
      case 1:
        return apple;
      case 2:
        return xiaomi;
      case 3:
        return samsung;
      default:
        return '';
    }
  };

  const handleClickBrand = (id) => {
    setIdBrand({
      ...idBrand,
      idBrand: id,
    });
  };
  console.log(listProduct);
  return (
    <div className=" mx-[24px]">
      <div className=" my-[18px] flex justify-start gap-4 items-center">
        {listBrand &&
          listBrand.map((item) => {
            return (
              <div className="flex flex-col justify-center items-center">
                {}
                <img
                  src={imageBrand(item.id)}
                  alt=""
                  className="w-[60px] h-[60px] cursor-pointer hover:scale-110 ease-in duration-300"
                  onClick={() => handleClickBrand(item.id)}
                />
                <span>{item.nameBrand}</span>
              </div>
            );
          })}

        {/* <div>
          <img src={samsung} alt="" className="w-[60px] h-[60px] cursor-pointer hover:scale-110 ease-in duration-300" />
          <span> samsung watch</span>
        </div>
        <div>
          <img src={xiaomi} alt="" className="w-[60px] h-[60px] cursor-pointer hover:scale-110 ease-in duration-300" />
          <span> xiaomi watch</span>
        </div> */}
      </div>
      <div className=" grid gap-[16px] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        {listProduct.map((item) => {
          return <ItemProduct key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
}

export default CategoryProduct;
