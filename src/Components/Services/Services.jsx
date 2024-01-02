import React from 'react'
import heartemoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import './Services.css'
import Card from '../Card/Card'
import Resume from "../Services/Resume-.pdf"
import { useContext } from "react";
import { themeContext } from '../../Context';
import { motion } from "framer-motion"

const Services = ({ onMouseEnter, onMouseLeave }) => {
    const transition = {duration : 4, type: 'spring'}
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="services"
   id='services'>
    {/* left side */}
    <div className="awesome">
        <span style={{color:darkMode? "#fff": "",
    }}>My Awesome</span>
        <span>Services</span>
        <span style={{color:darkMode? "#fff": "",
    }}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>I've successfully contributed to diverse tech projects, harnessing skills in HTML, CSS, JavaScript, React, and Python to deliver high-quality services. My dedication to excellence ensures that every project I undertake is executed with precision and professionalism.</span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>

        
    </div>

    {/* right side */}
    <div className="cards">
        <motion.div
        initial={{left: '20rem'}}
        whileInView={{left:'15rem'}}
        transition={{transition}}

        style={{left:"20rem"}}>
        <Card
             emoji = {heartemoji} 
             heading = {"Design"}
             details = {'Figma, Photopea, Dora, AdobeXD, Spline'}
        />
        </motion.div>
        <motion.div
        whileInView={{left:'-3rem'}}
        initial={{left: '-10rem'}}
        transition={{transition}}
        style={{top:'12rem', left:'-6rem'}}>
        <Card
             emoji={Glasses}
             heading={"Developer"}
             details={'Html, Css, JavaScript, React, Tailwind Css'}
          />
      </motion.div>
        <motion.div
        whileInView={{left:'13.5rem'}}
        initial={{left: '30rem'}}
        transition={{transition}}
        style={{top:"21rem", left:'20rem'}}>
        <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={
              "Persona,Journey-Maps,Wireframming, Prototyping,User-centric approaches"
            }
            />
        </motion.div>
       
    </div>
   </div>
  )
}

export default Services