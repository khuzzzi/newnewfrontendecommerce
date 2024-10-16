import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Error from './components/Error';
import Contact from './components/Contact';
import About from './components/About';
import Checkout from './components/Checkout';
import Cart from './components/Cart';
import Account from './components/Account';
import Wishlist from './components/Wishlist';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import Seller from "./components/Seller"
import SellerDashboard from './components/SellerDashboard';
import SellerLogin from './components/SellerLogin';
import Thanks from './components/Thanks';
import useFetchAllProducts from './hooks/useFetchAllProducts';
import useFetchClickedProduct from './hooks/useFetchClickedProduct';
import useFetchSellerProductsOnly from './hooks/useFetchSellerProductsOnly';
function App() {
  useFetchAllProducts()
  
  return (
    <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
      <Route path="/error" element={<Error/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About />} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/details/:id' element={<ProductDetails/>}/>
      <Route path='/sellersignup' element={<Seller/>}/> 
      <Route path='/sellerlogin' element={<SellerLogin/>}/>
      <Route path="/dashboard" element={<SellerDashboard/>}/>
      <Route path='/thanks' element={<Thanks/>}/>
    </Routes>
  </Router>
  )
}

export default App
