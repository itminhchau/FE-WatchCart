import Header from 'components/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from 'scenes/Footer';
import Home from 'scenes/Home';
import Product from 'scenes/Product';
import DetailProduct from 'scenes/Product/components/DetailProduct';
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
