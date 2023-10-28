import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import smartWatch from 'assets/image/smart-watch.png';
import product from 'assets/image/detail-product.jpg';
import close from 'assets/image/close.png';
import AddressCustomer from './component/AddressCustomer';
import { formatPrice } from 'constants/common';
import { useDispatch, useSelector } from 'react-redux';
import StorageKeys from 'constants/storage-keys';
import orderApi from 'api/orderApi';
import detailOrderApi from 'api/detailOrderApi';
import { toast } from 'react-toastify';
import { Box, LinearProgress } from '@mui/material';
import { changeWhenOrder } from 'scenes/Cart/cartSlice';

OrderDetail.propTypes = {};

function OrderDetail({ onCloseModalOrder, listCart, totalPrice }) {
  const [checked, setChecked] = useState(1);
  const [itemOrderMethodStatus, setItemOrderMethodStatus] = useState('chưa thanh toán');
  const [fee, setFee] = useState(15000);
  const user = JSON.parse(localStorage.getItem(StorageKeys.USER));
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const arrayPaymentMethod = [
    { id: 1, value: 'Nhận hàng', status: 'chưa thanh toán' },
    { id: 2, value: 'Thẻ ATM', status: 'đã thanh toán qua ATM' },
    { id: 3, value: 'PayPal', status: 'đã thanh toán qua Paypal' },
  ];

  const handleOnchangeOrderMethod = (item) => {
    setChecked(item.id);
    setItemOrderMethodStatus(item.status);
  };

  const handleConfirmOrder = async () => {
    const newValue = {
      idCustomer: user.id,
      totalPrice: totalPrice,
      status: itemOrderMethodStatus,
    };
    setIsLoading(true);
    try {
      const res = await orderApi.createOrder(newValue);
      let allTasksCompleted = false;
      if (res && res.data.errCode === 0 && listCart && listCart.length > 0) {
        console.log('đã vào chưa', res.data.data.id);
        const idOrder = res.data.data.id;
        for (const element of listCart) {
          try {
            const newData = {
              idCart: element.id,
              idOrder: idOrder,
              idImageProduct: element.ImageProduct.id,
              quantity: element.quantity,
              price: element.ImageProduct.imageProduct.price,
            };
            console.log('new data ', newData);
            const res = await detailOrderApi.createDetailOrder(newData);
            if (res && res.data.errCode === 0) {
              allTasksCompleted = true;
            }
          } catch (error) {
            console.error(error);
            allTasksCompleted = false; //
          }
        }
        if (allTasksCompleted) {
          toast.success('thanh toán thành công');
          setIsLoading(false);
          dispatch(changeWhenOrder());
          onCloseModalOrder();
        }
      }
    } catch (error) {
      console.log('check err order', error);
    }
  };

  console.log('check list cart', listCart);
  return (
    <div className="modal fixed top-0 left-0 right-0 bottom-0 flex z-20 ">
      <div className="modal-overlay absolute w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
      <div className="modal-body  bg-cover m-auto h-[500px] overflow-y-scroll sm:w-full md:h-[90%] max-w-[600px] bg-white z-10  rounded-xl overflow-hidden relative">
        {/* header */}
        <div className="h-[50px] bg-gray-100 flex justify-between items-center sticky top-0 left-0 right-0">
          <img src={smartWatch} alt="" className=" my-auto ml-2" />
          <img src={close} alt="" className=" my-auto ml-2 cursor-pointer" onClick={() => onCloseModalOrder()} />
        </div>

        {/* content title */}
        <div className="p-[24px] flex flex-col justify-center items-start gap-2">
          <span className=" text-primary-yelow text-[20px] font-bold">Xác nhận đơn hàng của bạn!</span>
          <span className=" text-gray-500 indent-3">
            Bạn sẽ xác nhận đơn hàng và shipper của chúng tôi sẽ chuyển hàng đến tay bạn trong 3 ngày tới.
          </span>
          <span className="text-green-500 font-serif">Mời bạn chọn phương thức thanh toán</span>

          <div className="flex justify-center gap-4 items-center w-full">
            {arrayPaymentMethod.map((item) => {
              return (
                <div className="  flex justify-center gap-3 items-center" key={item.id}>
                  <input
                    type="radio"
                    className="w-[18px] h-[18px] cursor-pointer "
                    onChange={() => handleOnchangeOrderMethod(item)}
                    checked={checked === item.id}
                  />
                  <span className="text-primary-yelow text-[16px] font-bold">{item.value}</span>
                </div>
              );
            })}
          </div>
          {/* form infor customer */}

          <AddressCustomer user={user} />
          {/* list item product */}
          <div className="h-[180px] overflow-y-scroll w-full">
            <div className="mt-[10px] w-full">
              {listCart &&
                listCart.map((item) => {
                  return (
                    <div className="left flex items-center bg-gray-200 px-2 py-2 rounded-md my-2">
                      <div className="w-[60px] h-[60px] ">
                        <img
                          src={item.ImageProduct.url}
                          alt="cart-product"
                          className="w-[60px] h-[60px] object-cover border border-slate-200	 bg-white rounded-lg "
                        />
                      </div>
                      <div className="flex justify-between items-center flex-1">
                        <div className="px-[10px] lg:px-[40px] flex flex-col justify-center items-start">
                          <span className="text-[16px]  text-primary-yelow font-medium truncate max-w-[250px] overflow-ellipsis">
                            {item.ImageProduct.imageProduct.nameProduct}
                          </span>
                          <span className="text-[14px] mt-[10px] text-black">
                            {formatPrice(item.ImageProduct.imageProduct.price)}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                          <span className="text-[14px] font-medium text-black">
                            {formatPrice(item.ImageProduct.imageProduct.price * item.quantity)}
                          </span>
                          <span className="text-primary-yelow">{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* total money */}
          <div className="flex justify-end w-full mt-[16px]">
            <div className="text-black w-[70%] flex flex-col gap-2">
              <div className="flex justify-between items-center ">
                <span className="block">Tiền sản phẩm: </span>
                <span className="block">{formatPrice(totalPrice) || formatPrice(0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="block">Phí vận chuyển: </span>
                <span className="block">{formatPrice(fee)}</span>
              </div>
              <div className="flex justify-between items-center border-t border-b border-black">
                <span className="block font-bold text-[20px] ">Tổng tiền </span>
                <span className="block font-bold text-[18px]">{formatPrice(totalPrice + fee)}</span>
              </div>
            </div>
          </div>
          {/* button order */}
          <div className="flex w-full">
            <button
              className=" text-white bg-green-700 my-[18px] p-[12px] rounded-lg m-auto cursor-pointer"
              onClick={handleConfirmOrder}
            >
              Xác nhận thanh toán đơn hàng
            </button>
          </div>
        </div>
        {isLoading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      </div>
    </div>
  );
}

export default OrderDetail;
