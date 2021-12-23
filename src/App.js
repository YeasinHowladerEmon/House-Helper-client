import { createContext, lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';
import Shop from './Components/Home/Shop/Shop';
import Cart from './Components/Home/Cart/Cart';
import ResetPassword from './Components/allAuth/ResetPassword';
import PrivateRoute from './Components/allAuth/PrivateRoute';

import Profile from './Components/Dashboard/Profile/Profile';
import AddProduct from './Components/Dashboard/AddService/AddService';
import ProductList from './Components/Dashboard/ProductList/ProductList';
import ServicesDetail from './Components/Home/ServicesDetail/ServicesDetail';
import ProductDetail from './Components/Home/ProductDetail/ProductDetail';
import { ToastContainer } from 'react-toastify';

import Contact from './Components/Home/Contact/Contact';
import Checkout from './Components/Home/Checkout/Checkout';
import CustomerOrderLists from './Components/Dashboard/CustomerOrderList/CustomerOrderLists';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './Components/allAuth/AdminRoute';
import axios from 'axios';
import { useAuth } from './Hooks/useAuth/useAuth';
import ServiceContainer from './Components/Home/Services/ServiceContainer/ServiceContainer';
import LoadingSpinner from './Components/Home/LoadingSpinner/LoadingSpinner';
const Home = lazy(() => import("./Components/Home/Home/Home"));
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard/Dashboard'));
const LoginPage = lazy(() => import('./Components/allAuth/LoginPage'))
const RegisterPage = lazy(() => import(('./Components/allAuth/RegisterPage')));

export const UserContext = createContext();

function App() {
  const [product, setProduct] = useState([])
  const [details, setDetails] = useState({})
  const [productDetails, setProductDetails] = useState({})
  const [admin, setAdmin] = useState(false)
  const { user } = useAuth()

  const [cartItems, setCartItems] = useState(() => {
    const item = JSON.parse(localStorage.getItem("items") || "[]")
    return item
  })
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartItems));
  }, [cartItems])

  useEffect(() => {
    axios.get(`http://localhost:5000/usersAdmin?email=${user.email}`)
      .then(res => {
        console.log(res.data.admin);
        setAdmin(res.data.admin)
      })
  }, [user.email])

  return (
    <UserContext.Provider value={{ product, setProduct, details, setDetails, cartItems, setCartItems, productDetails, setProductDetails, admin }}>
      <BrowserRouter>
        <Toaster />
        <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route exact path="profile" element={<>
                <div className="page-heading">
                  <h2>Profile</h2>
                </div>
                <div id="page-content">
                  <Profile />
                </div>
              </>} />
              <Route path="customerOrderList" element={<>
                <div className="page-heading">
                  <h2>Order List</h2>
                </div>
                <div id="page-content">
                  <CustomerOrderLists />
                </div>
              </>} />
              <Route path="addProduct" element={<AdminRoute><>
                <div className="page-heading">
                  <h2>Add Product</h2>
                </div>
                <div id="page-content">
                  <AddProduct />
                </div>
              </></AdminRoute>} />
              <Route path="productList" element={<AdminRoute> <>
                <div className="page-heading">
                  <h2>Product List</h2>
                </div>
                <div id="page-content">
                  <ProductList />
                </div>
              </> </AdminRoute>} />
              <Route path="makeAdmin" element={<AdminRoute> <>
                <div className="page-heading">
                  <h2>Make Admin</h2>
                </div>
                <div id="page-content">
                  <MakeAdmin />
                </div>
              </> </AdminRoute>} />
            </Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="/product-Details/:pId" element={<ProductDetail />} />
            <Route path="/service-Details/:id" element={<ServicesDetail />} />
            <Route path="/cart" element={<PrivateRoute>
              <Cart />
            </PrivateRoute>} />
            <Route path="/checkout" element={<PrivateRoute>
              <Checkout />
            </PrivateRoute>} />
            {/* <Route path="/appointment" element={<Appointment/>}/> */}
            {/* <Route path="/" element={< />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegisterPage />} />
            <Route path="/forget-password" element={<ResetPassword />} />
            <Route path="/service-container" element={<ServiceContainer />} />
          </Routes>
        </Suspense>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
