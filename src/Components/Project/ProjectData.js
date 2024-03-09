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
    title: "News Website",
    description:
      "Starting the process of developing an API-driven React website opens up a world of infinite possibilities for improving your website's functionality and providing users with real-time data and information",
    language: [reactLogo,bts],
    githubLink:"https://github.com/priyankalalkiya/Daily-News-From-NewsMonkey"
  },
  {
    imgsrc: pro0,
    title: "inoteBook",
    description:
    "I led the design and development of a state-of-the-art MERN stack-driven full-stack note-taking online application.This transformed note-taking and administration with unmatched effectiveness.", 
     language: [reactLogo, mongo ,node , express, bts],
     githubLink: "https://github.com/priyankalalkiya/inotebook"
  },
  {
    imgsrc: pro2,
    title: "Inventory Management System",
    description:"Invented a dynamic billing system that generates invoices automatically, improving accuracy, minimizing errors, and providing a superior customer experience.",
    language: [phpLogo, sqlLogo,bts],
    githubLink:""
  },
  {
    imgsrc: pro5,
    title: "Food Delivery Website",
    description:
    "Developed a secure and user-friendly authentication system that streamlines the login and registration process for improved user convenience and data security.",   
     language: [phpLogo, sqlLogo],
     githubLink:  "https://github.com/priyankalalkiya/Pizza-Website"
  },
  {
    imgsrc: pro6,
    title: "OrganizeMe",
    description:
    "Developed a secure and user-friendly authentication system that streamlines the login and registration process for improved user convenience and data security.",   
     language: [reactLogo, mongo ,node , express],
     githubLink:  "https://github.com/priyankalalkiya/toodoo"
  },

];

export default ProjectData;
