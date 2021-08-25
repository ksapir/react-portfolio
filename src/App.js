import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { Route, Link } from "react-router-dom";
import './styles/script.css'


function App() {
    return (
        <div className="App">
          <Header />
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/mywork" component={MyWork} />
          <Route exact path="/contact" component={ContactMe} />
          <Route exact path="/resume" component={Resume} />
          <Footer />
        </div>
      );
}

export default App;
