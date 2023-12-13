import React from 'react';
import { useState } from 'react';
import logo from '../Images/1logo.jpg';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <body>
    <nav className={`sticky-nav ${clicked ? 'active' : ''}`}>
        <div className='logo-container'>
          <img className='circle' src={logo} alt='My Logo' />
          <h2 className='nav-title'>Web Developer</h2>
          
      </div>
      <div>
        <ul id='navbar' className={clicked ? 'active' : ''}>
          <li><a className='active' href='##'>Home</a></li>
          <li><a href='##'>About</a></li>
          <li><a href='##'>Skills</a></li>
          <li><a href='##'>Project</a></li>
          <li><a href='##'>Contact</a></li>
        </ul>
      </div>
      <div id='mobile' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
    </body>
  );
};

export default Navbar;
