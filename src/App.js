import React from "react";
// import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './styles/script.css';
import './styles/mobile.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
 
    return (
      <Router>
      <div>
          <header >
              <h1>Karen Pion</h1>
              <ul className="nav">
                  <li><NavLink to='/' exact={true} activeStyle={{color: "white"}}>About Me</NavLink></li>
                  <li><NavLink  to='/mywork' activeStyle={{color: "white"}}>My Work</NavLink></li>
                  <li><NavLink  to='/contact' activeStyle={{color: "white"}}>Contact me</NavLink></li>
                  <li><NavLink  to='/resume' activeStyle={{color: "white"}}>Resume</NavLink></li>
              </ul>
          </header>
      </div>
        <div className="App">
          <Switch>
          <Route exact path="/"><AboutMe /></Route>
          <Route exact path="/mywork"> <MyWork /></Route>
          <Route exact path="/contact"><ContactMe /></Route>
          <Route exact path="/resume"><Resume/></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
      );

}

export default App
