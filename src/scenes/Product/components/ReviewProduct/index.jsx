import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalReviewProduct from './ModalReviewProduct';
import productsApi from 'api/productsApi';
import { useParams } from 'react-router-dom';

const ReviewProduct = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState();
  const params = useParams();
  const { id } = params;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    (async () => {
      const res = await productsApi.getProduct(id);
      console.log('res :', res);
      setProduct(res.data.data);
    })();
  }, [id]);
  return (
    <div className="bg-[#F8F9FA] mt-[50px] text-black py-2 px-2 rounded-md overflow-hidden ">
      <div>
        <h1 className="text-[18px]">Đánh giá sản phẩm</h1>
        <div className="review-top border-t flex justify-around items-center gap-3">
          <div className="left flex flex-col items-center">
            <span className="text-[#444b52]">Đánh Giá Trung Bình</span>
            <div className="text-[30px] text-primary-yelow font-bold">5/5</div>
            <Rating name="read-only" value={5} readOnly size="small" />
            <div className="text-[#939ca3] text-[14px]">35 đánh giá</div>
          </div>
          <div className="center">
            <div className="flex items-center gap-1">
              <span className="text-[#444b52] text-[14px]">5</span>
              <Rating name="read-only" value={5} readOnly size="small" />
              <div className="h-[8px] w-[280px] rounded bg-[#edeeef] overflow-hidden relative">
                <div className="bg-[#48bb78] rounded w-[54%]">.</div>
              </div>
              <span className="text-[14px] text-[#444b52]">19</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#444b52]">4</span>
              <Rating name="read-only" value={4} readOnly size="small" />
              <div className="h-[8px] w-[280px] rounded bg-[#edeeef] overflow-hidden relative">
                <div className="bg-[#48bb78] rounded w-[46%]">.</div>
              </div>
              <span className="text-[14px] text-[#444b52]">10</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#444b52]">3</span>
              <Rating name="read-only" value={3} readOnly size="small" />
              <div className="h-[8px] w-[280px] rounded bg-[#edeeef] overflow-hidden relative">
                <div className="bg-[#48bb78] rounded "></div>
              </div>
              <span className="text-[14px] text-[#444b52]">0</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#444b52]">2</span>
              <Rating name="read-only" value={2} readOnly size="small" />
              <div className="h-[8px] w-[280px] rounded bg-[#edeeef] overflow-hidden relative">
                <div className="bg-[#48bb78] rounded "></div>
              </div>
              <span className="text-[14px] text-[#444b52]">0</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[#444b52]">1</span>
              <Rating name="read-only" value={1} readOnly size="small" />
              <div className="h-[8px] w-[280px] rounded bg-[#edeeef] overflow-hidden relative">
                <div className="bg-[#48bb78] rounded "></div>
              </div>
              <span className="text-[14px] text-[#444b52]">0</span>
            </div>
          </div>
          <div className="right flex flex-col">
            <span>Bạn đã dùng sản phẩm này?</span>
            <button
              className=" mt-[5px] uppercase bg-primary-yelow text-[white] text-[15px] p-[10px] rounded-lg cursor-pointer hover:bg-blue-500 duration-100"
              onClick={() => handleClickOpen()}
            >
              gửi đánh giá
            </button>
          </div>
        </div>
        <div className="review-bottom"></div>
      </div>

      <ModalReviewProduct handleClose={handleClose} open={open} handleClickOpen={handleClickOpen} product={product} />
    </div>
  );
};

export default ReviewProduct;
