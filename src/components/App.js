import React, { useEffect } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

  useEffect(() => {
    // set "visibility" window to 20% height vertically centered
    const config = {
      rootMargin: '-40% 0px -40% 0px'
    };
    // create observer to watch whether sections are within "visibility" window
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (entry.isIntersecting) { // section is visible
          // add class "active" to highlight corresponding header link of 
          // visible section
          document.querySelector(`.primary-header li a[href="#${id}"]`)
                  .parentElement
                  .classList
                  .add('active');
          handleSlideInOnScroll(entry.target);
        } else {
          document.querySelector(`.primary-header li a[href="#${id}"]`)
                  .parentElement
                  .classList
                  .remove('active');
        }
      });
    }, config);
    // apply observer to every section with an id
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    // remove observer when component dismounts
    return () => observer.disconnect();
  }, []);

  const handleSlideInOnScroll = (element) => {
    // terminate function if slide-in effect was already added once
    if (
      element.classList.contains("left-slide-in")
      || element.classList.contains("right-slide-in")
    ) {
      return;
    }

    // get all sections with ids from the document
    const sections = document.querySelectorAll('main section[id]');
    
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].id === element.id) { // look for matching element
        if (i % 2 === 0) { 
          // every other section starting with the first is slid in from the 
          // left
          element.classList.add("left-slide-in");
          // remove default opacity
          element.classList.remove("hidden");
        } else {
          // every other section starting with the second is slid in from the 
          // right
          element.classList.add("right-slide-in");
          // remove default opacity
          element.classList.remove("hidden");
        }
      }
    }
  };
  
  return (
    <div className="home">
      <section className="home-greeting" id="home">
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
          <section id="about" className="narrow space-out hidden">
            <About />
          </section>
          <section id="skills" className="skills space-out hidden">
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
          <section id="projects" className="projects space-out hidden">
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
          <section id="contact" className="narrow space-out hidden">
            <Contact />
          </section>
          <a href="#about" className="back-to-top">
            <FontAwesomeIcon icon='arrow-circle-up' />
          </a>
        </div>
      </main>
      <footer className="primary-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
