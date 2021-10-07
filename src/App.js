import React from "react";
// import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './styles/script.css'
import './styles/mobile.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {
 
    return (
      <Router>
      <div>
          <header >
              <h1>Karen Pion</h1>
              <nav >
                  <OldSchoolMenuLink  activeOnlyWhenExact={true} to='/' label="About Me"></OldSchoolMenuLink>
                  <OldSchoolMenuLink  to='/mywork' label="My Work"></OldSchoolMenuLink>
                  <OldSchoolMenuLink  to='/contact'label="Contact Me"></OldSchoolMenuLink>
                  <OldSchoolMenuLink  to='/resume'label="Resume"></OldSchoolMenuLink>
              </nav>
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

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default App
