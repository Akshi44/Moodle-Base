import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Middle from '../../components/Middle/Middle'
import Footer from '../../components/Footer/Footer'
import collage from '../../assests/iiitclg.jpg'
export default function About() {
  return (
    <div>
      <Navbar/>
      <div style={{marginTop:"50px"}} >
        <img src={collage} alt='collage' style={{width:'100%',height:'300px' }} className='collageimage'/>
      </div>
      <Middle/>
      <Footer />
    </div>
  )
}
 