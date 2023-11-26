import { Checkbox, FormControlLabel, FormGroup, Pagination } from '@mui/material';
import brandApi from 'api/brandApi';
import productsApi from 'api/productsApi';
import menu from 'assets/image/list.png';
import queryString from 'query-string';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import ItemProduct from './components/ItemProduct';
import arrowback from 'assets/image/arrowback.png';
import listPriceData from '../../mockData/listData';

Product.propTypes = {};

function Product(props) {
  let newValue = useRef('');
  const [listAllProduct, setListAllProduct] = useState([]);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [active, setActive] = useState(null);
  const [activeBrand, setActiveBrand] = useState(null);
  const [listBrand, setListBrand] = useState([]);
  const navigate = useNavigate();
  const [checkSideBar, setCheckSideBar] = useState(false);
  const clickProductHeader = useSelector((state) => state.product.clickProductHeader);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
  });
  const [reload, setReload] = useState(false);
  const queryParams = useMemo(() => {
    const param = queryString.parse(location.search);

    return {
      ...param,
      page: Number.parseInt(param.page) || 1,
      limit: Number.parseInt(param.limit) || 12,
      idBrand: param.idBrand || '',
      newProduct: param.newProduct || '',
      modePrice: param.modePrice || '',
      bestSelling: param.bestSelling || '',
      arrayPrice: param.arrayPrice || '',
    };
  }, [location.search]);

  const totalPages = Math.ceil(pagination.total / pagination.limit);

  useEffect(() => {
    (async () => {
      const res = await productsApi.getAll(queryParams);
      setListAllProduct(res.data.data);
      setPagination(res.data.pagination);
    })();
  }, [queryParams]);

  const handleOnChangePage = (e, newPage) => {
    const newFilter = {
      ...queryParams,
      page: newPage,
    };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilter),
    });
  };

  const arrayfilter = [
    { id: 1, value: 'Bán chạy nhất', orders: 'DESC' },
    { id: 2, value: 'Mới nhất', order: 'DESC' },
  ];
  const arrayPrice = [
    { id: 1, value: 'Tăng dần', order: 'ASC' },
    { id: 2, value: 'Giảm dần', order: 'DESC' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item.value);
    setIsOpen(false);
    const newFilter = {
      ...queryParams,
      modePrice: item.order,
    };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilter),
    });
  };

  const handleOnclickButton = (item) => {
    setActive(item.id);
    const newFilter = {
      ...queryParams,
      newProduct: item.order,
      bestSelling: item.orders,
    };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilter),
    });
  };
  const handleOnclickBrand = (item) => {
    setActiveBrand(item);
    const newFilter = {
      ...queryParams,
      idBrand: item,
    };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilter),
    });
  };

  useEffect(() => {
    (async () => {
      const res = await brandApi.getAllBrand();
      setListBrand(res.data.data);
    })();
  }, []);

  useEffect(() => {
    setActive(null);
    setActiveBrand(null);
    setSelectedItem('');
  }, [clickProductHeader]);

  const handleChangePrice = (value) => {
    const isChecked = newValue.current.includes(value);
    if (isChecked) {
      let x = newValue.current
        .split('-')
        .filter((item) => item !== value)
        .join('-');
      newValue.current = x;
    } else {
      newValue.current += `-${value}`;
    }
    setReload(!reload);
    const newFilter = {
      ...queryParams,
      arrayPrice: newValue.current,
    };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(newFilter),
    });
  };
  const handleOpenSideBar = () => {
    setCheckSideBar(true);
  };
  const handleCloseSideBar = () => {
    setCheckSideBar(false);
  };

  return (
    <>
      <div className="lg:flex lg:justify-between py-[18px] grid grid-cols-1 lg:grid-cols-2-8 gap-4 relative">
        {checkSideBar && (
          <div className="left lg:w-[20%]  lg:hidden absolute z-10 top-[18px] left-0  lg:top-0 ">
            <div className="w-full h-full  lg:flex p-[18px] bg-gray-200 lg:bg-white  lg:justify-start lg:items-start lg:flex-col ">
              <div className=" flex justify-start gap-2 items-center">
                <img src={menu} alt="" className=" w-[20px] h-[20px] hidden lg:block" />
                <img src={arrowback} alt="" className=" w-[20px] h-[20px] lg:hidden" onClick={handleCloseSideBar} />
                <span className="text-black text-[18px] font-bold">Danh mục sản phẩm</span>
              </div>
              <ul className="w-full mt-4">
                {listBrand &&
                  listBrand.map((item, index) => {
                    return (
                      <li key={item.id}>
                        <span
                          onClick={() => handleOnclickBrand(item.id)}
                          style={{ backgroundColor: `${activeBrand === item.id ? '#eba81d' : ''}` }}
                          className=" block cursor-pointer bg-gray-500 text-white my-1 px-[12px] py-[8px] rounded-xl hover:bg-blue-400"
                        >
                          {item.nameBrand}
                        </span>
                      </li>
                    );
                  })}
              </ul>
              <span className="text-black text-[18px] font-bold mt-[20px] mb-[10px]">Mức giá</span>
              <ul className="text-black ">
                <FormGroup>
                  {listPriceData &&
                    listPriceData.length > 0 &&
                    listPriceData.map((item) => (
                      <li key={item.id}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={newValue.current.includes(item.value)}
                              onChange={() => handleChangePrice(item.value)}
                            />
                          }
                          label={item.title}
                        />
                      </li>
                    ))}
                </FormGroup>
              </ul>
            </div>
          </div>
        )}
        <div className="left lg:w-[20%] hidden lg:block  z-10 top-[18px]  ">
          <div className="w-full h-full  lg:flex p-[18px] bg-gray-200 lg:bg-white  lg:justify-start lg:items-start lg:flex-col ">
            <div className=" flex justify-start gap-2 items-center">
              <img src={menu} alt="" className=" w-[20px] h-[20px] hidden lg:block" />
              <img src={arrowback} alt="" className=" w-[20px] h-[20px] lg:hidden" onClick={handleCloseSideBar} />
              <span className="text-black text-[18px] font-bold">Danh mục sản phẩm</span>
            </div>
            <ul className="w-full mt-4">
              {listBrand &&
                listBrand.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <span
                        onClick={() => handleOnclickBrand(item.id)}
                        style={{ backgroundColor: `${activeBrand === item.id ? '#eba81d' : ''}` }}
                        className=" block cursor-pointer bg-gray-500 text-white my-1 px-[12px] py-[8px] rounded-xl hover:bg-blue-400"
                      >
                        {item.nameBrand}
                      </span>
                    </li>
                  );
                })}
            </ul>
            <span className="text-black text-[18px] font-bold mt-[20px] mb-[10px]">Mức giá</span>
            <ul className="text-black ">
              <FormGroup>
                {listPriceData &&
                  listPriceData.length > 0 &&
                  listPriceData.map((item) => (
                    <li key={item.id}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={newValue.current.includes(item.value)}
                            onChange={() => handleChangePrice(item.value)}
                          />
                        }
                        label={item.title}
                      />
                    </li>
                  ))}
              </FormGroup>
            </ul>
          </div>
        </div>
        <div className="right lg:w-[80%]">
          <div className="h-[80px] w-full bg-white mb-4 flex justify-center md:justify-start px-[8px] gap-3 items-center">
            <img src={menu} alt="" className=" lg:hidden cursor-pointer" onClick={handleOpenSideBar} />
            <span className="text-black hidden md:block">Sắp xếp theo</span>
            {arrayfilter.map((item) => {
              return (
                <button
                  onClick={() => handleOnclickButton(item)}
                  key={item.id}
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
                  {selectedItem ? selectedItem : 'Giá'}
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
                    {arrayPrice.map((item) => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  ">
            {listAllProduct &&
              listAllProduct.length > 0 &&
              listAllProduct.map((item) => <ItemProduct key={item.id} product={item} />)}
          </div>
        </div>
      </div>
      <div className="text-center flex  mt-[20px] ">
        <Pagination
          onChange={handleOnChangePage}
          sx={{ margin: 'auto' }}
          page={Number.parseInt(pagination.page) || 1}
          count={totalPages || 10}
          color="primary"
        />
      </div>
    </>
  );
}

export default Product;
