
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos <= 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`fixed z-[998] w-full px-20 py-8 font-["Neue_Montreal"] flex justify-between items-center transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
      <div className='logo'>
        <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content */}
        </svg>
      </div>
      <div className='links flex gap-10 '>
        {["Home", "Detection", "FeedBack", "Insights", "Contact"].map((item, index) => (
          <Link 
            key={index} 
            to={`/${item.replace(/\s+/g, '').toLowerCase()}`} 
            className={`text-lg capitalize font-light ${index === 3 && "ml-32"}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div> 
  );
}

export default Navbar;
