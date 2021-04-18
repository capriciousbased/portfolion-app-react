import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
//import component pages
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

const App = () => {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/skills" render={() => <Skill />} />
          <Route path="/projects" render={() => <Projects />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
