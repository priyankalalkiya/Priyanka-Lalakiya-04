import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ProjectCard from "./Components/ProjectCard";
import About from "./Components/About";
import Skills from "./Components/Skills";
import { skills } from "./Components/SkillsData";
import Contectline from "./Components/Contectline";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
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
