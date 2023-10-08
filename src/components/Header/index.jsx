import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import cart from '../../assets/image/cart.png';
Header.propTypes = {};

function Header(props) {
  return (
    <div className="h-24 bg-black text-white flex flex-row justify-between items-center ">
      <div className=" basis-1/6 bg-cover ">
        <img src={logo} alt="logo" srcset="" className="h-[96px] min-w-[256px]" />
      </div>

      <ul className=" basis-3/6 flex justify-center items-center gap-6 font-bold text-[18px] sm:none ">
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
          <span className="bg-yellow-400  h-[24px] w-[24px] text-center block text-white  absolute top-[-18px] right-[-18px] rounded-full">
            12
          </span>
        </div>
      </div>
      <div className="basis-1/6 ">
        <div className="auth flex justify-center gap-4 items-center">
          <span>Login</span>
          <span>register</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
