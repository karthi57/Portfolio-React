import React from "react";
import heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import "./Services.css";
import Card from "../Card/Card";
import Resume from "../Services/Resume.pdf";
import { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = ({ onMouseEnter, onMouseLeave }) => {
  const transition = { duration: 4, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "#fff" : "" }}>MY AWESOME</span>
        <span>SERVICES</span>

        <span style={{ color: darkMode ? "#fff" : "" }} onMouseEnter={onMouseEnter} onMouseLeave= {onMouseLeave}>
          Crafting seamless and innovative web solutions to elevate your online
          presence and user experience.
        </span>


        <a href={Resume} download>
          {/* <button className='button s-button'>Download CV</button> */}
          <button class="download-button">
            <div class="docs">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Download CV
            </div>
            <div class="download">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
          </button>
        </a>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: "20rem" }}
          whileInView={{ left: "15rem" }}
          transition={{ transition }}
          style={{ left: "20rem" }}
        >
          <Card
            emoji={heartemoji}
            heading={"Design"}
            details={"Figma, Photopea, Dora, AdobeXD, Spline"}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "-3rem" }}
          initial={{ left: "-10rem" }}
          transition={{ transition }}
          style={{ top: "12rem", left: "-6rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"Html, Css, JavaScript, React, Tailwind Css"}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "13.5rem" }}
          initial={{ left: "30rem" }}
          transition={{ transition }}
          style={{ top: "21rem", left: "20rem" }}
        >
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
  );
};

export default Services;
