import linkedin from '../../Images/linkedin.png';
import github from '../../Images/githubfooter.png';
import skype from '../../Images/skype.png';
import phone from '../../Images/phone.png';
import email from '../../Images/email.png';
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="phone-email">
   <p>+91 90160 38425</p>
        <p>priyankalalkiya192@gmail.com</p>
      </div>

      <div className="pages">
        <p className='link'>Home</p>
        <p className='link'>About</p>
        <p className='link'> Contact</p>
        <p className='link'>Portfolio</p>
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
