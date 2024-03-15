import './App.css';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import men_banner from './components/Asserts/banner_mens.png';
import women_banner from './components/Asserts/banner_women.png';
import kids_banner from './components/Asserts/banner_kids.png';

function App() {
  return (
    <div>
     <BrowserRouter basename="/madhukarreddy5/Madhukarreddys-E-commerce">
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginSignup />} /> {/* Fixed typo here */}
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/Women' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/Kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productid' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
