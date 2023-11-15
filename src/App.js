
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ProjectCard from './Components/ProjectCard';
import About from './Components/About';
import Skills from './Components/Skills';
import { skills } from './Components/SkillsData';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <ProjectCard />
      <Skills skills={skills} /> {/* Pass the skillsData as a prop to Skills component */}
    </>
  );
}

export default App;
