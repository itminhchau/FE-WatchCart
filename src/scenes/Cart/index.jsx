import cartApi from 'api/cartApi';
import { formatPrice } from 'constants/common';
import StorageKeys from 'constants/storage-keys';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import OrderDetail from 'scenes/OrderDetail';
import cartEmpty from '../../assets/image/cart-empty.webp';
import { changeWhenDeleteItemCart, changeWhenSentToCart } from './cartSlice';
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartIsEmpty, setCartIsEmpty] = useState(false);
  const [listCart, setListCart] = useState([]);
  const token = localStorage.getItem(StorageKeys.TOKEN);
  const user = useSelector((state) => state.user.current);
  const checkDeleteItemCart = useSelector((state) => state.cart.checkDeleteItemCart);
  const checkOrder = useSelector((state) => state.cart.checkOrder);
  const checkAddToCart = useSelector((state) => state.cart.checkAddToCart);
  const [openModalOrder, setOpenModalOrder] = useState(false);
  const dispatch = useDispatch();

  const handleAddClick = async (id) => {
    // setQuantity((add) => add + 1);
    const newValue = {
      id,
      mode: 'sum',
    };
    try {
      const res = await cartApi.updateQuantityCart(newValue);
      if (res && res.data.errCode === 0) {
        dispatch(changeWhenSentToCart());
      }
    } catch (error) {}
  };
  const handleSubtractClick = async (id) => {
    const newValue = {
      id,
      mode: 'sub',
    };
    try {
      const res = await cartApi.updateQuantityCart(newValue);
      if (res && res.data.errCode === 0) {
        dispatch(changeWhenSentToCart());
      }
    } catch (error) {}
  };

  const handleRemoveProduct = async (id) => {
    try {
      const res = await cartApi.deleteItemCart(id);
      console.log(res.data);
      if (res && res.data.errCode === 0) {
        dispatch(changeWhenDeleteItemCart());
      }
    } catch (error) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await cartApi.getAllCart({ idCustomer: user.id || '' }, token);
        setListCart(res.data.data);
        console.log('res cart :', res);
      } catch (error) {
        if (error.response.data.errCode === 3) {
          toast.error(`${error.response.data.message}`);
        }
      }
    })();
  }, [checkAddToCart, user.id, token, checkDeleteItemCart, checkOrder]);

  const totalPrice = useMemo(() => {
    if (listCart === []) {
      return 0;
    } else {
    }
    let total = 0;
    listCart.forEach((item) => {
      total += item.ImageProduct.imageProduct.price * item.quantity;
    });
    return total;
  }, [listCart]);

  const handleOpenModalOrder = () => {
    setOpenModalOrder(true);
  };
  const handleCloseModalOrder = () => {
    setOpenModalOrder(false);
  };

  return (
    <div>
      <div className="px-3 mt-[20px] ">
        {cartIsEmpty && cartIsEmpty === true ? (
          <div className="flex flex-col	justify-center items-center ">
            <div>
              <img src={cartEmpty} alt="cart-empty" />
            </div>
            <div className="text-red-600 text-2xl">“Hổng” có gì trong giỏ hết</div>
            <div className="text-center mt-[10px]">Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</div>
            <div className="mt-[20px]">
              <button className="border p-[10px] rounded-md hover:bg-[#fff] hover:text-black duration-200">
                <a href="/">Mua sắm ngay</a>
              </button>
            </div>
          </div>
        ) : (
          <div className="lg:flex lg:gap-x-6 lg:justify-center">
            <div className="left ">
              <div className="lg:flex lg:items-center lg:justify-between">
                <h1 className="text-2xl font-medium">Giỏ hàng của bạn</h1>
                <div className="text-gray-200">
                  Bạn đang có
                  <span className="font-medium text-white"> {quantity} sản phẩm </span>
                  trong giỏ hàng
                </div>
              </div>
              {/* item product */}

              {listCart &&
                listCart.map((item) => {
                  return (
                    <div className="mt-[20px]">
                      <div className="left flex items-center bg-[#fff] px-2 py-2 rounded-md lg:py-[20px] lg:px-[20px]">
                        <div className="relative">
                          <div className="flex items-center cursor-pointer justify-center absolute left-[-7px] top-[-7px]">
                            <i
                              onClick={() => handleRemoveProduct(item.id)}
                              className="fa-solid fa-minus p-[2px] bg-primary-yelow rounded-full "
                            ></i>
                          </div>
                          <div className="w-[80px] h-[80px] ">
                            <img
                              src={item.ImageProduct.url}
                              alt="cart-product"
                              className="w-[80px] h-[80px] object-cover border border-slate-200	"
                            />
                          </div>
                        </div>
                        <div className="px-[10px] lg:px-[40px]">
                          <div className="text-[14px]  text-primary-yelow font-medium truncate max-w-[328px] overflow-ellipsis">
                            {item.ImageProduct.imageProduct.nameProduct}
                          </div>
                          <div className="text-[14px] mt-[10px] text-black">
                            {formatPrice(item.ImageProduct.imageProduct.price)}
                          </div>
                        </div>
                        <div className="">
                          <div className="text-[14px] font-medium text-black">
                            {formatPrice(item.ImageProduct.imageProduct.price * item.quantity)}
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <button className="">
                              <i
                                onClick={() => handleSubtractClick(item.id)}
                                className="fa-solid fa-minus text-gray-900 text-[14px] hover:text-primary-yelow duration-150	"
                              ></i>
                            </button>
                            <div className="text-primary-yelow">{item.quantity}</div>
                            <button className="">
                              <i
                                onClick={() => handleAddClick(item.id)}
                                className="fa-solid fa-plus text-gray-900 text-[14px] hover:text-primary-yelow duration-150	"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="mt-[20px]  lg:mt-[52px]  ">
              <div className="bg-[#fff] py-2 px-2 lg:py-[30px] lg:px-[10px] rounded-md ">
                <div className="flex justify-between mb-[7px] lg:mx-[30px] ">
                  <div className="text-black font-bold sm:text-[18px]">Tổng tiền:</div>
                  <div className="text-primary-yelow font-semibold sm:text-[18px]">{formatPrice(totalPrice)}</div>
                </div>
                <div className="border-t-2 pt-[15px] lg:px-[70px]">
                  <div className="text-[14px] text-gray-600">
                    {' '}
                    - ĐỔI HÀNG MIỄN PHÍ - Tại tất cả cửa hàng trong 15 ngày
                  </div>
                  <div className="text-[14px] text-gray-600 mt-2">
                    - Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                  </div>
                </div>
                <div className="mt-[10px] lg:flex lg:items-center lg:justify-center lg:mt-[20px]">
                  <button
                    className="w-[100%] lg:w-[500px]  bg-primary-yelow  hover:bg-[#05c3ff] duration-200 "
                    onClick={handleOpenModalOrder}
                  >
                    <span className="block h-[100%]  w-[100%] px-[5px] py-[10px] uppercase font-medium">
                      Thanh toán
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-[20px]  bg-green-300 py-2 px-2 rounded-md">
                <div className="text-black font-bold text-[14px] lg:pt-[10px]">Chính sách mua hàng</div>
                <div className="text-gray-800 text-[14px] pt-[15px] lg:pb-[10px]">
                  Hiện chúng tôi đang áp dụng giao hàng trên toàn quốc
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {openModalOrder && (
        <OrderDetail onCloseModalOrder={handleCloseModalOrder} listCart={listCart} totalPrice={totalPrice} />
      )}
    </div>
  );
};

export default Cart;
