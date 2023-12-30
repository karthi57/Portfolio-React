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
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Intro'>
      <div className="intro-left" >
        <div className="intro-name"  >
        <span style={{ color: darkMode ? "white" : "" }}>Hello!,   I am </span>
           <span >Karthik</span>
          <span style={{ color: darkMode ? "white" : "" }}>
          As a  Front-end Developer, I bring a fresh perspective, an eye for detail, and a passion for creating engaging digital experiences. My strengths lie in leveraging creativity, analytical thinking, and cooperative problem-solving to actualize designs that align seamlessly with development goals. 
           <bold> And what I might lack in skills I make up for with my determination to learn.</bold></span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
           <button className="button intro-button"   
            style={{background:darkMode ? "#212121" : "", }}>Hire me</button>
        </Link>
          {/* social icons */}
          <div className="intro-icons">
          <a href="https://github.com/karthi57"><img className='social' src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/karthik-r-web-developer/"><img className='social' src={LinkedIn} alt="" /></a>
          {/* <a href=""><img className='social' src={Instagram} alt="" /></a> */}
        </div>
      </div>
      <div className="intro-right">
         {/* <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img 
        // intial = {{left:'-36%'}}
        // whileInView={{left:'26%'}}
        // transition={transition}
        src={glassesimoji} alt="" /> */}
       
          <div className="wrapper" show >
         
         <Spline  scene="https://prod.spline.design/kZ7S3s-DQ4ekB8Sl/scene.splinecode" />
         </div>
         </div>
        {/* <FloatinDiv/> */}
        {/* <div  style={{top:'0px',left:'60%', width:'40%'}}>
        <Floatingdiv img={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{top:'18rem',left:'0rem'}}>
        <Floatingdiv img={thumbup} txt1="UX/UI" txt2="Designer" />
        </div> */}
        {/* <div className="blur" style={{background: "rgb(238, 210, 255)"}}>

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "50rem",
            width: "20rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>

        </div> */}
      </div>
   
  )
}

export default Intro;