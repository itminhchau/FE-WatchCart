import Header from 'components/Header';
import ModalSearch from 'components/Header/components/ModalSearch';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from 'scenes/Cart';
import Contact from 'scenes/Contact';
import Footer from 'scenes/Footer';
import Home from 'scenes/Home';
import News from 'scenes/News';
import OrderDetail from 'scenes/OrderDetail';
import Product from 'scenes/Product';
import DetailProduct from 'scenes/Product/components/DetailProduct';
import ProfileUser from 'scenes/ProfileUser';
import Shipment from 'scenes/Shipment';
function App() {
  return (
    <div className="App container mx-auto mb-2">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/news" element={<News />} />
      </Routes>

      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
