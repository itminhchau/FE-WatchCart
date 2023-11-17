import promotionApi from 'api/promotionApi';
import apple from 'assets/image/apple-logo.png';
import { formatPrice } from 'constants/common';
import formatSalePrice from 'constants/formatSalePrice';
import { useEffect, useState } from 'react';
import CountDownClock from './components/CountDownClock';

PromotionProduct.propTypes = {};

function PromotionProduct(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let res = await promotionApi.getAll();
        setData(res.data);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className=" mx-[24px] h-[400px] bg-[#f7ede4] flex justify-around items-center p-5">
      <div className="  hidden lg:block basis-1/2 bg-lg-background-promotion w-full h-full bg-no-repeat"></div>
      <div className="flex-1 lg:basis-1/2 flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-start">
          <img src={apple} alt="" className=" hidden lg:block" />
          <span className="text-black w-[260px] lg:w-full text-[16px] lg:text-[30px] font-bold block text-center">
            {data.nameProduct}
          </span>
        </div>
        <div className=" h-[133px] w-[320px]  lg:w-full  bg-[#b2272c]  flex justify-center gap-3 items-center rounded-md">
          <span className=" text-[20px] font-bold">Giảm giá sốc chỉ:</span>
          <span className="my-4 mx-0 text-2xl  lg:text-5xl font-bold leading-7 text-primary-yelow mr-3">
            {formatPrice(formatSalePrice(data.price, data.promotion))}
          </span>
          <span className="my-4 mx-0 text-[16px] lg:text-xl font-bold leading-7 text-gray-300 line-through ">
            {formatPrice(data.price)}
          </span>
        </div>
        <CountDownClock expDate={data.expDate} />
      </div>
    </div>
  );
}

export default PromotionProduct;
