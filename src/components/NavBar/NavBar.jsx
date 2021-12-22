import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';
class NavBar extends React.Component {
     render() {
          const { location } = this.props;
          console.log(location);
          const homeClass = location.pathname === '/' ? 'active-item' : '';
          const aboutClass = location.pathname === '/About' ? 'active-item' : '';
          const songsClass = location.pathname === '/Songs' ? 'active-item' : '';
          const ContactClass = location.pathname === '/ContactApp' ? 'active-item' : '';
          return (

               <nav>
                    <ul className="nav-links">
                         <Link to="/" className={`menu-item ${homeClass}`} >HOME</Link>
                         <Link to="/About" className={`menu-item ${aboutClass}`}>ABOUT</Link>
                         <Link to="/Songs" className={`menu-item ${songsClass}`}>SONGS</Link>
                         <Link to="/ContactApp" className={`menu-item ${ContactClass}`}>CONTACT</Link>
                    </ul>
               </nav>
          );
     }
};
export default withRouter(NavBar);