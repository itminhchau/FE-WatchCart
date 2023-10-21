import React from 'react';

ModalSearch.propTypes = {};

function ModalSearch({ modalSearchRef }) {
  return (
    <div
      ref={modalSearchRef}
      className="bg-white w-full h-[400px] rounded-xl p-[18px] md:w-[500px] absolute top-[70px] right-0 md:right-[120px] lg:right-[220px] z-20 container"
    >
      <span className="text-black font-bold w-full border-b-2 border-gray-300 block pb-2">
        kết quả tìm kiếm của bạn .....
      </span>
      <ul className="mt-[20px]">
        <li className=" flex flex-col justify-center items-start bg-gray-200 px-[16px] py-[8px] cursor-pointer rounded-xl group hover:bg-gray-500">
          <span className=" text-primary-yelow truncate max-w-[328px] overflow-ellipsis ">
            Apple Watch SE 2022 44mm viền nhôm dây silicone
          </span>
          <span className="text-gray-500 group-hover:text-white">2000.0000.000 đ</span>
        </li>
      </ul>
    </div>
  );
}

export default ModalSearch;
