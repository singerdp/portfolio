import React from 'react';

import { Link } from 'react-router-dom';
import './Home.css';
import vid from './../../assets/paatu.mp4'
const Home = () => {
     return (
          <div className='home-container'>
               <div>
               <video  autoPlay loop muted>
                         <source src={vid} type="video/mp4" />
                    </video>
               </div>
               <div className='header-text'>
                    <h1>DHINESH PANDI</h1>
                    <p>A Playback Singer</p>
               </div>
               <div className="button">
                    <Link to='/about' className="btn btn-white">
                         <p className="btn-text">About me</p></Link>
                    <Link to='/Contact' className="btn btn-transparent">
                         <p className='btn-text'>Contact me</p>
                    </Link>
               </div>
               
          </div>
     );
}
export default Home;