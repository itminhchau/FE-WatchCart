import Header from 'components/Header';
import { Route, Routes } from 'react-router-dom';
import Cart from 'scenes/Cart';
import Contact from 'scenes/Contact';
import ShipDetailForm from 'scenes/form/ShipDetailForm';
import Home from 'scenes/Home';
import Product from 'scenes/Product';
import DetailProduct from 'scenes/Product/components/DetailProduct';
import ItemProduct from 'scenes/Product/components/ItemProduct';

function App() {
  return (
    <div className="App container mx-auto mb-2">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<DetailProduct />} />
      </Routes>
    </div>
  );
}

export default App;
