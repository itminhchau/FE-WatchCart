/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import backgroundCity from 'assets/image/backgroundcity.jpg';
import FormContact from './components/FormContact';
import facebook from 'assets/image/facebook.png';
import instagram from 'assets/image/instagram.png';
import twitter from 'assets/image/twitter.png';
import linkedin from 'assets/image/linkedin.png';
import youtube from 'assets/image/youtube.png';

const Contact = () => {
  return (
    <div className="">
      <div className="px-4 lg:px-32">
        <div
          style={{ backgroundImage: `url(${backgroundCity})` }}
          className="h-[200px] w-full bg-cover bg-center flex "
        >
          <span className="block text-[24px] p-[8px] text-white border-[3px] border-white w-[300px] uppercase text-center m-auto font-bold">
            liên hệ chúng tôi
          </span>
        </div>

        <div className="px-8 py-4  bg-gray-200 rounded-md">
          <div className="flex items-center gap-x-3  ">
            <i className=" text-primary-yelow text-[18px] fa-solid fa-location-dot"></i>
            <div>
              <div className="text-black">Địa chỉ</div>
              <div className=" text-[14px] text-gray-500">chưa xác định</div>
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
        <div className="form p-[16px] w-full h-[580px] bg-white flex justify-center  flex-col items-center mt-[16px] rounded-xl">
          <span className=" text-[24px] font-bold p-[16px] text-primary-yelow text-center">
            Nếu bạn có bất cứ câu hỏi cần tư vấn hay gửi ngay cho chúng tôi !!
          </span>
          <FormContact />
          <span className="text-gray-500 text-[16px] mt-[16px]">hoặc</span>
          <span className="text-gray-500 text-[16px] ">Kết nối với chúng tôi</span>
          <ul className=" flex justify-center items-center gap-8 my-4">
            <li>
              <a href="#">
                <img src={facebook} alt="" />{' '}
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} alt="" />{' '}
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="" />{' '}
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} alt="" />{' '}
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="" />{' '}
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <div className="mt-[20px] gap-x-3">
            <div className="text-primary-yelow text-xl font-semibold">Địa chỉ cửa hàng</div>
            <iframe
              className="w-[100%] h-[350px] mt-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.0739377599075!2d108.15654907494395!3d16.06165253964111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421924682e8689%3A0x48eb0bdbeec05215!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBTxrAgUGjhuqFtIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1696835434317!5m2!1svi!2s"
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
