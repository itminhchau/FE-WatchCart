import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import QuestionForm from './QuestionForm';
import Login from 'scenes/auth/Login';
import { useState } from 'react';
import { AUTHMODE } from 'constants/common';
import Register from 'scenes/auth/Register';
import AnswerForm from './AnswerForm';

QuestionAnswer.propTypes = {};

function QuestionAnswer({ idProduct }) {
  const [loginCheck, setLoginCheck] = useState(false);
  const [checkOpenAnswer, setCheckOpenAnswer] = useState(false);
  const [mode, setMode] = useState(AUTHMODE.LOGIN);
  const [checked, setChecked] = useState();
  const [hide, setHide] = useState(true);

  const user = useSelector((state) => state.user.current);
  const idCustomer = user ? !!user.id : false;
  console.log('user', user);
  const handleSubmitQuestion = (values) => {
    if (idCustomer) {
      const newValues = {
        ...values,
        idProduct,
        idCustomer,
      };
      console.log('value question', newValues);
    } else {
      toast.warning('mời bạn đăng nhập');
      handleSetLoginOpen();
    }
  };
  const handleSubmitAnswer = (values) => {
    if (idCustomer) {
      const newValues = {
        ...values,
        idProduct,
        idCustomer,
      };
      console.log('value question', newValues);
    } else {
      toast.warning('mời bạn đăng nhập');
      handleSetLoginOpen();
    }
  };

  const handleCloseLogin = () => {
    setLoginCheck(false);
  };
  const handleSetModeLogin = () => {
    setMode(AUTHMODE.LOGIN);
  };
  const handleSetModeRegister = () => {
    setMode(AUTHMODE.REGISTER);
  };

  const handleSetLoginOpen = () => {
    setLoginCheck(true);
  };

  const handleAnswer = (question) => {
    setCheckOpenAnswer(!checkOpenAnswer);
    if (checked === question.id) {
      setHide(false);
      setChecked(' ');
    } else {
      setChecked(question.id);
      setHide(true);
    }
  };
  const arrayTest = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
  ];
  const arrayTest2 = [
    { id: 1, value: '' },
    { id: 2, value: '' },
  ];
  return (
    <div className="mt-[50px] container text-black py-2 px-2 lg:px-32 rounded-md   ">
      <div className="bg-[#F8F9FA]  py-2 px-4 rounded-md">
        <span className="text-[20px] font-bold ">Hỏi và đáp</span>
        {/* form question */}
        <div className="mt-4">
          <QuestionForm onSubmit={handleSubmitQuestion} />
        </div>
        {/* conversation */}
        <ul>
          {arrayTest.map((item, index) => {
            return (
              <li className="mb-4 flex justify-start gap-2 items-start">
                <div className="w-[60px] h-[60px] bg-gray-300 font-bold text-[28px] text-white rounded-sm text-center p-[8px]">
                  MC
                </div>
                <div className="flex-1">
                  <div className="flex justify-start items-center gap-2 ">
                    <span className="font-bold text-[18px]">Đào Minh châu</span>
                    <span className="text-[14px] text-gray-300">vào 24/01/2023</span>
                  </div>
                  <span className="block">Dạ cho em hỏi sản phẩm có bảo hành không ạ</span>
                  <span
                    className="text-blue-400 block cursor-pointer text-[14px] hover:text-red-500"
                    onClick={() => handleAnswer(item)}
                  >
                    Trả lời
                  </span>
                  <div className=" ml-6">
                    <ul>
                      {arrayTest2.map((item, index) => {
                        return (
                          <li className="mb-4">
                            <div className="flex-1">
                              <div className="flex justify-start items-center gap-2 ">
                                <span className="font-bold text-[18px] ">Thái Sơn</span>
                                <span className="text-red-500 font-bold italic text-[16px]">Quản trị viên</span>
                                <span className="text-[14px] text-gray-300">vào 24/01/2023</span>
                              </div>
                              <span className="block">Dạ sản phẩm có bảo hành một năm nha bạn!</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    {checked === item.id && hide && <AnswerForm onSubmit={handleSubmitAnswer} />}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {loginCheck && mode === AUTHMODE.LOGIN && (
        <Login onClose={handleCloseLogin} handleSetModeRegister={handleSetModeRegister} />
      )}
      {loginCheck && mode === AUTHMODE.REGISTER && (
        <Register onClose={handleCloseLogin} handleSetModeLogin={handleSetModeLogin} />
      )}
    </div>
  );
}

export default QuestionAnswer;
