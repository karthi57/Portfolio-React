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
        <span >HELLO! , I AM </span>
           <span >KARTHIK</span>
          <span >
          I'm a Skilled Front-end Developer, with a strong focus on producing high quality & impactful digital experience.
           </span>
        </div>
        <div className="hire">
      
          {/* social icons */}
          <div className="intro-icons">
          <a href="https://github.com/karthi57"><img className='social' src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/karthik-r-web-developer/"><img className='social' src={LinkedIn} alt="" /></a>
          {/* <a href=""><img className='social' src={Instagram} alt="" /></a> */}
        </div>
        <Link to="contact" spy={true} smooth={true}>
           <button className="button intro-button">Hire me</button>
        </Link>
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