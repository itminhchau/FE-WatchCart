import React, { useState } from 'react';
import cart from '../../assets/image/detail-product.jpg';
import cartEmpty from '../../assets/image/cart-empty.webp';
const Cart = () => {
  const [totalProduct, setTotalProduct] = useState(1);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);

  const handleAddClick = () => {
    setTotalProduct((add) => add + 1);
  };
  const handleSubtractClick = () => {
    if (totalProduct === 1) {
      return 1;
    }
    setTotalProduct((sub) => sub - 1);
  };
  const handleRemoveProduct = () => {
    setCartIsEmpty(!cartIsEmpty);
  };

  return (
    <div>
      <div className="px-3 mt-[20px] ">
        {cartIsEmpty && cartIsEmpty === true ? (
          <div className="flex flex-col	justify-center items-center ">
            <div>
              <img src={cartEmpty} alt="cart-empty" />
            </div>
            <div className="text-red-600 text-2xl">“Hổng” có gì trong giỏ hết</div>
            <div className="text-center mt-[10px]">Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</div>
            <div className="mt-[20px]">
              <button className="border p-[10px] rounded-md hover:bg-[#fff] hover:text-black duration-200">
                <a href="/">Mua sắm ngay</a>
              </button>
            </div>
          </div>
        ) : (
          <div className="lg:flex lg:gap-x-6 lg:justify-center">
            <div className="left ">
              <div className="lg:flex lg:items-center lg:justify-between">
                <h1 className="text-2xl font-medium">Giỏ hàng của bạn</h1>
                <div className="text-gray-200">
                  Bạn đang có
                  <span className="font-medium text-white"> {totalProduct} sản phẩm </span>
                  trong giỏ hàng
                </div>
              </div>
              <div className="mt-[20px]">
                <div className="left flex items-center bg-[#fff] px-2 py-2 rounded-md lg:py-[20px] lg:px-[20px]">
                  <div className="relative">
                    <div className="flex items-center cursor-pointer justify-center absolute left-[-7px] top-[-7px]">
                      <i
                        onClick={() => handleRemoveProduct()}
                        className="fa-solid fa-minus p-[2px] bg-primary-yelow rounded-full "
                      ></i>
                    </div>
                    <div className="w-[80px] h-[80px] ">
                      <img
                        src={cart}
                        alt="cart-product"
                        className="w-[80px] h-[80px] object-cover border border-slate-200	"
                      />
                    </div>
                  </div>
                  <div className="px-[10px] lg:px-[40px]">
                    <div className="text-[14px]  text-primary-yelow font-medium">
                      Apple Watch SE 2022 40mm viền nhôm dây silicone
                    </div>
                    <div className="text-[14px] mt-[10px] text-black">5.940.000đ</div>
                  </div>
                  <div className="">
                    <div className="text-[14px] font-medium text-black">{5940000 * totalProduct}đ</div>
                    <div className="flex items-center justify-between mt-1">
                      <button className="">
                        <i
                          onClick={() => handleSubtractClick()}
                          className="fa-solid fa-minus text-gray-900 text-[14px] hover:text-primary-yelow duration-150	"
                        ></i>
                      </button>
                      <div className="text-primary-yelow">{totalProduct}</div>
                      <button className="">
                        <i
                          onClick={() => handleAddClick()}
                          className="fa-solid fa-plus text-gray-900 text-[14px] hover:text-primary-yelow duration-150	"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[20px]  lg:mt-[52px]  ">
              <div className="bg-[#fff] py-2 px-2 lg:py-[30px] lg:px-[10px] rounded-md ">
                <div className="flex justify-between mb-[7px] lg:mx-[30px] ">
                  <div className="text-black font-bold sm:text-[18px]">Tổng tiền:</div>
                  <div className="text-primary-yelow font-semibold sm:text-[18px]">{5940000 * totalProduct}đ</div>
                </div>
                <div className="border-t-2 pt-[15px] lg:px-[70px]">
                  <div className="text-[14px] text-gray-600">
                    {' '}
                    - ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày
                  </div>
                  <div className="text-[14px] text-gray-600 mt-2">
                    - Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                  </div>
                </div>
                <div className="mt-[10px] lg:flex lg:items-center lg:justify-center lg:mt-[20px]">
                  <button className="w-[100%] lg:w-[500px]  bg-primary-yelow  hover:bg-[#05c3ff] duration-200 ">
                    <a className="block h-[100%]  w-[100%] px-[5px] py-[10px] uppercase font-medium" href="/thanhtoan">
                      Thanh toán
                    </a>
                  </button>
                </div>
              </div>
              <div className="mt-[20px]  bg-green-300 py-2 px-2 rounded-md">
                <div className="text-black font-bold text-[14px] lg:pt-[10px]">Chính sách mua hàng</div>
                <div className="text-gray-800 text-[14px] pt-[15px] lg:pb-[10px]">
                  Hiện chúng tôi đang áp dụng giao hàng trên toàn quốc
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
