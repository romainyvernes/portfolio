import React, { useState, useEffect } from 'react';
/* stylesheet */
import '../styles/App.css';
/***********/
/* react components */
import Greeting from './Greeting';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Skill from './Skill';
/***********/
/* animated background */
import Particles from 'react-particles-js';
import snowballsConfig from '../config/snowballsConfig';
/***********/
/* fontawesome icons */
import '../assets/icons/fontawesome';
/***********/
/* skill logos */
import cssLogo from '../assets/logos/css3_logo.svg';
import gitLogo from '../assets/logos/git_logo.svg';
import reactLogo from '../assets/logos/react_logo.svg';
import javascriptLogo from '../assets/logos/javascript_logo.svg';
import webpackLogo from '../assets/logos/webpack_logo.svg';
import htmlLogo from '../assets/logos/html5_logo.svg';
/***********/

const App = () => {
  return (
    <div className="home">
      <section className="home-greeting">
        <Greeting />
      </section>
      <header className="primary-header">
        <Navbar />
      </header>
      <main>
        <div className="particles-bg background">
          <Particles params={snowballsConfig} />
        </div>
        <div className="content flex-center">
          <section id="about" className="narrow space-out">
            <About />
          </section>
          <section id="skills" className="space-out">
            <h2 className="headings-font">Skills</h2>
            <ul>
            <li>
                <Skill image={javascriptLogo} name="JAVASCRIPT" />
              </li>
              <li>
                <Skill image={cssLogo} name="CSS3" />
              </li>
              <li>
                <Skill image={htmlLogo} name="HTML5" />
              </li>
              <li>
                <Skill image={reactLogo} name="REACT" />
              </li>
              <li>
                <Skill image={webpackLogo} name="WEBPACK" />
              </li>
              <li>
                <Skill image={gitLogo} name="GIT" />
              </li>
            </ul>
          </section>
          <section id="projects" className="projects space-out">
            <h2 className="headings-font">Projects</h2>
            <Project name="Battleship" 
                     description="Play the gameboard classic against the computer."
                     sourceCode="https://github.com/romainyvernes/battleship" 
                     liveApp="https://romainyvernes.github.io/battleship/" />
            <Project name="Shopping Cart" 
                     description="Browse through the catalog of an online blu-ray store and buy your favorite movies and TV shows."
                     sourceCode="https://github.com/romainyvernes/shopping_cart" 
                     liveApp="https://romainyvernes.github.io/shopping_cart/"
                     detailsPlacement="left" />
            <Project name="Todo List" 
                     description="Keep track of your busy schedule in one place, from any device."
                     sourceCode="https://github.com/romainyvernes/todo_list" 
                     liveApp="https://romainyvernes.github.io/todo_list/" />
            <Project name="Library" 
                     description="Keep a log of your favorite books in one place and mark them as read to keep track of your past reads."
                     sourceCode="https://github.com/romainyvernes/library" 
                     liveApp="https://romainyvernes.github.io/library/"
                     detailsPlacement="left" />
          </section>
          <section id="contact" className="narrow space-out">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
