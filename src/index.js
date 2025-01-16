import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import HomePage from './Landing_Page/home/HomePage';
import About from './Landing_Page/about/About';
import Signup from './Landing_Page/signup/Signup';
import Product from './Landing_Page/products/Product';
import Pricing from './Landing_Page/pricing/PricingPage';
import Support from './Landing_Page/support/SupportPage';
import Navbar from './Landing_Page/Navbar';
import Footer from './Landing_Page/Footer';
import NotFound from './Landing_Page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/about" element={<About />} />
      <Route path='/products' element={<Product/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/support' element={<Support/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    <Footer/>
  
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

