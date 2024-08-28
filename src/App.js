import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Experience from './components/experience.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/project.jsx';
import Contact from './components/contact.jsx';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
  Aos.init();
  }, [])
  
  return(
  <>
    <Navbar/>
    <div className="container">
    <Home/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div> 
  </>

  );
 
}

export default App;
