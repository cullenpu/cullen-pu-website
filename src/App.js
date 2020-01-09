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
      <header>
        <Home />
        <Nav>
          <About />
          <Projects />
          <Resume />
        </Nav>
      </header>
    </div>
  );
}

export default App;
