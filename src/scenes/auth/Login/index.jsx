import { unwrapResult } from '@reduxjs/toolkit';
import backgroundLogin from 'assets/image/login.jfif';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';
import LoginForm from './LoginForm';

Login.propTypes = {};

function Login({ onClose }) {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const result = await dispatch(login(values));
      const user = unwrapResult(result);
      onClose();
      console.log(user);
    } catch (error) {
      console.log('error login', error);
    }
  };
  return (
    <div className="modal fixed top-0 left-0 right-0 bottom-0 flex z-20">
      <div className="modal-overlay absolute w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
      <div className="modal-body  bg-cover m-auto sm:h-fit sm:w-full md:h-[400px] md:grid-rows-1 md:grid-cols-2   max-w-[1000px] bg-white z-10  grid grid-rows-2 rounded-xl overflow-hidden">
        {/* <div className="bg-[url('assets/image/login.jfif')] w-full h-full bg-contain bg-no-repeat "></div> */}
        <img src={backgroundLogin} alt="" className="w-full h-full" />
        <div className=" flex flex-col  items-center justify-center gap-3">
          <span className=" font-bold text-[24px] text-black mb-4">Đăng nhập</span>
          <LoginForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Login;
