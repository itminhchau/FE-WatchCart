import React from 'react';
import PropTypes from 'prop-types';
import dongho from '../../../../assets/image/dongho.png';
import { Rating } from '@mui/material';
import { formatPrice } from 'constants/common';
import { useNavigate } from 'react-router-dom';

ItemProduct.propTypes = {};

function ItemProduct({ product }) {
  const navigate = useNavigate();

  const handleClickNavigate = (id) => {
    if (id) {
      navigate(`/products/${id}`);
    }
  };
  return (
    <div
      className=" overflow-hidden text-black bg-white max-w-full md:max-w-[285px]  flex flex-col justify-center items-center border-[1px] border-white rounded-[10px] p-[8px] box-border"
      onClick={() => handleClickNavigate(product.id)}
    >
      <img
        src={product.imageProduct[0].url}
        alt=""
        srcSet=""
        className=" cursor-pointer hover:scale-110 ease-in duration-300 mb-4"
      />
      <span className=" block text-center">{product.nameProduct}</span>
      <Rating name="read-only" value={product.rate} readOnly />
      <span>{formatPrice(product.price)}</span>
    </div>
  );
}

export default ItemProduct;
