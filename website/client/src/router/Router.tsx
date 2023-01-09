import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Clases from '../pages/Clases'
import Store from '../pages/Store'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import TheBox from '../pages/TheBox'

const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/thebox" element={<TheBox />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/clases" element={<Clases />} />
        <Route path="*" element={<Error />} />
      </Routes>
  )
}

export default Router
