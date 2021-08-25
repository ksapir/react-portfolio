import React from "react";
// import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './styles/script.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const styles = {
  nav: {
      marginRight: '20px'
  },
  a: {
      marginRight: '5px',
      marginLeft: '5px'
  },
  header: {
    height: '200px'
  },

}

function App() {
    return (
      <Router>
      <div>
          <header style={styles.header}>
              <h1>Karen Pion</h1>
              <nav style={styles.nav}>
                  <OldSchoolMenuLink style={styles.a} activeOnlyWhenExact={true} to='/' label="About Me"></OldSchoolMenuLink>
                  <OldSchoolMenuLink style={styles.a} to='/mywork' label="My Work"></OldSchoolMenuLink>
                  <OldSchoolMenuLink style={styles.a} to='/contact'label="Contact Me"></OldSchoolMenuLink>
                  <OldSchoolMenuLink style={styles.a} to='/resume'label="Resume"></OldSchoolMenuLink>
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
