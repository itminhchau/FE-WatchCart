import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import CloseIcon from '@mui/icons-material/Close';
import backgroundLogin from 'assets/image/login.jfif';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../userSlice';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const Register = () => {
  const [close, setClose] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const result = await dispatch(register(values));
      const user = unwrapResult(result);

      if (user && user.errCode === 0) {
        handleCloseRegister();
        navigate('/');
      } else {
        setError(user.message);
      }
    } catch (error) {
      console.log('error register', error);
    }
  };
  const handleCloseRegister = () => {
    setClose(!close);
  };

  return (
    <>
      {close === true ? (
        <div className="modal fixed top-0 left-0 right-0 bottom-0 flex z-20  ">
          <div className="modal-overlay absolute w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
          <div className="modal-body m-auto sm:h-fit sm:w-full md:h-full md:grid-rows-1 md:grid-cols-2   max-w-[1000px] bg-white z-10  grid grid-rows-2 rounded-xl  overflow-hidden">
            <img src={backgroundLogin} alt="" className="w-full h-full hidden lg:block " />

            <div className=" relative flex flex-col  items-center justify-center gap-3">
              <CloseIcon
                onClick={handleCloseRegister}
                className="absolute top-[10px] right-[10px] text-[#1565C0] cursor-pointer text-[24px]"
              />
              <span className=" font-bold text-[24px] text-black mb-4 pt-[20px]">Đăng ký</span>
              {error && <span className="text-red-400 text-[14px]">{error}</span>}

              <RegisterForm onSubmit={handleSubmit} />
              <span className="text-gray-500 mb-[20px]">
                Bạn đã có tài khoản?{' '}
                <Link to={'/'} className="font-medium text-red-500 hover:text-primary-yelow">
                  Đăng nhập
                </Link>
              </span>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Register;
