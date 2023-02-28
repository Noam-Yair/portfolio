import React from 'react';
import './App.css';
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Home/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
