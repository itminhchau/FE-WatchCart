import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import QuestionForm from './QuestionForm';
import Login from 'scenes/auth/Login';
import { useEffect, useState } from 'react';
import { AUTHMODE } from 'constants/common';
import Register from 'scenes/auth/Register';
import AnswerForm from './AnswerForm';
import { useLocation, useParams } from 'react-router-dom';
import questionApi from 'api/questionApi';
import answerApi from 'api/answerApi';
import { Pagination } from '@mui/material';
import abbreviateName from 'constants/abbrevitateName';
import formatDate from 'constants/formatDate';

QuestionAnswer.propTypes = {};

function QuestionAnswer({ idProduct }) {
  const [loginCheck, setLoginCheck] = useState(false);
  const location = useLocation();
  const [idQuestion, setIdQuestion] = useState(0);
  const [mode, setMode] = useState(AUTHMODE.LOGIN);
  const [checked, setChecked] = useState();
  const [hide, setHide] = useState(true);
  const [question, setQuestion] = useState([]);
  const [rerender, setRerender] = useState(false);

  const params = useParams();
  const { id } = params;
  const [filter, setFilter] = useState({
    idProduct: id,
    page: 1,
    limit: 3,
  });
  const [total, setTotal] = useState();
  const totalPages = Math.ceil(total / filter.limit);
  const user = useSelector((state) => state.user.current);
  const idCustomer = user ? !!user.id : false;
  const handleOnChangePage = (e, newPage) => {
    setFilter({
      ...filter,
      page: newPage,
    });
  };
  const handleSubmitQuestion = async (values) => {
    if (idCustomer) {
      const name = `${user.firstName} ${user.lastName}`;
      const linkProduct = location.pathname;
      const newValues = {
        ...values,
        idProduct,
        idCustomer: user.id,
        userName: name,
        link: linkProduct,
      };

      const res = await questionApi.createQuestion(newValues);
      if (res && res.data.errCode === 0) {
        checkRender();
      }
    } else {
      toast.warning('mời bạn đăng nhập');
      handleSetLoginOpen();
    }
  };
  const handleSubmitAnswer = async (values) => {
    if (idCustomer) {
      const newValues = {
        ...values,
        idQuestion: idQuestion,
        idCustomer: user.id,
      };

      const res = await answerApi.createAnswer(newValues);
      if (res && res.data.errCode === 0) {
        checkRender();
      }
    } else {
      toast.warning('mời bạn đăng nhập');
      handleSetLoginOpen();
    }
  };
  const checkRender = () => {
    setRerender(!rerender);
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
    setIdQuestion(question.id);
    if (checked === question.id) {
      setHide(false);
      setChecked(' ');
    } else {
      setChecked(question.id);
      setHide(true);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await questionApi.getQuestion(filter);
      setQuestion(res.data.data);
      setTotal(res.data?.pagination?.total);
    })();
  }, [filter, rerender]);

  //func conver name ,ví dụ Lê Thái sơn =>LTS

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
          {question &&
            question.length > 0 &&
            question.map((item, index) => {
              return (
                <li className="mb-4 flex justify-start gap-2 items-start" key={item.id}>
                  <div className="w-[40x] h-[40px] text-[16px] lg:w-[60px] lg:h-[60px] bg-gray-300 font-bold lg:text-[28px] text-white rounded-sm text-center p-[8px]">
                    {abbreviateName(item.questionCt?.firstName + ' ' + item.questionCt?.lastName)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-start items-center gap-2 ">
                      <span className="font-bold text-[16px] lg:text-[18px]">
                        {item.questionCt?.firstName + ' ' + item.questionCt?.lastName}
                      </span>
                      <span className="text-[14px] text-gray-300"> vào {formatDate(item.createdAt)}</span>
                    </div>
                    <span className="block text-[14px] lg:text-[16px]">{item.content}</span>
                    <span
                      className="text-blue-400 block cursor-pointer text-[14px] hover:text-red-500"
                      onClick={() => handleAnswer(item)}
                    >
                      Trả lời
                    </span>
                    <div className=" ml-6">
                      <ul>
                        {item?.anwerQs &&
                          item?.anwerQs.length > 0 &&
                          item?.anwerQs.map((item, index) => {
                            return (
                              <li key={item.id} className="mb-4">
                                <div className="flex-1">
                                  <div className="flex justify-start items-center gap-2 ">
                                    <span className="font-bold text-[14px] lg:text-[18px] ">
                                      {' '}
                                      {item.answerCt?.firstName + ' ' + item.answerCt?.lastName}
                                    </span>
                                    <span className="text-red-500 font-bold italic text-[14px] lg:text-[16px]">
                                      {item.answerCt?.role === 'admin' ? 'Quản trị viên' : ''}
                                    </span>
                                    <span className="text-[14px] text-gray-300">vào {formatDate(item.createdAt)}</span>
                                  </div>
                                  <span className="block text-[14px] lg:text-[16px]">{item.content}</span>
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
        {question.length === 0 ? (
          ''
        ) : (
          <div className="text-center flex  mt-[20px] ">
            <Pagination
              onChange={handleOnChangePage}
              sx={{ margin: 'auto' }}
              page={Number.parseInt(filter.page) || 1}
              count={totalPages || 3}
              color="primary"
            />
          </div>
        )}
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
