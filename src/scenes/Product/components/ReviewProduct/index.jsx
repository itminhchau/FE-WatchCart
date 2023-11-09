import { Pagination, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalReviewProduct from './ModalReviewProduct';
import productsApi from 'api/productsApi';
import { useParams } from 'react-router-dom';
import reviewApi from 'api/reviewApi';
import ReviewNotCmt from '../../../../assets/image/review-not-cmt.png';
import converArrayStar from 'constants/converArrayStar';

const ReviewProduct = () => {
  const params = useParams();
  const { id } = params;
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState();
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [listReviewProduct, setListReviewProduct] = useState([]);
  const [filter, setFilter] = useState({
    idProduct: id,
    page: 1,
    limit: 5,
    newReview: '',
    numberStar: '',
  });
  const [totalStar, setTotalStar] = useState();
  const [avgStar, setAvgStar] = useState();
  const [countStar, setCountStar] = useState([]);
  const [checkRender, setCheckRender] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const totalPages = Math.ceil(totalStar / filter.limit);
  const handleOnChangePage = (e, newPage) => {
    setFilter({
      ...filter,
      page: newPage,
    });
  };

  useEffect(() => {
    (async () => {
      const res = await productsApi.getProduct(id);
      setProduct(res.data.data);
    })();
  }, [id]);
  const arrayfilter = [{ id: 1, value: 'Mới nhất', order: 'DESC' }];
  const arrayStar = [
    { id: 1, value: '1 sao', star: 1 },
    { id: 2, value: '2 sao', star: 2 },
    { id: 3, value: '3 sao', star: 3 },
    { id: 4, value: '4 sao', star: 4 },
    { id: 5, value: '5 sao', star: 5 },
  ];
  const handleOnclickButton = (item) => {
    setActive(item.id);
    setFilter({
      ...filter,
      newReview: item.order,
    });
  };

  const handleItemClick = (item) => {
    setSelectedItem(item.value);
    setIsOpen(false);
    setFilter({
      ...filter,
      numberStar: item.star,
    });
  };

  const checkRenderReivew = () => {
    setCheckRender(!checkRender);
  };
  useEffect(() => {
    (async () => {
      const res = await reviewApi.getReviewProduct(filter);
      setListReviewProduct(res.data.data);
    })();
  }, [filter, checkRender]);
  useEffect(() => {
    (async () => {
      const res = await reviewApi.getAvgStar({ idProduct: id });
      setTotalStar(res.data.total);
      setAvgStar(res.data.avgStar);
      setCountStar(res.data.coutStar);
    })();
  }, [id, checkRender]);
  const formatDate = (date) => {
    let dateObj = new Date(date);
    let formatDate = dateObj.getDate() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
    return formatDate;
  };

  return (
    <>
      <div className="mt-[50px]  text-black py-2 px-2 lg:px-32 rounded-md   ">
        <div className="bg-[#F8F9FA]  py-2 px-4 rounded-md">
          <h1 className="text-[18px] lg:text-[20px] mb-[20px] font-medium">Đánh giá sản phẩm</h1>
          <div className="review-top border-t lg:flex lg:justify-center lg:items-center lg:gap-20 py-3 px-0">
            <div className="left flex flex-col items-center mb-4 lg:mb-0">
              <span className="text-[#444b52] hidden lg:block">Đánh Giá Trung Bình</span>
              <div className="text-[30px] text-primary-yelow font-bold">{Math.round(avgStar * 10) / 10 || 5}/5</div>
              <Rating
                name="read-only"
                value={Math.round(avgStar * 10) / 10 || 5}
                precision={0.5}
                readOnly
                size="small"
              />
              <div className="text-[#939ca3] text-[14px]">{totalStar || 0} đánh giá</div>
            </div>
            <div className="center mb-4 lg:mb-0">
              {converArrayStar(countStar) &&
                converArrayStar(countStar).length > 0 &&
                converArrayStar(countStar).map((item) => {
                  let listStar = Math.floor((100 * item.count) / totalStar);
                  let percentStar = `${listStar}%`;
                  return (
                    <div key={item.star} className="flex items-center gap-1">
                      <span className="text-[#444b52] text-[14px]">{item.star}</span>
                      <Rating name="read-only" value={item.star} readOnly size="small" />
                      <div className="h-[8px] w-[280px] rounded bg-[#edeeef] overflow-hidden relative">
                        <div
                          style={{ width: `${percentStar}` }}
                          className={`bg-[#48bb78] rounded  h-full float-left  text-right `}
                        ></div>
                      </div>
                      <span className="text-[14px] text-[#444b52]">{item.count}</span>
                    </div>
                  );
                })}
            </div>
            <div className="right flex flex-col">
              <span className="text-[#444b52] text-[15px] hidden lg:block">Bạn đã dùng sản phẩm này?</span>
              <button
                className=" mt-[5px] uppercase bg-primary-yelow text-[white] text-[15px] px-0 py-3 rounded-lg cursor-pointer hover:bg-blue-500 duration-100"
                onClick={() => handleClickOpen()}
              >
                gửi đánh giá
              </button>
            </div>
          </div>
          <div className="review-bottom  w-full  pt-[20px] border-t">
            <div className="mt-[5px] flex items-center gap-3">
              <span>Sắp xếp theo:</span>
              {arrayfilter.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleOnclickButton(item)}
                    className=" bg-gray-500 p-[8px] text-white rounded-xl"
                    style={{ backgroundColor: `${active === item.id ? '#eba81d' : ''}` }}
                  >
                    {item.value}
                  </button>
                );
              })}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 active:bg-gray-200  active:text-primary-yelow "
                  >
                    {selectedItem ? selectedItem : 'Đánh giá sao'}
                    <svg
                      className="-mr-1 ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.293 7.293a1 1 0 011.414-1.414L10 12.586l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 01-1.414 0 1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-[120px] z-10 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {arrayStar.map((item) => {
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            className="block px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          >
                            {item.value}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full mt-[20px] ">
              {listReviewProduct.length === 0 ? (
                <div className="flex flex-col items-center">
                  <img className="w-[126px] h-[112px] mb-[16px]" src={ReviewNotCmt} alt="ReviewNotCmt" />
                  <span className="text-[#32373d] text-[18px] font-medium">Không tìm thấy đánh giá phù hợp</span>
                </div>
              ) : (
                listReviewProduct &&
                listReviewProduct.length > 0 &&
                listReviewProduct.map((item) => {
                  return (
                    <div className="flex flex-col items-start text-[14px]" key={item.id}>
                      <span className="lg:text-[18px] font-bold ">{item.userName}</span>
                      <span className="mt-[5px]">
                        <Rating name="read-only" readOnly value={item.star} size="small"></Rating>
                      </span>
                      <span className="text-[#444b52] lg:text-[16px]">{item.content}</span>
                      <span className="mt-[5px] text-[#939ca3]">{formatDate(item.createdAt)}</span>
                    </div>
                  );
                })
              )}
              {listReviewProduct.length === 0 ? (
                ''
              ) : (
                <div className="text-center flex  mt-[20px] ">
                  <Pagination
                    onChange={handleOnChangePage}
                    sx={{ margin: 'auto' }}
                    page={Number.parseInt(filter.page) || 1}
                    count={totalPages || 5}
                    color="primary"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ModalReviewProduct
        checkRenderReivew={checkRenderReivew}
        handleClose={handleClose}
        open={open}
        handleClickOpen={handleClickOpen}
        product={product}
      />
    </>
  );
};

export default ReviewProduct;
