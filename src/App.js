import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import { Toaster } from 'react-hot-toast';
import Shop from './Components/Home/Shop/Shop';
import ServicesDetails from './Components/Home/ServicesDetails/ServicesDetails';
import Cart from './Components/Home/Cart/Cart';
import LoginPage from './Components/allAuth/LoginPage';
import ResetPassword from './Components/allAuth/ResetPassword';
import PrivateRoute from './Components/allAuth/PrivateRoute';

import Profile from './Components/Dashboard/Profile/Profile';
import RegisterPage from './Components/allAuth/RegisterPage';
import AddProduct from './Components/Dashboard/AddService/AddService';
import ProductList from './Components/Dashboard/ProductList/ProductList';

export const UserContext = createContext();

function App() {
  const [product, setProduct] = useState([])
  const [details, setDetails] = useState({})
  const [cartItems, setCartItems] = useState(() => {
    const item = JSON.parse(localStorage.getItem("items") || "[]")
    return item
  })
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <UserContext.Provider value={{ product, setProduct, details, setDetails, cartItems, setCartItems }}>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route exact path="profile" element={<>
              <div className="page-heading">
                <h2>Profile</h2>
              </div>
              <div id="page-content">
                <Profile />
              </div>
            </>} />
            <Route path="addProduct" element={<>
              <div className="page-heading">
                <h2>Add Product</h2>
              </div>
              <div id="page-content">
                <AddProduct />
              </div>
            </>} />
            <Route path="productList" element={<>
              <div className="page-heading">
                <h2>Product List</h2>
              </div>
              <div id="page-content">
                <ProductList />
              </div>
            </>} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/services-details/:id" element={<ServicesDetails />} />
          <Route path="/cart" element={<PrivateRoute>
            <Cart />
          </PrivateRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/s" element={<RegisterPage />} />
          {/* <Route path="/" element={} /> */}
          <Route path="/forget-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
