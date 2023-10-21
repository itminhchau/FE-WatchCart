import { formatPrice } from 'constants/common';
import React from 'react';
import noSearch from 'assets/image/no-cart.png';
import { useNavigate } from 'react-router-dom';

ModalSearch.propTypes = {};

function ModalSearch({ modalSearchRef, listProductSearch, onCloseSearch }) {
  const navigate = useNavigate();

  const handleClickProduct = (item) => {
    navigate(`/products/${item.id}`);
    onCloseSearch();
  };
  return (
    <div
      ref={modalSearchRef}
      className="bg-white w-full h-[400px] rounded-xl px-[8px] pt-[36px] pb-[18px] md:w-[500px] absolute top-[70px] right-0 md:right-[120px] lg:right-[220px] z-20 container "
    >
      <span className="text-black font-bold w-full border-b-2 px-[16px] pt-[8px] border-gray-300 block pb-2 absolute top-0 left-0 right-0">
        kết quả tìm kiếm của bạn .....
      </span>

      <ul className=" mb-[40px] mt-[4px] overflow-y-scroll h-full flex flex-col justify-start items-start">
        {listProductSearch.length <= 0 && <img src={noSearch} alt="" className="m-auto" />}
        {listProductSearch &&
          listProductSearch.length > 0 &&
          listProductSearch.map((item) => {
            return (
              <li
                className="my-[4px] flex flex-col w-full justify-center items-start bg-gray-200 px-[16px] py-[8px] cursor-pointer rounded-xl group hover:bg-gray-500 "
                onClick={() => handleClickProduct(item)}
              >
                <span className=" text-primary-yelow truncate max-w-[328px] overflow-ellipsis group-hover:text-yellow-300 ">
                  {item.nameProduct}
                </span>
                <span className="text-gray-500 group-hover:text-white">{formatPrice(item.price)}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ModalSearch;
