import React, { useState } from 'react';

AddressCustomer.propTypes = {};

function AddressCustomer({ user }) {
  const [inputUser, setInputUser] = useState(user);
  const handleOnchangeInput = (e) => {
    setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value,
    });
  };

  console.log('check input', inputUser);
  return (
    <div className="w-full flex-col justify-center items-start gap-3 my-4">
      <div className=" flex justify-center gap-3 items-center w-full my-2">
        <span className="text-black text-[14px] w-[120px]">Họ khách hàng:</span>
        <input
          type="text"
          placeholder="Họ khách hàng"
          className="text-black text-[14px] bg-gray-100 ml-3 outline-none p-[8px] flex-1"
          name="lastName"
          value={inputUser.lastName}
          onChange={handleOnchangeInput}
        />
      </div>
      <div className=" flex justify-center gap-3 items-center w-full my-2">
        <span className="text-black text-[14px] w-[120px]">Tên khách hàng:</span>
        <input
          type="text"
          placeholder="Tên khách hàng"
          className="text-black text-[14px] bg-gray-100 ml-3 outline-none p-[8px] flex-1"
          name="firstName"
          value={inputUser.firstName}
        />
      </div>
      <div className=" flex justify-center gap-3 items-center w-full my-2">
        <span className="text-black text-[14px]  w-[120px]">Email:</span>
        <input
          type="text"
          placeholder="Email"
          className="text-black text-[14px] bg-gray-100 ml-3 outline-none p-[8px] flex-1 opacity-[0.5]"
          name="email"
          disabled
          value={inputUser.email}
        />
      </div>
      <div className=" flex justify-center gap-3 items-center w-full my-2">
        <span className="text-black text-[14px]  w-[120px]">Địa chỉ:</span>
        <input
          type="text"
          placeholder="Địa chỉ"
          className="text-black text-[14px] bg-gray-100 ml-3 outline-none p-[8px] flex-1"
          name="shipAddress"
          value={inputUser.shipAddress}
        />
      </div>
      <div className=" flex justify-center gap-3 items-center w-full my-2">
        <span className="text-black text-[14px]  w-[120px]">Số điện thoại:</span>
        <input
          type="text"
          placeholder="Số điện thoại"
          className="text-black text-[14px] bg-gray-100 ml-3 outline-none p-[8px] flex-1"
          name="phoneNumber"
          value={inputUser.phoneNumber}
        />
      </div>
    </div>
  );
}

export default AddressCustomer;
