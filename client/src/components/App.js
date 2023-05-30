/* eslint-disable jsx-a11y/anchor-has-content */
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
import bootstrapLogo from '../assets/logos/bootstrap_logo.svg';
import expressLogo from '../assets/logos/express.js_logo.svg';
import mongodbLogo from '../assets/logos/mongodb_logo.svg';
import nodeLogo from '../assets/logos/node.js_logo.svg';
import passportLogo from '../assets/logos/passportjs_logo.svg';
import reduxLogo from '../assets/logos/redux_logo.svg';
import socketLogo from '../assets/logos/socket.io_logo.svg';
import typecriptLogo from '../assets/logos/typescript_logo.svg';
import sassLogo from '../assets/logos/sass_logo.svg';
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
                <Skill image={reactLogo} name="REACT" />
              </li>
              <li>
                <Skill image={typecriptLogo} name="TYPESCRIPT" />
              </li>
              <li>
                <Skill image={sassLogo} name="SASS" />
              </li>
              <li>
                <Skill image={expressLogo} name="EXPRESS" />
              </li>
              <li>
                <Skill image={nodeLogo} name="NODE.JS" />
              </li>
              <li>
                <Skill image={reduxLogo} name="REDUX" />
              </li>
              <li>
                <Skill image={mongodbLogo} name="MONDODB" />
              </li>
              <li>
                <Skill image={socketLogo} name="SOCKET.IO" />
              </li>
              <li>
                <Skill image={passportLogo} name="PASSPORT.JS" />
              </li>
              <li>
                <Skill image={bootstrapLogo} name="BOOTSTRAP" />
              </li>
              <li>
                <Skill image={webpackLogo} name="WEBPACK" />
              </li>
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
                <Skill image={gitLogo} name="GIT" />
              </li>
            </ul>
          </section>
          <section id="projects" className="projects space-out hidden">
            <h2 className="headings-font">Projects</h2>
            <div className="carousel-menu">
              <a href="#slide-1"></a>
              <a href="#slide-2"></a>
              <a href="#slide-3"></a>
              <a href="#slide-4"></a>
            </div>
            <ul>
              <li id="slide-1">
                <Project name="Odinbook" 
                         description="Full-stack social media app that showcases the use of MongoDB, Express.js, React, and Node.js"
                         subDescription="Note: initial load may be slow due to limitations in server's free tier subscription"
                         sourceCode="https://github.com/romainyvernes/odinbook_backend" 
                         liveApp="https://wispy-night-906.fly.dev/" />
              </li>
              <li id="slide-2">
                <Project name="Battleship" 
                         description="React-based render of the gameboard classic that demonstrates the use of factory functions and IIFEs with a simple AI as the opponent"
                         sourceCode="https://github.com/romainyvernes/battleship" 
                         liveApp="https://romainyvernes.github.io/battleship/" />
              </li>
              <li id="slide-3">
                <Project name="Shopping Cart" 
                         description="React-based app that emphasizes the use of reusable components in UI conceptualization and uses React Router DOM for multi-page navigation"
                         sourceCode="https://github.com/romainyvernes/shopping_cart" 
                         liveApp="https://romainyvernes.github.io/shopping_cart/" />
              </li>
              <li id="slide-4">
                <Project name="Todo List" 
                         description="Full-stack app with Firebase back-end that demonstrates the use of Webpack to create a minified production build"
                         sourceCode="https://github.com/romainyvernes/todo_list" 
                         liveApp="https://romainyvernes.github.io/todo_list/" />
              </li>
            </ul>
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
