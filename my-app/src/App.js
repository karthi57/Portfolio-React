import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import "./App.css"
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import Testimonial from "./Components/Testimonial/Testimonial";
import { useContext } from "react";
import { themeContext } from "./Context";
import Experience from "./Components/Experience/Experience";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
      background: darkMode ? "#212121" : "",
      color: darkMode ? "white" : "",
    }}>
     
     <Navbar/>
     <Intro />
     <Services/>
     <Experience/>
     <Contact/>
     {/* <Testimonial /> */}
     <Footer/>
    </div>
  );
}

export default App;
