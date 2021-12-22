import React from 'react';
import './Header.css';
const Header = ({ heading, details }) => {
     return (
          <div className='header-container'>
               <h1>{heading}</h1>
               <p className="head">{details}</p>
          </div>
     );
}
export default Header;