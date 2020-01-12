import React from "react";
import "./App.css";

import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";

function App() {
  return (
    <div className="App bg-light text-dark">
        <Home />
        <Nav>
          <About />
          <Projects />
        </Nav>
    </div>
  );
}

export default App;
