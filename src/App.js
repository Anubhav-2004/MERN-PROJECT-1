import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Experience from './components/experience.jsx';
import Skills from './components/skills.jsx';

function App() {
  return(
  <>
    <Navbar/>
    <div className="container">
    <Home/>
    <Experience/>
    <Skills/>
    </div> 
  </>

  );
 
}

export default App;
