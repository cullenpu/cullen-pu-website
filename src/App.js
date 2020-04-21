import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

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
