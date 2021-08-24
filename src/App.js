import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import ContactMe from "./components/ContactMe";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './styles/reset.css'
import './styles/script.css'


function App() {
    return (
        <div>
          <Header />
          <AboutMe />
          <MyWork />
          <ContactMe />
          <Resume />
          <Footer />
        </div>
      );
}

export default App;
