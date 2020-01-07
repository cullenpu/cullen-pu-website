import React from "react";
import "./App.css";

import Nav from "./components/nav";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <About />
        <Projects />
        <Resume />
      </header>
    </div>
  );
}

export default App;
