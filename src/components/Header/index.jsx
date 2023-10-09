import { useState } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/image/cart.png';
import logo from '../../assets/image/logo.png';
import menu from '../../assets/image/menu.png';
import profile from '../../assets/image/profile.png';
import ModalNav from './components/ModalNav';
import ModalProfile from './components/ModalProfile';
Header.propTypes = {};

function Header(props) {
  const [menuCheck, setMenuCheck] = useState(false);
  const [loginCheck, setLoginCheck] = useState(false);
  const [checkProfile, setCheckProfile] = useState(false);

  console.log('menu: ', menuCheck);

  return (
    <div className="h-24 bg-black flex flex-row justify-between items-center px-6 relative">
      <div className=" basis-1/6 bg-cover flex justify-between items-center">
        <div className=" lg:hidden w-[32px] h-full cursor-pointer hover:scale-125">
          <img src={menu} alt="" onClick={() => setMenuCheck(!menuCheck)} />
        </div>
        <img src={logo} alt="logo" srcset="" className="h-[70px] min-w-[140px]" />
      </div>
      {menuCheck && <ModalNav />}
      <ul className=" basis-3/6  justify-center items-center gap-6 font-bold text-[18px] hidden lg:flex ">
        <li>
          <Link>Trang Chủ</Link>
        </li>
        <li>
          <Link>Sản Phẩm</Link>
        </li>
        <li>
          <Link>Tin Tức</Link>
        </li>
        <li>
          <Link>Liên Hệ</Link>
        </li>
      </ul>
      <div className=" basis-1/6 font-bold flex justify-end items-center mr-4">
        <div className=" relative">
          <img src={cart} alt="" srcset="" className=" h-[24px] w-[24px] " />
          <span className=" bg-primary-yelow  h-[24px] w-[24px] text-center block text-white  absolute top-[-18px] right-[-18px] rounded-full">
            12
          </span>
        </div>
      </div>
      <div className="basis-1/6 ">
        <div className="auth flex justify-start px-4 gap-4 items-center cursor-pointer">
          {!loginCheck && (
            <span className=" min-w-[80px] cursor-pointer" onClick={() => setLoginCheck(!loginCheck)}>
              Đăng Nhập
            </span>
          )}
          {loginCheck && (
            <div className="flex justify-between items-center gap-4 relative">
              <img src={profile} alt="" onClick={() => setCheckProfile(!checkProfile)} />
              <span className=" hidden lg:block">Dao Minh Chau</span>
              {checkProfile && <ModalProfile />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
