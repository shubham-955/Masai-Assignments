import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home'
import { AllProducts } from './Pages/AllProducts'
import { Product } from './Pages/Product'
import { Navbar } from './Components/Navbar';
import { NotFound } from './Components/NotFound';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='products' element={<AllProducts />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
