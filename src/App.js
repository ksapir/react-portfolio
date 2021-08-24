import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";

function App() {
    return (
        <div>
          <Header />
          <AboutMe />
          <MyWork />
          {/* <ContactMe />
          <Resume /> */}
        </div>
      );
}

export default App;
