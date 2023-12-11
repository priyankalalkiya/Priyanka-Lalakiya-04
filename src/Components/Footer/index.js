import linkedin from "../../Images/linkedin.png";
import github from "../../Images/githubfooter.png";
import skype from "../../Images/skype.png";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="phone-email">
        <div className="phone-email-wrapper">
          <FaPhone size={20} />
          <p className="phone-number">+91 9016038425</p>
        </div>
        <div className="phone-email-wrapper">
          <MdEmail size={20} />
          <p>priyankalalkiya192@gmail.com</p>
        </div>
      </div>

      <div className="pages">
        <p className="link">Home</p>
        <p className="link">About</p>
        <p className="link"> Contact</p>
        <p className="link">Portfolio</p>
      </div>

      <div className="contact">
        <img className="img" src={linkedin} alt="LinkedIn" />
        <img className="img" src={github} alt="GitHub" />
        <img className="img" src={skype} alt="Skype" />
      </div>
    </div>
  );
};

export default Footer;
