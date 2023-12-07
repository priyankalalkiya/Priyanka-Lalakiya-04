
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ProjectCard from './Components/ProjectCard';
import About from './Components/About';
import Skills from './Components/Skills';
import { skills } from './Components/SkillsData';
import Contectline from './Components/Contectline';
import Contact from './Components/Contect';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills skills={skills} /> 
      <Contectline/>
      <ProjectCard />
      <Contact/>
     
    </>
  );
}

export default App;
