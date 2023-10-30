import { Rating } from '@mui/material';
import { formatPrice } from 'constants/common';
import formatSalePrice from 'constants/formatSalePrice';
import { useNavigate } from 'react-router-dom';

ItemProduct.propTypes = {};

function ItemProduct({ product }) {
  const navigate = useNavigate();

  const handleClickNavigate = (id) => {
    if (id) {
      navigate(`/products/${id}`);
    }
  };
  const promotion = product.promotion?.valuePromotion || 0;
  console.log('check product', product);
  return (
    <div
      className=" overflow-hidden text-black bg-white  max-w-full md:max-w-[285px]  flex flex-col justify-center items-center border-[1px] border-white rounded-[10px] p-[8px] box-border relative"
      onClick={() => handleClickNavigate(product.id)}
    >
      <img
        src={product.imageProduct[0].url}
        alt=""
        srcSet=""
        className="min-h-[166px] cursor-pointer hover:scale-110 ease-in duration-300 mb-4"
      />
      <span className="  line-clamp-2 overflow-ellipsis">{product.nameProduct}</span>
      <Rating name="read-only" value={product.rate} readOnly />
      <div className=" flex justify-center gap-4 items-end w-full">
        <span className="text-[16px] font-bold">{formatPrice(formatSalePrice(product.price, promotion))}</span>
        <span className=" line-through text-[12px] text-gray-400">{formatPrice(product.price)}</span>
      </div>

      <span className=" text-gray-500 text-[14px] float-left block w-full">Đã bán: {product.quantitySold || 0}</span>
      <div className=" flex flex-col justify-center  items-center absolute top-[4px] right-[4px] w-[40px] h-[36px] text-center bg-primary-yelow before:content-[''] before:block before:absolute before:border-x-[20px] before:border-b-[8px] before:bottom-[-8px] before:left-0 before:border-solid before:border-icon-sale">
        <span className=" text-white text-[16px]">{promotion}%</span>
        <span className=" text-white text-[14px]">Giảm</span>
      </div>
    </div>
  );
}

export default ItemProduct;
