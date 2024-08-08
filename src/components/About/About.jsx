import React from 'react'
import Navbar from '../Navbar/Navbar1';
import Aboutpg from '../Aboutpg/Aboutpg';
import '../About/About.css'
import Footer from '../Footer/Footer';
const About = () => {
  return (
    <div className='abt'>
         <Navbar></Navbar>
         <Aboutpg></Aboutpg>
         <Footer></Footer>
    </div>
  )
}

export default About