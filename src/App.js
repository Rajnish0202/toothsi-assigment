import './App.css';
import { Routes, BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import Product from './pages/product';
import Cart from './pages/cart';
import ThankYou from './pages/thankYou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Product />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/thanks' element={<ThankYou />} />
        <Route exact path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default App;
