import Loader from "./Components/Loader/Loading"
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import "./App.css"

import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import Testimonial from "./Components/Testimonial/Testimonial";
import { useEffect, useState } from "react";

import Experience from "./Components/Experience/Experience";
import { motion } from "framer-motion";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  //loader state
  const [isLoading, setIsLoading] = useState(true);

  //async method to fetch fake data
  useEffect(()=>{
      const fetchFakeData = ()=>{
          setTimeout(()=>{
            setIsLoading(false)
          },40)
      }
      fetchFakeData();
  },[])

  //mouse follower
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  console.log(mousePosition)

  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", handleScroll);



    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15
    },
    text: {
      height: 250,
      width: 250,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }

  }


  const textEnter = () => {
    setCursorVariant("text")

    // Check the background color and set cursor color accordingly
    if (backgroundColor === "new-color") {
      document.body.style.cursor = "white";
    } else {
      document.body.style.cursor = "black";
    }
  };

  const textLeave = () => setCursorVariant("default");


  // Define a threshold to change the background color
  const threshold = 1400;
  const backgroundColor = scrollPosition > threshold ? "new-color" : "default-color";

  return (
    isLoading ? <Loader/> : (<div className={`App ${backgroundColor}`} >

    <motion.div
      className='cursor'
      variants={variants}
      animate={cursorVariant}
    />

    <Navbar onMouseEnter={textEnter} onMouseLeave={textLeave} />
    <Intro onMouseEnter={textEnter} onMouseLeave={textLeave} />
    <Services onMouseEnter={textEnter} onMouseLeave={textLeave} />
    <Experience />
    <Contact />
    {/* <Testimonial /> */}
    <Footer />
  </div>
  )

    
  )

}

export default App;
