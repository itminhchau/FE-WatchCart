import productsApi from 'api/productsApi';
import { formatPrice } from 'constants/common';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

DetailProduct.propTypes = {};

function DetailProduct(props) {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      const res = await productsApi.getProduct(id);
      console.log('product (id)', res);
      setProduct(res.data.data);
    })();
  }, [id]);

  return (
    <div className="  h-[1400px] max-w-[1200px] mx-auto py-[24px]">
      <div className="py-0 px-4 lg:flex lg:py-0 lg:px-0 lg:justify-center lg:items-center  ">
        <div className="">
          <img src={product?.imageProduct[0].url} alt="detail-product" />
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-semibold	">{product?.nameProduct}</h1>
            <div className="my-4 mx-0 text-primary-yelow text-2xl font-bold leading-7	">
              {formatPrice(product?.price)}
            </div>
            <span className="font-normal text-base">{product.shortDescription}</span>
            <div className="flex items-center justify-start gap-2 my-8 mx-0">
              <div className="p-[20px] rounded-lg">x</div>
              <div>x</div>
              <div>x</div>
            </div>
            <div>
              <div className="w-[100%] sm:w-[30%]">
                <a
                  href="/"
                  className="flex items-center justify-center gap-x-[10px] h-[50px] text-white bg-[#f61900] font-semibold rounded-md	text-[17px] hover:bg-[#05c3ff] duration-200 "
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                  </svg>
                  <div>Cho vào giỏ hàng</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] ">
        <div className="pl-[40px] text-2xl font-semibold mb-[30px] ">
          <h1>Thông tin chi tiết</h1>
        </div>
        <div className="py-0 px-4 text-sm font-normal ">
          <p className="mb-[15px]">Màn hình OLED luôn hiển thị</p>
          <p className="mb-[15px]">
            Màn hình hiển thị sắc nét, màu sắc chân thực ngay cả dưới trời nắng gắt. Tính năng luôn bật sáng màn hình
            xem giờ tiện lợi ngay cả khi đang lái xe. Bên cạnh đó, màn hình sẽ tự động giảm độ sáng khi không cần thiết
            để tăng tối đa thời lượng pin.
          </p>
          <p className="mb-[15px]">Định vị chính xác bằng GPS và la bàn</p>
          <div className="mb-[15px]">
            Định vị GPS định vị với độ chính xác cao vị trí của bạn, giúp dễ dàng tính toán lộ trình luyện tập.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
