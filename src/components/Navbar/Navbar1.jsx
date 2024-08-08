import React from 'react'
import '../Navbar/Navbar.css'
import { FaSearch }  from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menu,setmenu]=useState("home")
  return (
    <div className="nav">
        <div className="left">
            <Link to="/"onClick={()=>{setmenu("home")}} className={menu==="home"?"act":"inact"}>Home</Link>
        </div>
          <div className="rightmenu">
            <ul>
                <li><Link to="/About" onClick={()=>{setmenu("About")}} className={menu==="About"?"Act":""}>About</Link></li>
                <li><Link to="/Contact" onClick={()=>{setmenu("Contact")}} className={menu==="Contact"?"Act":""}>Contact</Link></li>
                <li><Link to="/Apply" onClick={()=>{setmenu("Apply")}} className={menu==="Apply"?"Act":""}>Apply now</Link></li>
            </ul>
             <div className='search'>
                <input type="text" placeholder='search'/>
                <button className='search-button'><FaSearch></FaSearch></button>
            </div>
           
         </div>
    </div>
  )
}
export default Navbar