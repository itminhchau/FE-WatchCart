import { listComponentProfile } from 'mockData/listComponent';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import buy from '../../assets/image/buy-product.png';
import profile from '../../assets/image/profile.png';
import user from '../../assets/image/user.png';
import PurchaseOrder from './components/PurchaseOrder';

const ProfileUser = () => {
  const [active, setActive] = useState(1);
  const [checkOpenDetailOrder, setCheckOpenDetailOrder] = useState(false);
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

  const dataSendToComponents = useMemo(() => {
    const newData = {};
    return {
      ...newData,
      user: userProfile,
    };
  }, [userProfile]);
  return (
    <div className="container  w-[80%] mx-auto  bg-[#f5f5f5] mt-3">
      <div className="hidden md:block bg-background-profile w-full h-[250px] bg-no-repeat bg-cover bg-center relative">
        <span className=" text-[46px] text-white bg-black px-[14px]  font-bold absolute bottom-[-35px] left-[70px] rounded-[25px]">
          Hồ Sơ Của Tôi
        </span>
      </div>
      <div className="  text-black  lg:grid  lg:grid-cols-4-8 ">
        <div className=" profile-left pl-0 sm:pl-[50px] bg-primary-yelow py-[37px] text-white text-[18px] w-full h-full">
          <div className="profile-top flex items-center gap-4 text-[14px] mt-[10px]">
            <div>
              <img src={profile} alt="" className="w-[40px] h-[40px] bg-black rounded-full" />
            </div>
            <div className="">
              <span className="text-[16px] md:text-[22px] ">
                {profileUser?.lastName} {profileUser?.firstName}
              </span>
            </div>
          </div>
          <div className="profile-bottom mt-[40px] text-[14px] ">
            <div className="flex items-center gap-4">
              <div>
                <img src={user} alt="" className="w-[20px] h-[20px] " />
              </div>
              <div className=" cursor-pointer text-[16px] md:text-[18px] w-full hover:bg-gray-300 ease-linear duration-100">
                Tài Khoản Của Tôi
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="pl-[36px] pr-[16px]">
                {listComponentProfile &&
                  listComponentProfile.length > 0 &&
                  listComponentProfile.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleClickActive(item.id)}
                      className={`mt-[10px] text-[14px] md:text-[15px] w-[70%] px-1 py-1 hover:text-black rounded-sm hover:bg-gray-300  ease-linear duration-100 cursor-pointer ${
                        active === item.id ? ' bg-blue-500 w-[70%]  px-1 py-1 rounded-sm' : ''
                      }`}
                    >
                      {item.name}
                    </div>
                  ))}
              </div>
              <div className="flex items-center mt-[15px] gap-3 cursor-pointer">
                <div>
                  <img src={buy} alt="" className="w-[20px] h-[20px]" />
                </div>
                <div
                  className="hover:bg-gray-300 text-[16px] md:text-[18px] w-full ease-linear duration-100"
                  onClick={() => setCheckOpenDetailOrder(!checkOpenDetailOrder)}
                >
                  Đơn mua
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-right  flex-1 ">
          <div className=" mt-[40px]">
            <div className="profile-left px-6">
              {listComponentProfile &&
                listComponentProfile.map((item) => {
                  return item.id === active ? item.component(dataSendToComponents) : '';
                })}
            </div>
            {checkOpenDetailOrder && <PurchaseOrder idCustomer={userProfile.id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
