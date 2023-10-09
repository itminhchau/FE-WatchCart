/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const Contact = () => {
  return (
    <div className="">
      <div className="px-4 lg:px-32">
        <div className="px-2 py-4  bg-gray-200 rounded-md">
          <div className="flex items-center gap-x-3  ">
            <i className=" text-primary-yelow text-[18px] fa-solid fa-location-dot"></i>
            <div>
              <div className="text-black">Địa chỉ</div>
              <div className=" text-[14px] text-gray-500">Quận Tân Bình, HCM</div>
            </div>
          </div>
          <div className="lg:flex items-center lg:justify-between mt-[10px] w-[80%]">
            <div className=" flex items-center  gap-x-3 ">
              <i className="text-primary-yelow text-[18px] fa-solid fa-phone"></i>
              <div>
                <div className="text-black">Điện thoại</div>
                <div className="text-gray-500 text-[14px]">09xxxxxxxx</div>
              </div>
            </div>
            <div className=" flex items-center gap-x-3 mt-[10px]">
              <i className=" text-primary-yelow text-[18px] fa-solid fa-envelope"></i>
              <div>
                <div className="text-black">Email</div>
                <div className="text-gray-500 text-[14px]">xxxxxx@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[200px] ">
          <div className="mt-[20px] gap-x-3">
            <div className="text-primary-yelow text-xl font-semibold">Địa chỉ cửa hàng</div>
            <iframe
              className="w-[360px] h-[350px] sm:w-[600px] sm:h-[450px] mt-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0739377599075!2d108.15654907494395!3d16.06165253964111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421924682e8689%3A0x48eb0bdbeec05215!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBTxrAgUGjhuqFtIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1696835434317!5m2!1svi!2s"
              width="600"
              height="450"
              style={{ border: '0px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
