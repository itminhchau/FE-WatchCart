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
  const [isActive, setIsActive] = useState();
  const [image, setImage] = useState({});
  const params = useParams();
  const { id } = params;
  const user = useSelector((state) => state.user.current);
  const [stock, setStock] = useState(0);

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
    setStock(res.data.data.stock);
  };

  // set image when product change
  useEffect(() => {
    const url = product && product.imageProduct ? product.imageProduct[0].url : '';
    const id = product && product.imageProduct ? product.imageProduct[0].id : '';
    const stock = product && product.imageProduct ? product.imageProduct[0].stock : '';
    setImage({
      id,
      url,
    });
    setStock(stock);
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

      if (res.data.errCode === 0) {
        dispatch(changeWhenSentToCart());
      }
    } catch (error) {
      if (error.response.data.errCode === 3) {
        toast.error(`${error.response.data.message}`);
      }
    }
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
            <div className="flex flex-col justify-start items-start">
              <span className="font-normal text-base">{product?.shortDescription}</span>
              <span className="font-normal text-base text-red-300">Số lượng sản phẩm còn: {stock}</span>
            </div>
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
              <QuantityButton onSubmit={handleAddToCart} stock={stock} />
            </div>
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
