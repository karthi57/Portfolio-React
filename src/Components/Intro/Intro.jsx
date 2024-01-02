import React from 'react'
import "./Intro.css"

// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
// import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";

import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
// import Instagram from "../../img/instagram.png";
// import Floatingdiv from '../FloatingDiv/Floatingdiv';
import Spline from '@splinetool/react-spline';
import { useContext } from "react";
import { themeContext } from '../../Context';
import { Link } from "react-scroll";




// import { motion } from 'framer-motion';

// const transition = {duration: 2, type :'spring'}
const Intro = ({ onMouseEnter, onMouseLeave }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Intro'>
      <div className="intro-left" >
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="intro-name"  >
        <span >Hello!,   I am </span>
           <span >Karthik</span>
          <span >
          As a Front-end Developer, I bring a fresh outlook, keen attention to detail, and a love for creating enjoyable online experiences. I thrive on blending creativity with problem-solving to bring designs to life seamlessly. Let's elevate your digital presence together!
           </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
           <button className="button intro-button">Hire me</button>
        </Link>
          {/* social icons */}
          <div className="intro-icons">
          <a href="https://github.com/karthi57"><img className='social' src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/karthik-r-web-developer/"><img className='social' src={LinkedIn} alt="" /></a>
          {/* <a href=""><img className='social' src={Instagram} alt="" /></a> */}
        </div>
      </div>

      <div className="intro-right">
        
       
          <div className="wrapper">
         
          <Spline scene="https://prod.spline.design/kZ7S3s-DQ4ekB8Sl/scene.splinecode" />
         </div>
         </div>
       
      </div>
   
  )
}

export default Intro;