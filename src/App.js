import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./styles.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div id="head">
        <Header />
      </div>
      <div id="main">
        <div id="content">
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
