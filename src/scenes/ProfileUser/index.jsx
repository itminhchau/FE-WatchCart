import React, { useEffect, useState } from 'react';
import profile from '../../assets/image/profile.png';
import user from '../../assets/image/user.png';
import buy from '../../assets/image/buy-product.png';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const account = [
  {
    id: 1,
    name: 'Hồ sơ',
    link: '/profile',
  },
  {
    id: 2,
    name: 'Ngân hàng',
    link: '/profile',
  },
  {
    id: 3,
    name: 'Địa chỉ',
    link: '/profile',
  },
  {
    id: 4,
    name: 'Đổi mật khẩu',
    link: '/profile',
  },
  {
    id: 5,
    name: 'Cài Đặt thông báo',
    link: '/profile',
  },
];
const ProfileUser = () => {
  const [active, setActive] = useState(1);
  const [profileUser, setProfileUser] = useState();
  const userProfile = useSelector((state) => state.user.current);

  useEffect(() => {
    if (userProfile && userProfile.id) {
      setProfileUser(userProfile);
    }
  }, [userProfile]);
  const handleClickActive = (id) => {
    setActive(id);
  };
  return (
    <div>
      <div className="container-profile container mx-auto py-2 px-2 bg-[#f5f5f5] text-black flex justify-center gap-5 sm:gap-40">
        <div className="profile-left pl-0 sm:pl-[50px] 	">
          <div className="profile-top flex items-center gap-4 text-[14px] ">
            <div>
              <img src={profile} alt="" className="w-[40px] h-[40px] bg-black rounded-full" />
            </div>
            <div className="">
              <div className="text-[#333]">
                {profileUser?.lastName} {profileUser?.firstName}
              </div>
              <div className="text-[#888]">
                <i className="fa-solid fa-pen-to-square"></i>
                <span>Sửa Hồ Sơ</span>
              </div>
            </div>
          </div>
          <div className="profile-bottom mt-[40px] text-[14px] ">
            <div className="flex items-center gap-4">
              <div>
                <img src={user} alt="" className="w-[20px] h-[20px] " />
              </div>
              <div className="text-[#000000de] cursor-pointer hover:text-primary-yelow ease-linear duration-100">
                Tài Khoản Của Tôi
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="pl-[36px] ">
                {account &&
                  account.length > 0 &&
                  account.map((item) => (
                    <Link key={item.id} to={item.link}>
                      <div
                        onClick={() => handleClickActive(item.id)}
                        className={`mt-[10px] text-[#000000a6] hover:text-primary-yelow ease-linear duration-100 ${
                          active === item.id ? 'text-primary-yelow' : ''
                        }`}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="flex items-center mt-[15px] gap-3 cursor-pointer">
                <div>
                  <img src={buy} alt="" className="w-[20px] h-[20px]" />
                </div>
                <div className="hover:text-primary-yelow ease-linear duration-100">Đơn mua</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-right  ">
          <div className="profile-top">
            <div>
              <h2 className="text-[18px]">Hồ Sơ Của Tôi</h2>
              <span className="text-[14px]">Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            </div>
          </div>
          <div className="profile-center mt-[40px]">
            <div className="profile-left">
              <div className="flex">
                <table className="table-fixed	">
                  <tbody className="py-3">
                    <tr>
                      <td className="pb-[30px]">
                        <label htmlFor="" className="text-[14px] text-[#555555cc]">
                          Tên Đăng nhập
                        </label>
                      </td>
                      <td className="pb-[30px]">
                        <div className="pl-[20px] text-[#333] text-[14px] ">
                          {profileUser?.lastName} {profileUser?.firstName}
                        </div>
                      </td>
                    </tr>
                    <tr className="mt-[20px]">
                      <td className="pb-[30px]">
                        <label htmlFor="" className="text-[14px] text-[#555555cc]">
                          Email
                        </label>
                      </td>
                      <td className="pb-[30px]">
                        <div className="pl-[20px] text-[#333] text-[14px]">{profileUser?.email}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pb-[30px]">
                        <label htmlFor="" className="text-[14px] text-[#555555cc]">
                          Số điện thoại
                        </label>
                      </td>
                      <td className="pb-[30px]">
                        <div className="pl-[20px] text-[#333] text-[14px]">{profileUser?.phoneNumber}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pb-[30px]">
                        <label htmlFor="" className="text-[14px] text-[#555555cc]">
                          Địa chỉ
                        </label>
                      </td>
                      <td className="pb-[30px]">
                        <div className="pl-[20px] text-[#333] text-[14px]">{profileUser?.shipAddress}</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pb-[30px]">
                        <label htmlFor="" className="text-[14px] text-[#555555cc]">
                          Giới tính
                        </label>
                      </td>
                      <td className="pb-[30px]">
                        <div className="pl-[20px] text-[#333] text-[14px]">{profileUser?.gender}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
