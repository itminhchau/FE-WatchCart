import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Login from 'scenes/auth/Login';
import { hideMiniCart, showMiniCart } from 'scenes/Cart/cartSlice';
import ModalCart from 'scenes/Cart/components/ModalCart';
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

  const dispatch = useDispatch();
  const isShowCart = useSelector((state) => state.cart.showCart);
  const user = useSelector((state) => state.user.current);
  const loginSuccess = user ? !!user.id : false;

  const navigate = useNavigate();

  const modalCartRef = useRef(null);
  const modalProfileRef = useRef(null);
  const modalMenuRef = useRef(null);
  console.log(user);
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalCartRef.current && !modalCartRef.current.contains(event.target)) {
        dispatch(hideMiniCart());
      }
      if (modalProfileRef.current && !modalProfileRef.current.contains(event.target)) {
        setCheckProfile(false);
      }
      if (modalMenuRef.current && !modalMenuRef.current.contains(event.target)) {
        setMenuCheck(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  const handleCloseLogin = () => {
    setLoginCheck(false);
  };
  return (
    <>
      <div className="h-24 bg-black flex flex-row justify-between items-center px-6 relative">
        <div className=" basis-1/6 bg-cover flex justify-between items-center">
          <div className=" lg:hidden w-[32px] h-full cursor-pointer hover:scale-125">
            <img src={menu} alt="" onClick={() => setMenuCheck(!menuCheck)} />
          </div>
          <img
            src={logo}
            alt="logo"
            srcSet=""
            className="h-[70px] min-w-[140px] cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        {menuCheck && <ModalNav modalMenuRef={modalMenuRef} />}
        <ul className=" basis-3/6  justify-center items-center gap-6 font-bold text-[18px] hidden lg:flex ">
          <li>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li>
            <Link to="/products">Sản Phẩm</Link>
          </li>
          <li>
            <Link>Tin Tức</Link>
          </li>
          <li>
            <Link>Liên Hệ</Link>
          </li>
        </ul>
        <div className=" basis-1/6 font-bold flex justify-end items-center mr-4 ">
          <div className=" relative">
            <img
              src={cart}
              alt=""
              srcSet=""
              className=" h-[24px] w-[24px] cursor-pointer"
              onClick={() => dispatch(showMiniCart())}
            />
            <span className=" bg-primary-yelow  h-[24px] w-[24px] text-center block text-white  absolute top-[-18px] right-[-18px] rounded-full">
              12
            </span>
          </div>
        </div>
        <div className="basis-1/6 ">
          <div className="auth flex justify-start px-4 gap-4 items-center cursor-pointer">
            {!loginSuccess && (
              <span className=" min-w-[80px] cursor-pointer" onClick={() => setLoginCheck(!loginCheck)}>
                Đăng Nhập
              </span>
            )}
            {loginSuccess && (
              <div className="flex justify-between items-center gap-4 relative">
                <img src={profile} alt="" onClick={() => setCheckProfile(!checkProfile)} />
                <span className=" hidden lg:block">
                  {user.lastName} {user.firstName}
                </span>
                {checkProfile && <ModalProfile modalProfileRef={modalProfileRef} />}
              </div>
            )}
          </div>
        </div>
        {isShowCart && <ModalCart modalCartRef={modalCartRef} />}
      </div>
      {loginCheck && <Login onClose={handleCloseLogin} />}
    </>
  );
}

export default Header;
