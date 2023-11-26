import Header from 'components/Header';
import ScrollToTop from 'components/ScrollToTop';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from 'scenes/Cart';
import Contact from 'scenes/Contact';
import Endow from 'scenes/Endow';
import Footer from 'scenes/Footer';
import Home from 'scenes/Home';
import Product from 'scenes/Product';
import DetailProduct from 'scenes/Product/components/DetailProduct';
import ProfileUser from 'scenes/ProfileUser';
import Shipment from 'scenes/Shipment';

function App() {
  return (
    <div className="App container bg-[#514f4f] mx-auto mb-2">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<DetailProduct />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/endow" element={<Endow />} />
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
