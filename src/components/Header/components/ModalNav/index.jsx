import { Link } from 'react-router-dom';

ModalNav.propTypes = {};

function ModalNav({ modalMenuRef, onCloseMenu }) {
  return (
    <div ref={modalMenuRef} className="absolute top-[96px] left-0 lg:hidden z-10">
      <ul className="w-[220px] font-bold text-[14px] bg-primary-gray text-primary-white text-center ">
        <li className=" py-2 border-b hover:bg-primary-yelow ">
          <Link to="/" onClick={() => onCloseMenu()}>
            Trang Chủ
          </Link>
        </li>
        <li className=" py-2 border-b hover:bg-primary-yelow ">
          <Link to="/products" onClick={() => onCloseMenu()}>
            Sản Phẩm
          </Link>
        </li>
        <li className=" py-2 border-b hover:bg-primary-yelow">
          <Link to="/endow" onClick={() => onCloseMenu()}>
            Ưu đãi
          </Link>
        </li>
        <li className=" py-2 border-b hover:bg-primary-yelow">
          <Link to="/contact" onClick={() => onCloseMenu()}>
            Liên Hệ
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ModalNav;
