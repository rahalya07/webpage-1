import React from 'react'
import '../Aboutpg/Aboutpg.css'
import whatimg from '../../images/whatimg.jpg'
import {FaRegAddressCard } from "react-icons/fa";
import { RiCheckDoubleFill } from "react-icons/ri";
const Aboutpg = () => {
  return (
    <div className='Aboutpg-container'>
         <div className='aboutdesc'>
              <h4>About us</h4>
              <p>Buck Mason—a menswear brand—doesn’t shy away from images to showcase the soul and origins of its California roots. It’s a great example of how 
you can include visuals to tell a story and create a brand identity that goes beyond the usual wall of text.<br></br>

One of the best parts of Buck Mason’s About Us page? Its CTA: “Come Have A Drink.” It’s relatable, it’s playful, and it sounds like its target audience.<br></br>

Don’t ignore your CTA as a key part of your About Us page that can add to your brand identity. It’s a great opportunity to convey what your brand is all about. </p>
<button className='contactbtn'>Contact</button>
         </div>

        <div className='teamsection'>
        <h4>Our Team</h4>
        </div>
        <div className='teamcontent'>
            <img src={whatimg} alt="" />
            <div className='teamwork'>
                <div className='teamname'>
                <FaRegAddressCard style={{fontSize:"30px"}}/>
                <h6>
                NOURDDINE BENYHAYA</h6>
                </div>
                <ul>
                    <li><RiCheckDoubleFill />hey im nourddine benyahaya  </li>
                    <li><RiCheckDoubleFill />develeper full stuck</li>
                    <li><RiCheckDoubleFill />UX/UI desiner</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Aboutpg