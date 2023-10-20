import cartApi from 'api/cartApi';
import colorApi from 'api/colorApi';
import imageProductApi from 'api/imageProductApi';
import productsApi from 'api/productsApi';
import QuantityButton from 'components/QuantityButton';
import { formatPrice } from 'constants/common';
import StorageKeys from 'constants/storage-keys';
import DOMPurify from 'dompurify';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { changeWhenSentToCart } from 'scenes/Cart/cartSlice';

DetailProduct.propTypes = {};

function DetailProduct(props) {
  const [listColor, setListColor] = useState('');
  const [product, setProduct] = useState();
  const [isActive, setIsActive] = useState(0);
  const [image, setImage] = useState({});
  const params = useParams();
  const { id } = params;
  const user = useSelector((state) => state.user.current);

  const dispatch = useDispatch();

  // get product by id
  useEffect(() => {
    (async () => {
      const res = await productsApi.getProduct(id);
      setProduct(res.data.data);
    })();
  }, [id]);

  // active button choose color
  const handleActive = async (idColor) => {
    setIsActive(idColor);
    const res = await imageProductApi.getImage({
      idColor: idColor,
      idProduct: parseInt(id),
    });
    setImage({
      id: res.data.data.id,
      url: res.data.data.url,
    });
  };

  // set image when product change
  useEffect(() => {
    const url = product && product.imageProduct ? product.imageProduct[0].url : '';
    const id = product && product.imageProduct ? product.imageProduct[0].id : '';
    setImage({
      id,
      url,
    });
  }, [product]);

  // return new array container idColor
  const arrayIdColor = useMemo(() => {
    if (!product) {
      return;
    }
    const newArray = product.imageProduct.map((item) => {
      return item.idColor;
    });
    return newArray;
  }, [product]);

  // get all color
  useEffect(() => {
    (async () => {
      const res = await colorApi.getAll();
      setListColor(res.data.data);
    })();
  }, []);

  // return list color of product in detail product
  const listColorOfProduct = useMemo(() => {
    if (!listColor || !arrayIdColor) {
      return;
    }
    let newData = [];
    for (let i = 0; i < arrayIdColor.length; i++) {
      listColor?.forEach((element) => {
        if (element.id === arrayIdColor[i]) {
          newData.push({
            id: element.id,
            hexCode: element.hexCode,
          });
        }
      });
    }
    return newData;
  }, [arrayIdColor, listColor]);

  // add product to cart
  const handleAddToCart = async (value) => {
    const newProduct = {
      idImageProduct: image.id,
      idCustomer: user.id,
      quantity: value,
      status: 'pending',
    };
    const token = localStorage.getItem(StorageKeys.TOKEN);
    try {
      const res = await cartApi.createCart(newProduct, token);
      console.log('check res cart', res);
      if (res.data.errCode === 0) {
        dispatch(changeWhenSentToCart());
      }
    } catch (error) {
      if (error.response.data.errCode === 3) {
        toast.error(`${error.response.data.message}`);
      }
    }

    // dispatch(addTocart(newProduct));
    // dispatch(showMiniCart());
  };

  //
  const safeDescription = DOMPurify.sanitize(product?.description);
  const mark = { __html: safeDescription };
  return (
    <div className="  lg:py-0 mb-[40px] ">
      <div className="py-[24px] px-4 lg:px-32 lg:flex lg:justify-center lg:items-center gap-x-8 ">
        <div className="  shadow-sm shadow-white  w-full h-full rounded-3xl border-1 bg-white overflow-hidden">
          <img src={image.url} alt="" className=" lg:max-w-lg hover:scale-110 ease-in duration-300" />
        </div>
        <div>
          <div className=" ">
            <h1 className="text-3xl font-semibold pt-[20px]	">{product?.nameProduct}</h1>
            <div className="my-4 mx-0  text-2xl font-bold leading-7 text-primary-yelow">
              {formatPrice(product?.price)}
            </div>
            <span className="font-normal text-base">{product?.shortDescription}</span>
            <div className="flex items-center justify-start gap-2 mt-4 mx-0 text-sm w-fit p-[16px] bg-white rounded-xl">
              {listColorOfProduct &&
                listColorOfProduct.length > 0 &&
                listColorOfProduct.map((item) => {
                  return (
                    <div
                      key={item.id}
                      style={{ backgroundColor: `${item.hexCode}` }}
                      className={`p-[20px] rounded-lg shadow-lg  my-0 mx-[5px] cursor-pointer capitalize ${
                        isActive === item.id ? 'border-2 border-primary-yelow ' : ''
                      }`}
                      onClick={() => handleActive(item.id)}
                    ></div>
                  );
                })}
              <QuantityButton onSubmit={handleAddToCart} />
            </div>
            {/* <div>
              <div className="w-[100%] sm:w-[300px] mt-5">
                <a
                  href="/"
                  className="flex items-center justify-center gap-x-[10px] h-[50px] text-white bg-primary-yelow font-semibold rounded-md	text-[17px] hover:bg-[#05c3ff] duration-200 "
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="25"
                    width="25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                  </svg>
                  <div>Cho vào giỏ hàng</div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-[40px] py-0 px-4 lg:px-32 sm:pb-[10px]">
        <div className="pl-[40px] text-2xl font-semibold mb-[30px] ">
          <h1>Thông tin chi tiết</h1>
        </div>
        <div className=" text-sm font-normal  " dangerouslySetInnerHTML={mark}></div>
      </div>
    </div>
  );
}

export default DetailProduct;
