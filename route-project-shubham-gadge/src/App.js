import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home'
import { AllProducts } from './Pages/AllProducts'
import { Product } from './Pages/Product'
import { Navbar } from './Components/Navbar';
import { NotFound } from './Components/NotFound';
import { ContactBox } from './Components/ContactBox';
import { About } from './Pages/About';
import { FAQ } from './Pages/FAQ';
import { Contact } from './Pages/Contact';
import { CartDrawer } from './Components/CartDrawer';

function App() {
  return (
    <div className='container'>
      <ContactBox />
      <Navbar />
      <CartDrawer />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/:category/:id' element={<AllProducts />} />
        <Route path='/:category/:id/:name/:type' element={<Product />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
