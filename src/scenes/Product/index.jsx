import { Pagination } from '@mui/material';
import productsApi from 'api/productsApi';
import { useEffect, useState } from 'react';
import ItemProduct from './components/ItemProduct';
Product.propTypes = {};

function Product(props) {
  const [listAllProduct, setListAllProduct] = useState([]);
  const [total, setTotal] = useState('');
  const [filter, setFilter] = useState({
    page: 1,
    limit: 12,
  });

  const totalPages = Math.ceil(total / filter.limit);
  useEffect(() => {
    (async () => {
      const res = await productsApi.getAll(filter);
      setListAllProduct(res.data.data);
      setTotal(res.data.pagination?.total);
    })();
  }, [filter]);
  const handleOnChangePage = (e, newPage) => {
    setFilter({
      ...filter,
      page: newPage,
    });
  };

  return (
    <>
      <div className="lg:flex lg:justify-between mb-[80px]">
        <div className="left lg:w-[20%]">
          <div className="">check</div>
        </div>
        <div className="right mt-[20px] px-3 lg:w-[80%]">
          <div className="text-[22px] py-2 px-2 font-bold ">Sản phẩm</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  ">
            {listAllProduct &&
              listAllProduct.length > 0 &&
              listAllProduct.map((item) => <ItemProduct key={item.id} product={item} />)}
          </div>
          <div className="text-center lg:float-right mt-[20px] ">
            <Pagination
              onChange={handleOnChangePage}
              sx={{ margin: '16px 0 0 0' }}
              page={filter.page || 1}
              count={totalPages || 10}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
