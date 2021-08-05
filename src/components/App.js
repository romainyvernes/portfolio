import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Greeting from './Greeting';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Particles from 'react-particles-js';
import snowballsConfig from '../config/snowballsConfig';

const App = () => {
  return (
    <div className="home">
      <Greeting />
      <main>
        <div className="particles-bg background">
          <Particles params={snowballsConfig} />
        </div>
        <div className="content">
          <header>
            <Navbar />
          </header>
          <About />
          <section className="projects">
            <h2>Projects</h2>
            <Project />
            <Project />
            <Project />
            <Project />
          </section>
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default App;
