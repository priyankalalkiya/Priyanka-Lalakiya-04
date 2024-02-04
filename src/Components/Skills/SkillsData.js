
import PHPImage from '../../Images/phplogo.png';
import netImage from '../../Images/.netlogo.png';
import laravelImage from '../../Images/laravellogo.png';
import cImage from '../../Images/clogo.png';
import cppImage from '../../Images/cpplogo.png';
import javaImage from '../../Images/javalogo.png';
import mongoImage from '../../Images/mongologo.jpeg';
import fierbaselogo from '../../Images/fierbaselogo.png';
import oracalImage from '../../Images/oracallogo.png';
import mysqlImage from '../../Images/mysqllogo.png';
import nodeImage from '../../Images/nodejs logo.png';
import jsImage from '../../Images/jslogo.png';
import htmlImage from '../../Images/htmllogo.png';
import cssImage from '../../Images/csslogo.png';
import btImage from '../../Images/btlogo.png';
import reactIamge from '../../Images/reactlogo.png';
import expressImage from '../../Images/expresslogo.png';
import github from '../../Images/github.png';


const skills = [

  {
    title: "Frontend",
    skills: [
     
      {
        name: "HTML",
        image:htmlImage
      },
      {
        name: "CSS",
        image: cssImage        
      },
     
     
      {
        name: "Bootstrap",
        image:btImage
      },
      
     
      {
        name: "React Js",
        image: reactIamge
      },
    
    ],
  },
    {
      title: "Backend",
      skills: [
        {
          name: "Node Js",
          image: nodeImage
        },
        {
          name: "Express Js",
          image: expressImage
        },
        {
          name: "PHP",
          image:
           PHPImage
        },
        {
          name: "Mongo DB",
          image:mongoImage
        },
        {
          name: "SQL",
          image:
            mysqlImage
        },
        {
          name: "Firebase",
          image:
          fierbaselogo
        },
       
      ],
    },

    {
      title: "Others",
      skills: [
        {
          name: "java",
          image:javaImage
        },
        {
          name: "JavaScript",
          image:jsImage
        },
        {
          name: "Github",
          image:github
        },
      ],
    },
   
    
  ];
  
  
  export { skills };