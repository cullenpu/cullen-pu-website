import React from "react";
import "./App.css";

import Nav from "./components/nav.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";

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
