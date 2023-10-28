import cartApi from 'api/cartApi';
import iconDelete from 'assets/image/delete.png';
import { formatPrice } from 'constants/common';
import StorageKeys from 'constants/storage-keys';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { changeWhenDeleteItemCart, hideMiniCart } from 'scenes/Cart/cartSlice';

ModalCart.propTypes = {};

function ModalCart({ modalCartRef, onSetCountItemCart }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.current);
  const checkLogin = !!user.id;
  const checkAddToCart = useSelector((state) => state.cart.checkAddToCart);
  const [listCart, setListCart] = useState([]);
  const token = localStorage.getItem(StorageKeys.TOKEN);
  const checkDeleteItemCart = useSelector((state) => state.cart.checkDeleteItemCart);

  const handleNavigate = () => {
    navigate('/cart');
    dispatch(hideMiniCart());
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await cartApi.getAllCart({ idCustomer: user.id || '' }, token);
        setListCart(res.data.data);
      } catch (error) {
        if (error.response.data.errCode === 3) {
          toast.error(`${error.response.data.message}`);
        }
      }
    })();
  }, [checkAddToCart, user.id, token, checkDeleteItemCart]);
  const handlDeleteItemCart = async (id) => {
    try {
      const res = await cartApi.deleteItemCart(id);

      if (res && res.data.errCode === 0) {
        dispatch(changeWhenDeleteItemCart());
      }
    } catch (error) {}
  };

  return (
    <div
      ref={modalCartRef}
      className="flex flex-col bg-white text-black p-[16px]  w-full min-h-[50vh] top-[80px] right-0 lg:right-[23px] rounded-xl lg:w-[450px] absolute after:content-[''] after:block after:border-[15px] after:border-icon-triangle after:absolute after:top-[-27px] after:left-[65%] md:after::left-[67%] lg:after:left-[51%] xl:after:left-[33%] 2xl:after:left-[17%]  z-10"
    >
      <span className=" text-[20px] font-bold">Thông tin giỏ hàng</span>
      <ul className=" overflow-y-scroll mt-3 mb-3 min-h-[200px] max-h-[300px]">
        {listCart &&
          listCart.map((item) => {
            return (
              <li key={item.id} className=" grid grid-cols-1-4-1 gap-2 bg-gray-200 p-[8px] rounded-xl my-[10px]">
                <img src={item.ImageProduct.url} alt="" className=" m-auto rounded-xl" />
                <div className="flex flex-col justify-center items-start">
                  <span className=" font-bold">{item.ImageProduct.imageProduct.nameProduct}</span>
                  <span>{formatPrice(item.ImageProduct.imageProduct.price)}</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <span>{item.quantity}</span>
                  <img
                    src={iconDelete}
                    alt=""
                    className=" w-[20px] h-[20px] cursor-pointer"
                    onClick={() => handlDeleteItemCart(item.id)}
                  />
                </div>
              </li>
            );
          })}
      </ul>
      <button
        className={`${
          checkLogin ? '' : 'pointer-events-none bg-gray-300'
        } bg-primary-yelow text-[white] text-[20px] p-[8px] rounded-lg cursor-pointer hover:bg-blue-500 duration-100`}
        onClick={handleNavigate}
      >
        Xem giỏ hàng
      </button>
    </div>
  );
}

export default ModalCart;
