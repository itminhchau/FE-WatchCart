import Header from 'components/Header';
import { Route, Routes } from 'react-router-dom';
import ShipDetailForm from 'scenes/form/ShipDetailForm';
import Home from 'scenes/Home';
import Product from 'scenes/Product';

function App() {
  return (
    <div className="App container mx-auto mb-2">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
