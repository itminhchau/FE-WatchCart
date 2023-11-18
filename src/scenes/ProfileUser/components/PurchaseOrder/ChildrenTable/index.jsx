ChildrenTable.propTypes = {};

function ChildrenTable({ list }) {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead>
          <tr className=" bg-blue-500 text-[14px] md:text-[16px]">
            <th className="py-2 px-4 border-b">Thứ tự</th>
            <th className="py-2 px-4 border-b">Tên Sản phẩm</th>
            <th className="py-2 px-4 border-b">Đơn giá </th>
            <th className="py-2 px-4 border-b">Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, index) => {
              return (
                <>
                  <tr
                    key={index + 1}
                    className="text-center cursor-pointer hover:bg-blue-200 text-[14px] md:text-[16px]"
                  >
                    <td className="px-0 py-0 md:py-2 md:px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b flex justify-center items-center ">
                      <img src={item.ImageProduct.url} alt="" className=" w-[30px] h-[30px] mr-2 " />
                      <span className="truncate max-w-[208px] overflow-ellipsis">
                        {item.ImageProduct.imageProduct.nameProduct}
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b">{item.unitPrice}</td>
                    <td className="py-2 px-4 border-b">{item.quantity}</td>
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
