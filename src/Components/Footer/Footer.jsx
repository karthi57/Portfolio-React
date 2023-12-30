import React from "react";
import "./Footer.css";
// import Wave from "../../img/wave.png";

import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div class="waves">
          <div class="wave" id="wave1">
                <div className="f-content">
                    <div className="f-icons">
                         <a className="social" href="https://www.linkedin.com/in/karthik-r-web-developer/"><Linkedin color="white" size={"3rem"} /></a>
                         <a className="social" href="https://github.com/karthi57"><Gitub color="white" size={"3rem"} /></a>
                         <span className="email">
                            <br /><br />
                         <p className="copy">&copy;2023 All Rights Reserved</p>
                         <p className="credit">Designed and Developed by Karthik</p>
                         </span>
                    </div>
               </div>
           </div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    
    </div>
      
    </div>
  );
};

export default Footer;
