import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './login';
// import Product_add from './product/product_add';
// import Product_edit from './product/product_edit';
import UserList from './UserList';
import ProductList from './ProductList';
import OrderList from './OrderList';
import BannerList from './BannerList';
import ServicesList from './ServicesList';
import FnqList from './FnqList';
// import ServicesAdd from './services/services_add';
// import ServicesEdit from './services/services_edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/banner-list" element={<BannerList/>} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/services-list" element={<ServicesList/>} />
          <Route path="/Fnq-list" element={<FnqList/>} />

          {/* <Route path="/productadd" element={<Product_add />} />
          <Route path="/edit/:id" element={<Product_edit />} />
          <Route path="/servicesadd" element={<ServicesAdd/>} />
          <Route path="/edits/:id" element={<ServicesEdit/>} /> */}
    
        </Routes>
    
    </BrowserRouter>
  </>
);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import NewMain from './componets/OrderList/newmain';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <NewMain/>
//   </>
// );
