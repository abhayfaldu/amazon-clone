import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Home from './Home'


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default AllRoutes