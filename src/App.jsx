import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart'

import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!isLogin ? <LoginPage setIsLogin={setIsLogin} /> : <Navigate to="/" />} />
        <Route path="/" element={isLogin ? <Layout setIsLogin={setIsLogin} /> : <Navigate to="/login" />} >
          <Route index element={<Hero />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<Navigate to={isLogin ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;