import React from 'react'
import About from './pages/About/About'
import Getstart from './pages/Getstart/Getstart'
import { Routes, Route } from "react-router-dom";
const AllRoutes = () => {
  return (
    <Routes>
        <Route  path="/" element={<About />}/>
        <Route  path="/moodle-services" element={<Getstart />}/>
    </Routes>
  )
}
export default AllRoutes
