import React, { useEffect } from 'react';

import Header from '../components/Header.js'
import Introduction from '../components/Introduction.js'
import About from '../components/About.js'
import Skills from '../components/Skills.js'
import Experience from '../components/Experience.js'
import Projects from '../components/Projects.js'
import Footer from '../components/Footer.js'

export default function Home() {
  useEffect(() => { document.title = 'Sarah Calvis' }, []);

  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}