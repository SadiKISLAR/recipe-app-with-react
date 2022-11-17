import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyles } from '../components/globalStyles/GlobalStyles'
import Navbar from '../components/nav/Navbar'
import About from '../pages/about/About';
import Detail from '../pages/detail/Detail';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='about' element={<PrivateRouter />} >
          <Route path='' />
        </Route>
        <Route path='detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter
