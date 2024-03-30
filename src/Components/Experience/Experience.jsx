import React from 'react'
import "./Experience.css"
import Tackle from "../../img/t-logo.jpg"
import Anasoft from "../../img/anasoft.jpg"
import Global from "../../img/global.jpg"
import { useContext } from "react";
import { themeContext } from '../../Context';
import { motion } from "framer-motion"

const Experience = () => {
    const transition = {duration : 4, type: 'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="Experience" id='works' load="lazy">
        <h1><span className='my' style={{color:darkMode? "#fff": "",
            }}>MY</span>
            <span className='experience'>  EXPERIENCE</span>
        </h1>
    <div className="timeline">
        <div
        className="container left-container">
            <div className="text-box">
                <img src={Global} alt="" />
                <h2>Global Quest Technologies</h2>
                <h3>SWE Trainee, <small>   Oct-2023 </small></h3>
                <p>I'm excited to be one of the 10 selected trainees at Global Quest Technology, where I'm eager to embark on a journey of learning Java,Python Full Stack Development,refining my soft skills, and aptitude to fuel my growth in the tech industry.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>
        
        <div
        className="container right-container">
            <div className="text-box">
                <img src={Tackle} alt="" />
                <h2>Tackle-D Pvt. Ltd.</h2>
                <h3>UX/UI Designer, <small>  Aug,2023 - Sep,2023</small></h3>
                <p>During my internship at Tackle, I collaborated with a dynamic team of four to craft the user experience, design the user interface, and handle frontend development for an innovative INFO chat AI app..</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>
        <div className="blur e-blur" style={{top:"-2rem",left:"42rem", background: "#ABF1FF94"}}></div>
        <div
        className="container left-container anasoft">
            <div className="text-box">
                <img src={Anasoft} alt="" />
                <h2>Anasoft, Sullia.</h2>
                <h3>UX/UI Designer, <small>   May,2023 - Jun,2023 </small></h3>
                <p>During my time at Anasoft, I had the opportunity to work on the Shardaha PU College website, where I applied my skills in web design and development to create a user-friendly and visually appealing online platform for the college community and its stakeholders.</p>
                <span className='left-container-arrow'></span> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience