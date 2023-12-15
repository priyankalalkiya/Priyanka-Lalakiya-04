import React from 'react'
import { Link } from "react-scroll";
const Contectline = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };

  return (
    <div className='line_container'>
   <div className='text1'>
   <p>I'm avilable for work<span className='effect'>_</span></p>
   </div>
   <div className='text2 underline-title-text '>
   <Link 
              to="contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={600}
              onSetActive={handleSetActive}>Contect Me</Link>
</div>
    </div>
  )
}

export default Contectline