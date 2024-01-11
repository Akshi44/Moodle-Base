import React from 'react'
import './Footer.css'
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import logo from '../../assests/iiitlogo.png'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-logo-left'>
        <img src={logo} alt='logo' className='footer-logo'/>
      </div>
      <div className='footer-left'>
        <div className='footer-left-heading'>
            Contact Us
        </div>
        <div className='footer-left-content'>
            C/O Maulana Azad National Institute of Technology (MANIT), Bhopal Room No TC-105, New Teaching Block, MANIT, Bhopal, MP, India
            <div>Pin code : 462003</div>
            <div>Phone : 0755-4051950 </div>
            <div>Email: info@iiitbhopal.ac.in </div>
        </div>
        <div className='icons' style={{fontSize:'20px',marginLeft:'-10px'}}> 
        &nbsp;Follow Us :
          <GrLinkedin className='icon1' onClick={() => window.open('https://www.linkedin.com/in/tnp-iiitbhopal/', '_blank')}/>
          <FaSquareXTwitter  className='icon2' onClick={() => window.open('https://twitter.com/iiitbhopal', '_blank')}/>
          <FaSquareInstagram  className='icon3' onClick={() => window.open('https://www.instagram.com/iiitbhopal_official/', '_blank')}/>
          <ImFacebook2  className='icon4' onClick={() => window.open('https://www.facebook.com/iiitbhopalofficial', '_blank')}/>
        </div>
      </div>
      <div className='footer-right'>
        <div className='footer-right-heading'>
            Help Desk
        </div>
        <div className='footer-right-content'>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',color:'rgb(14, 8, 97)'}}>Coordinator</div>
            <div>Dr. Sonal Chandel </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',color:'rgb(14, 8, 97)'}}>Co-Coordinator </div>
            <div>Mr. Ashok Gogulotu (+91 9402168293 )</div>
            <br/>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',color:'rgb(14, 8, 97)'}}>Student Coordinator </div>
            <div>Akshita Agrawal (CSE)</div>
            <div>Pratyaksha Naiwalkar (CSE)</div>

        </div>
       
      </div>
    </div>
  )
}
