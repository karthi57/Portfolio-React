import React, { useState } from "react";
import "./Intro.css";




import Spline from "@splinetool/react-spline";

import { motion } from "framer-motion";

const Intro = ({ onMouseEnter, onMouseLeave }) => {
  

  return (
    <div className="Intro">
      <div className="intro-left">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          duration={20}
          className="intro-name"
        >
          <span>HELLO! , I AM </span>
          <span>KARTHIK</span>
          <span
            initial={{ opacity: 0 }}
            whileinview={{ opacity: 1 }}
            duration={15}
          >
          </span>
        </motion.div>
        <div className="hire">
          <div class="scrolldown">
            <div class="chevrons">
              <div class="chevrondown"></div>
              <div class="chevrondown"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-right">
        <div className="wrapper">
        <Spline loading="eager" scene="https://prod.spline.design/kZ7S3s-DQ4ekB8Sl/scene.splinecode" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
