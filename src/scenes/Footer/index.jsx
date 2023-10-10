import React from 'react';
import logo from '../../assets/image/logo.png';
import chungnhan from '../../assets/image/chung-nhan-1.webp';
import baohanh from '../../assets/image/bao-hanh.webp';
const Footer = () => {
  return (
    <div className="px-4 pt-[4px] mt-[20px] bg-black lg:flex lg:justify-around lg:items-center">
      <div className=" mt-[20px] ">
        <div className="uppercase font-extrabold">
          {/* <img src={logo} alt="" className="w-[140px] h-[70px]" /> */}
          Watch Sc
        </div>
        <div className="mt-[5px] text-gray-400">
          <div className="text-[14px]">Copyright by Watch SC® Since 1991Z</div>
          <div className="mt-[5px] text-[14px]">Chủ sở hữu Website: xxx - Số: xxx - Ngày Cấp: 01/01/1970</div>
          <div className="mt-[5px] text-[14px]">Góp ý & Khiếu nại: xxx.com</div>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="uppercase font-extrabold">Thông tin cửa hàng</div>
        <div className="mt-[5px] flex items-center gap-x-2 text-gray-400">
          <i className="fa-solid fa-location-dot"></i>
          <div className="text-[14px]">Địa chỉ : Liên Chiểu,Đà Nẵng</div>
        </div>
        <div className="mt-[5px] flex items-center gap-x-2 text-gray-400">
          <i className="fa-solid fa-phone"></i>
          <div className="text-[14px]">Điện thoại : 09xxxxxxxx</div>
        </div>
        <div className="mt-[5px] flex items-center gap-x-2 text-gray-400">
          <i className="fa-solid fa-envelope"></i>
          <div className="text-[14px]">Email : xxxxx@gmail.com</div>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="uppercase font-extrabold">Chứng nhận</div>
        <div>
          <img src={chungnhan} alt="Chứng nhận" />
        </div>
        <div>
          <img src={baohanh} alt="Bảo hành" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
