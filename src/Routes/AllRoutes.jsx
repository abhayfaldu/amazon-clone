import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path='/checkout'
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default AllRoutes