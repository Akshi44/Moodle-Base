import React from 'react'
import { BrowserRouter } from "react-router-dom";
import AllRoutes from './Allroutes';
export default function App() {
  return (
    <div>
      <BrowserRouter>
          <AllRoutes/>
      </BrowserRouter>
    </div>
  )
}