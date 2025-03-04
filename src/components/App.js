import React, { useEffect, useCallback } from 'react';
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
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import snowballsConfig from '../config/snowballsConfig';
/***********/
/* fontawesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/***********/
import { SKILLS } from '../utils/constants';

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

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
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
          <Particles init={particlesInit} options={snowballsConfig} />
        </div>
        <div className="content flex-center">
          <section id="about" className="narrow space-out hidden">
            <About />
          </section>
          <section id="skills" className="skills space-out hidden">
            <h2 className="headings-font">Skills</h2>
            <ul>
              {
                Object.entries(SKILLS).map(([name, logo]) => (
                  <li><Skill image={logo} name={name} /></li>
                ))
              }
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
