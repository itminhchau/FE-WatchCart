import Header from 'components/Header';
import ModalNav from 'components/Header/components/ModalNav';
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
    </div>
  );
}

export default App;
