import linkedin from "../../Images/linkedin.png";
import github from "../../Images/githubfooter.png";
import skype from "../../Images/skype.png";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="phone-email">
        <div className="phone-email-wrapper">
          <FaPhone size={20} className="phone-image" />
          <p className="phone-number">+91 9016038425</p>    
        </div>
        <div className="phone-email-wrapper">
          <MdEmail size={20} />
          <p>priyankalalkiya192@gmail.com</p>
        </div>
      </div>

      <div className="pages">
        <p>
          {" "}
          <Link
            id=""
            className="link"
            to="hero"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
          >
            Home
          </Link>
        </p>
        <p>
          {" "}
          <Link
            className="link"
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
          >
            About
          </Link>
        </p>

        <p>
          {" "}
          <Link
            className="link"
            to="skill"
            spy={true}
            smooth={true}
            offset={-90}
            duration={600}
          >
            Portfolio
          </Link>
        </p>

  <p>      <Link
          className="link"
          to="contact"
          spy={true}
          smooth={true}
          offset={-90}
          duration={600}
        >
          Contact
        </Link></p>
      </div>

      <div className="contact">
        <a
          href="https://www.linkedin.com/in/priyanka-lalakiya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img" src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/priyankalalkiya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="img" src={github} alt="GitHub" />
        </a>

        <img className="img" src={skype} alt="Skype" />
      </div>
    </div>
  );
};

export default Footer;
