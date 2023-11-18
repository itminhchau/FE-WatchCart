import userApi from 'api/userApi';
import { useState } from 'react';

Profile.propTypes = {};

function Profile({ profileUser }) {
  const [inputUser, setInputUser] = useState(profileUser);
  const [checkEdit, setCheckEdit] = useState(true);

  const handleEditUser = async () => {
    if (checkEdit) {
      setCheckEdit(false);
    } else {
      await userApi.updateCustomer(inputUser);
      setCheckEdit(true);
    }
  };
  const handleOnchange = (e) => {
    setInputUser({
      ...inputUser,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="text-[14px] md:text-[16px]">
      <div className="flex justify-start items-center gap-2 mb-2  ">
        <label htmlFor="" className="w-[120px] block">
          Họ:
        </label>
        <input
          type="text"
          onChange={handleOnchange}
          disabled={checkEdit}
          placeholder="Họ"
          value={inputUser.lastName}
          name="lastName"
          className=" px-2 py-1 outline-none rounded-md text-left ml-3 flex-1"
        />
      </div>
      <div className="flex justify-start items-center gap-2 mb-2">
        <label htmlFor="" className="w-[120px] block">
          Tên:
        </label>
        <input
          type="text"
          onChange={(e) => handleOnchange(e)}
          disabled={checkEdit}
          placeholder="firstName"
          name="firstName"
          value={inputUser.firstName}
          className=" px-2 py-1 outline-none rounded-md text-left ml-3 flex-1"
        />
      </div>

      <div className="flex justify-start items-center gap-2 mb-2">
        <label htmlFor="" className="w-[120px] block">
          Tên đăng nhập:
        </label>
        <input
          type="text"
          onChange={handleOnchange}
          name="userName"
          disabled
          placeholder="Tên đăng nhập"
          value={inputUser.userName}
          className=" px-2 py-1 outline-none rounded-md text-left ml-3 flex-1"
        />
      </div>
      <div className="flex justify-start items-center gap-2 mb-2">
        <label htmlFor="" className="w-[120px] block">
          Số điện thoại:
        </label>
        <input
          type="text"
          onChange={handleOnchange}
          disabled={checkEdit}
          name="phoneNumber"
          placeholder="số điện thoại"
          value={inputUser.phoneNumber}
          className=" px-2 py-1 outline-none rounded-md text-left ml-3 flex-1"
        />
      </div>
      <div className="flex justify-start items-center gap-2 mb-2">
        <label htmlFor="" className="w-[120px] block">
          Địa chỉ:
        </label>
        <input
          type="text"
          onChange={handleOnchange}
          disabled={checkEdit}
          name="shipAddress"
          placeholder="địa chỉ"
          value={inputUser.shipAddress}
          className=" px-2 py-1 outline-none rounded-md text-left ml-3 flex-1"
        />
      </div>
      <div className="flex justify-start items-center gap-2 mb-2">
        <label htmlFor="" className="w-[120px] block">
          Giới tính:
        </label>
        <input
          type="text"
          onChange={handleOnchange}
          disabled={checkEdit}
          name="gender"
          placeholder="giới tính"
          value={inputUser.gender}
          className=" px-2 py-1 outline-none rounded-md text-left ml-3 flex-1"
        />
      </div>
      <div className=" text-center mt-2">
        <button
          className=" bg-green-600 w-[200px] text-white text-[16px] md:text-[20px] p-2 rounded-sm"
          onClick={handleEditUser}
        >
          {checkEdit ? 'Chinh sửa thông tin' : 'Lưu thông tin'}
        </button>
      </div>
    </div>
  );
}

export default Profile;
