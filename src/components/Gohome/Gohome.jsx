import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import './Gohome.css'
class GoHome extends Component {
     navigate = () => {
          const { history } = this.props;
          history.push('/');
     }
     render() {
          const { location } = this.props;
          const whitebtn = location.pathname === '/';
          return (
               <button className={`go-home-btn ${whitebtn ? 'white-bkg' : 'gradient-bkg'}`} onClick={this.navigate} x>
                    <img className='home-icon'
                         src={whitebtn ? homeIconBlack : homeIconWhite}
                         alt='home-icon' />
               </button>
          )
     }
}
export default withRouter(GoHome);

