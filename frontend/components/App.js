import React, { Suspense, lazy } from 'react';
import { BrowserRouter ,Link, Routes, Route } from 'react-router-dom';
import Customer from './customer/Customer';
import Trader from './trader/Trader';

const App = () => (
    <div>
        <h1>🛒 Shoping Cart</h1>
        <BrowserRouter>
    <div>
     
        <button><Link  to="/customer">Customer</Link></button>
        <span> | </span>
        <button><Link  to="/trader">Trader</Link></button>
     

      <hr/>

     <Routes>
      <Route  path="/customer" element={<Customer/>}/>
      <Route  path="/trader" element={<Trader/>}/>
      </Routes>
    </div>
  </BrowserRouter>
    </div>
  );



export default App;