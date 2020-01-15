import React from "react";
import "./App.css";

import Nav from "./components/nav";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App text-dark">
      <Home />
      <Nav>
        <About />
        <Projects />
      </Nav>
    </div>
  );
}

export default App;
