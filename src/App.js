import Header from 'components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from 'scenes/Home';
import Product from 'scenes/Product';
import DetailProduct from 'scenes/Product/components/DetailProduct';

function App() {
  return (
    <div className="App container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <DetailProduct />
    </div>
  );
}

export default App;
