import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from 'scenes/auth/userSlice';
import addUser from '../../../../assets/image/add-user.png';
import logout from '../../../../assets/image/logout.png';
import profile from '../../../../assets/image/profile.png';
import setting from '../../../../assets/image/setting.png';

ModalProfile.propTypes = {};

function ModalProfile({ modalProfileRef, onCheckProfile }) {
  const dispatch = useDispatch();
  const handlLogout = () => {
    dispatch(logOut());
    onCheckProfile();
  };
  return (
    <div
      ref={modalProfileRef}
      className="absolute top-[43px] right-0 w-[200px]  bg-primary-gray rounded-xl overflow-hidden z-20"
    >
      <ul className=" font-bold text-[14px] text-primary-white text-center">
        <li className=" p-2 border-b hover:bg-primary-yelow flex justify-start gap-4 items-center">
          <img src={profile} alt="" className="w-[18px] h-[18px]" />
          <Link to={`/profile`}>Hồ sơ của tôi</Link>
        </li>
        <li className=" p-2 border-b hover:bg-primary-yelow flex justify-start gap-4 items-center">
          <img src={addUser} alt="" className="w-[18px] h-[18px]" />
          <Link>Thêm tài khoản khác</Link>
        </li>
        <li className=" p-2 border-b hover:bg-primary-yelow flex justify-start gap-4 items-center">
          <img src={setting} alt="" className="w-[18px] h-[18px]" />
          <Link>Cài đặt</Link>
        </li>
        <li className=" p-2  hover:bg-primary-yelow flex justify-start gap-4 items-center">
          <img src={logout} alt="" className="w-[18px] h-[18px]" />
          <span onClick={handlLogout}>Đăng xuất</span>
        </li>
      </ul>
    </div>
  );
}

export default ModalProfile;
