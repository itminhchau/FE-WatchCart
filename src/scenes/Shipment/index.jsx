import React from 'react';
import ShipDetailForm from 'scenes/form/ShipDetailForm';
import cart from '../../assets/image/detail-product.jpg';
function Shipment() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:gap-x-5  mt-[20px] mb-[20px] ">
      <div className="flex  flex-col-reverse  lg:flex lg:justify-center lg:flex-row  ">
        <div className=" w-full">
          <div className="text-xl font-medium ml-[20px] mb-5">Thông tin khách hàng</div>
          <ShipDetailForm onSubmit={handleSubmit} />
        </div>
        <div className="mb-[20px] pl-[15px] pr-[15px] w-full ">
          <div className="">
            <div className="left ">
              <div className="mt-[20px] ">
                <div className="left flex items-center bg-[#fff] px-2 py-2 rounded-md lg:py-[20px] lg:px-[20px]">
                  <div className="relative">
                    <div className="flex items-center cursor-pointer justify-center absolute left-[-7px] top-[-7px]">
                      <span className="px-[7px] bg-primary-yelow rounded-full ">1</span>
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
                    <div className="text-[15px]  text-primary-yelow font-medium">
                      Apple Watch SE 2022 40mm viền nhôm dây silicone
                    </div>
                  </div>
                  <div className="">
                    <div className="text-[17px] font-medium text-black">5940000đ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[20px]">
              <div className="flex items-center justify-between border-t	pt-[10px]  ">
                <div className="text-[15px] text-gray-300">Tạm tính</div>
                <div className="text-[15px] text-gray-300">59400000đ</div>
              </div>
              <div className="flex items-center justify-between border-b	pt-[5px] pb-[10px] ">
                <div className="text-[15px] text-gray-300">Phí vận chuyển</div>
                <div className="text-[15px] text-gray-300">200000đ</div>
              </div>
              <div className="flex items-center justify-between mt-[15px]">
                <div className="text-[17px] text-gray-200">Tổng cộng</div>
                <div className="text-[18px] text-primary-yelow font-bold"> 59400000đ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipment;
