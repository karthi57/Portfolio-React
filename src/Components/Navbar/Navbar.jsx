import React from 'react'
import "./Navbar.css"


import Logo from "../../img/panda-logo.jpg"

// import Toggle from '../Toggle/Toggle';
import { Link } from "react-scroll";
import { motion } from "framer-motion"

const Navbar =()=>{
 return(
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    duration={15}
     className="n-wrapper">
        <div className="nav-left">
            <img src={Logo} alt="" />
            <div className="nav-name">Karthik</div>
            {/* <Toggle/> */}
        
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul className='items' style={{listStyleType:"none"}}>
                    <li> <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
              </li>
              <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
           
                </ul>
            </div>
            {/* <Link to="contact" spy={true} smooth={true}>
            <button className='button nav-button'>Contact Me</button>
            </Link> */}
            
        </div>
    </motion.div>
    

 );
}

export default Navbar;