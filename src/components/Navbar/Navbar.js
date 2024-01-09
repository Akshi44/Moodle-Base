import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import  logo from '../../assests/iiitlogo.png'
export default function Navbar() {
  return (
    <nav className='main-nav'>  
      <div className="navbar "> 
        <Link to='/' className='nav-logo'><img src={logo} width='50px' height='50px' alt="logo"/></Link>
        <Link to='https://shiksha.iiitbhopal.ac.in/login/index.php' className='nav-item nav-btn'>Moodle Register</Link>
      </div>
    </nav>
  )
}
