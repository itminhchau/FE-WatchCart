ChildrenTable.propTypes = {};

function ChildrenTable({ list }) {
  return (
    <div>
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className=" bg-blue-500">
            <th class="py-2 px-4 border-b">thứ tự</th>
            <th class="py-2 px-4 border-b">Tên Sản phẩm</th>
            <th class="py-2 px-4 border-b">Đơn giá </th>
            <th class="py-2 px-4 border-b">Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, index) => {
              return (
                <>
                  <tr className="text-center cursor-pointer hover:bg-blue-200">
                    <td class="py-2 px-4 border-b">{index + 1}</td>
                    <td class="py-2 px-4 border-b flex justify-center items-center ">
                      <img src={item.ImageProduct.url} alt="" className=" w-[30px] h-[30px] mr-2 " />
                      <span className="truncate max-w-[208px] overflow-ellipsis">
                        {item.ImageProduct.imageProduct.nameProduct}
                      </span>
                    </td>
                    <td class="py-2 px-4 border-b">{item.unitPrice}</td>
                    <td class="py-2 px-4 border-b">{item.quantity}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ChildrenTable;
