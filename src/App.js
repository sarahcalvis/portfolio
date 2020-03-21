import React, { useEffect } from 'react';

import Header from './components/Header.js'
import Introduction from './components/Introduction.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Experience from './components/Experience.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'

function App() {
  useEffect(() => { document.title = 'Sarah Calvis - Software Develper - Cleveland' }, []);

  return (
    <div className="App">
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <h5>h5</h5>
      <h6>h6</h6>
      <p>p</p>
      <header className="App-header">
        <Header />
        <Introduction />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </header>
    </div>
  );
}

export default App;
