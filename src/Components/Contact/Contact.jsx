import React, { useState } from 'react'
import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();

    const [ done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lshpspa', 'template_8y34yd5', form.current, 'ah9IcKvWtA50gtjw6')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
  
    return (
        <div className="contact-form" id="contact">
          {/* left side copy and paste from work section */}
          <div className="w-left">
            <div className="awesome">
              {/* darkMode */}
              <span style={{color:"rgb(60, 57, 57)"}}>GET IN TOUCH</span>
              <span>CONTACT ME</span>
              <div
                className="blur s-blur2"
                style={{ background: "#ABF1FF94"}}
              ></div>
            </div>
          </div>
          {/* right side form */}
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" className="user"  placeholder="Name"/>
              <input type="email" name="user_email" className="user" placeholder="Email"/>
              <textarea name="message" className="user" placeholder="Message"/>
              <input type="submit" value="Send" className="button"/>
              <span>{done && "Thank YOU for Contacting me"}</span>
              <div
                className="blur s-blur1"
                style={{ background: "var(--purple)" }}
              ></div>
            </form>
          </div>
        </div>
      );
    };
    
   
  


export default Contact