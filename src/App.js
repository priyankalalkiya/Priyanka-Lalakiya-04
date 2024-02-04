import "./App.css";

import Home from "./Components/Home/Home";
import ProjectCard from "./Components/Project/ProjectCard";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import { skills } from "./Components/Skills/SkillsData";
import Contectline from "./Components/Contectline";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
   <Navbar/>
      <Home />
      <About />
      <Skills skills={skills} />
      <Contectline />
      <ProjectCard />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
