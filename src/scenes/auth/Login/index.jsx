import { unwrapResult } from '@reduxjs/toolkit';
import backgroundLogin from 'assets/image/login.jfif';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';
import LoginForm from './LoginForm';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

Login.propTypes = {};

function Login({ onClose, handleSetModeRegister }) {
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const result = await dispatch(login(values));
      const user = unwrapResult(result);
      if (user && user.id) {
        onClose();
      }
      if (user && user.errCode === 1) {
        setError(user?.message);
      }
    } catch (error) {
      console.log('error login', error);
    }
  };

  return (
    <div className="modal fixed top-0 left-0 right-0 bottom-0 flex z-20">
      <div className="modal-overlay absolute w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
      <div className="modal-body  bg-cover m-auto sm:h-fit sm:w-full md:h-[400px] md:grid-rows-1 md:grid-cols-2   max-w-[1000px] bg-white z-10  grid grid-rows-2 rounded-xl overflow-hidden">
        <img src={backgroundLogin} alt="" className="w-full h-full" />

        <div className=" relative flex flex-col  items-center justify-center gap-3">
          <div className="text-[#1976d2] absolute top-[5px] right-[10px] cursor-pointer " onClick={onClose}>
            <CloseIcon />
          </div>
          <span className=" font-bold text-[24px] text-black mb-4">Đăng nhập</span>
          {error ? <div className="text-red-500 text-[15px]"> {error} </div> : ' '}
          <LoginForm onSubmit={handleSubmit} />
          <div className="text-primary-gray text-[15px]">
            <span>
              Bạn chưa có tài khoản?{' '}
              <span
                onClick={() => handleSetModeRegister()}
                className="hover:text-primary-yelow text-red-500 ease-linear duration-100 cursor-pointer"
              >
                Đăng ký
              </span>{' '}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
