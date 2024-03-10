import pro1 from "../../Images/download.jpg";
import pro2 from "../../Images/pro4.png";
import pro0 from "../../Images/pro1.png";
import pro5 from "../../Images/pro5.png";
import pro6 from "../../Images/Todo.png";
import mongo from "../../Images/mongologo.jpeg";
import reactLogo from "../../Images/reactlogo.png";
import phpLogo from "../../Images/phplogo.png";
import sqlLogo from "../../Images/mysqllogo.png";
import node from "../../Images/nodejs logo.png";
import express from "../../Images/expresslogo.png";
import bts from "../../Images/btlogo.png";


const ProjectData = [
  {
    imgsrc: pro1,
    title: "News Monkey",
    description:
      "Utilizing third-party APIs, our React-based platform offers instant access to diverse information, enhancing user experiences dynamically.",
    language: [reactLogo,bts],
    githubLink:"https://github.com/priyankalalkiya/Daily-News-From-NewsMonkey"
  },
  {
    imgsrc: pro0,
    title: "iNoteBook",
    description:
    "I led the design and development of a state-of-the-art MERN stack-driven full-stack note-taking online application.", 
     language: [reactLogo, mongo ,node , express, bts],
     githubLink: "https://github.com/priyankalalkiya/inotebook"
  },
  {
    imgsrc: pro6,
    title: "Organize Me",
    description:
    "A task management web app with seamless organization, integrated authentication, and profiles, along with creation and completion tracking features.",   
     language: [reactLogo, mongo ,node , express],
     githubLink:  "https://github.com/priyankalalkiya/toodoo"
  },
 
  {
    imgsrc: pro5,
    title: "Food Delivery Website",
    description:
    "Developed an online food delivery platform, ensuring smooth ordering and delivery experiences. Prioritized user satisfaction with intuitive design and efficient service management.",   
     language: [phpLogo, sqlLogo],
     githubLink:  "https://github.com/priyankalalkiya/Pizza-Website"
  },
  {
    imgsrc: pro2,
    title: "Inventory Management System",
    description:"Engineered a dynamic billing system enhancing accuracy  and improving customer satisfaction.",
    language: [phpLogo, sqlLogo,bts],
    githubLink:""
  },


];

export default ProjectData;
