import detailOrderApi from 'api/detailOrderApi';
import { useEffect, useState } from 'react';
import ChildrenTable from './ChildrenTable';

PurchaseOrder.propTypes = {};

function PurchaseOrder({ idCustomer }) {
  const [listDetailOrder, setListDetailOrder] = useState([]);
  const [checked, setChecked] = useState();
  const [hide, setHide] = useState(true);
  const hanldeOnclick = (id) => {
    if (checked === id) {
      setHide(false);
      setChecked(' ');
    } else {
      setChecked(id);
      setHide(true);
    }
  };

  useEffect(() => {
    (async () => {
      const res = await detailOrderApi.getDetailOrderApi({ idCustomer });
      setListDetailOrder(res.data.data);
    })();
  }, [idCustomer]);

  return (
    <div class="flex flex-col justify-center items-center gap-3 mt-3">
      <span className="text-black text-[24px]">Thông Tin Chi Tiết Đơn Mua Hàng Của Quý Khách</span>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-green-500">
            <th class="py-2 px-4 border-b">Thứ tự</th>
            <th class="py-2 px-4 border-b">Trạng thái </th>
            <th class="py-2 px-4 border-b">Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {listDetailOrder &&
            listDetailOrder.map((item, index) => {
              return (
                <>
                  <tr
                    className="text-center cursor-pointer hover:bg-primary-yelow"
                    onClick={() => hanldeOnclick(item.id)}
                  >
                    <td class="py-2 px-4 border-b">{index + 1}</td>
                    <td class="py-2 px-4 border-b">{item.status}</td>
                    <td class="py-2 px-4 border-b">{item.totalPrice}</td>
                  </tr>
                  {checked === item.id && hide && (
                    <tr>
                      <td colSpan="3" style={{ padding: '8px' }}>
                        <ChildrenTable list={item.DetailOrders} />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default PurchaseOrder;
