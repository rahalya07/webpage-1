import React from 'react'
import '../Footer/Footer.css'
// import { IconContext } from 'react-icons';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter,FaGithub,FaFacebookF,}from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoRadioButtonOffOutline } from "react-icons/io5";
const Footer = () => {
  const style1={fontSize:"10px",marginRight:"6px"};
  const style2={marginRight:"15px",fontSize:"18px"}
  return (
    // <IconContext.Provider value={{marginRight:"40px",fontSize:"20px"}}>
    <div className='footerbox'>
              <div className='footer-container'>
               <div className='col1'>
               <p><IoRadioButtonOffOutline style={style1}></IoRadioButtonOffOutline>social media links</p>
               <ul>
                <li><FaGithub style={style2}></FaGithub>nourddine benyahya</li>
                <li><FaLinkedinIn style={style2}></FaLinkedinIn>nourddine benyahya</li>
                <li><FaTwitter style={style2}></FaTwitter>EedinNour</li>
                <li><FaPhoneVolume style={style2}></FaPhoneVolume>+212607-081298</li>
                <li><FaFacebookF style={style2}></FaFacebookF>nourddine ben</li>
              </ul>
               </div>
               <div className='col2'>
               <p><IoRadioButtonOffOutline style={style1}></IoRadioButtonOffOutline>sponsors</p>
               <ul>
                <li>Cisco - Amazon - Google -Azure - LinkedIn </li>
                <li>IBM -Facebook -Tesla - Appel -Microsoft</li>
                <li>Ofppt - 1337</li>
              </ul>
               </div>
               <div className='col3'>
               <p><IoRadioButtonOffOutline style={style1}></IoRadioButtonOffOutline>company</p>
               <ul>
                   <li>Login</li>
                   <li>Register</li>
                   <li>Register</li>
                   <li>Our Products</li>
              </ul>
               </div>
              </div>
              <div className='footerend'><p>A Fawectt book <br></br>
              Published by The Random House Publishing Group<br></br>
              Copyright © 2022 by nourddine<br></br>All rights reserved</p>
              </div>
    </div>
    // </IconContext.Provider>
  )
}

export default Footer