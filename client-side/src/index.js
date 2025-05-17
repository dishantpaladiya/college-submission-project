// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { CartProvider } from 'react-use-cart';
// import Home from './Home';
// import Login from './Login';
// import Products from './Products';
// import Product_view from './product/product_view';
// import Product_add from './product/product_add';
// import Product_edit from './product/product_edit';
// import Cart from './Cart';
// import Banner_view from './banner/banner_view';
// import Banner_add from './banner/banner_add';
// import Banner_edit from './banner/banner_edit';
// import Banner from './Banner';
// import OrderList from './OrderList';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLogin") === "yes";
//     setIsLoggedIn(loginStatus);
//   }, []);

//   const handleLoginSuccess = () => {
//     localStorage.setItem("isLogin", "yes");
//     setIsLoggedIn(true);
//   };

//   return (
//     <BrowserRouter>
//       <CartProvider>
//         {/* {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}
//         {isLoggedIn && ( */}
//           <Routes>
//             <Route path='/Home' element={<Home />} />
//             <Route path='/loginform' element={<Login/>} />
//             <Route path="/" element={<Home />} />
//             <Route path="/viewdata" element={<Product_view />} />
//             <Route path="/productadd" element={<Product_add />} />
//             <Route path="/edit/:id" element={<Product_edit />} />
//             <Route path="/product" element={<Products />} />
//             <Route path="/bviewdata" element={<Banner_view />} />
//             <Route path="/badd" element={<Banner_add/>} />
//             <Route path="/bedit/:id" element={<Banner_edit/>} />
//             <Route path="/banner" element={<Banner/>} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/order-list" element={<OrderList />} />
//           </Routes>
//         {/* )} */}
//       </CartProvider>
//     </BrowserRouter>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Home from './Home';
import Products from './Products';
import Product_view from './product/product_view';
import Product_add from './product/product_add';
import Product_edit from './product/product_edit';
import Cart from './Cart';
import Banner_view from './banner/banner_view';
import Banner_add from './banner/banner_add';
import Banner_edit from './banner/banner_edit';
import Banner from './Banner';
import OrderList from './OrderList';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/viewdata' element={<Product_view />} />
        <Route path='/productadd' element={<Product_add />} />
        <Route path='/edit/:id' element={<Product_edit />} />
        <Route path='/product' element={<Products />} />
        <Route path='/bviewdata' element={<Banner_view />} />
        <Route path='/badd' element={<Banner_add />} />
        <Route path='/bedit/:id' element={<Banner_edit />} />
        <Route path='/banner' element={<Banner />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order-list' element={<OrderList />} />
      </Routes>
    </CartProvider>
  </BrowserRouter>
);
