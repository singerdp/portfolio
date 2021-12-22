import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = ({ phrase, link, toAddress }) => {
     return (<div className='Footer-container'>
          {phrase}
          <Link to={toAddress} className='footer-link'>{link}</Link>
     </div>
     );

};
export default Footer;
