import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Awards from './../Awards/Awards';
import Gohome from '../Gohome/Gohome';
import NavBar from './../NavBar/NavBar';
import Home from './../Home/Home';
import About from './../About/About'
import Songs from './../Songs/Songs';
import ContactApp from './../Contact/ContactApp';

const App = () => {
     return (
          <div >
             
               <HashRouter>
                    <div>
                         <NavBar />
                         <Route path='/' exact component={Home} />
                         <Route path='/About' component={About} />
                         <Route path='/Songs' component={Songs} />
                         <Route path='/Awards' component={Awards} />
                         <Route path='/ContactApp' component={ContactApp} />
                         <Gohome />
                    </div>
               </HashRouter>
          </div>
     );
};
export default App;