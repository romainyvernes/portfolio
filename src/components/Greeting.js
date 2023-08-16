import React, { useCallback } from 'react';
/* component for animated background */
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
/* configuration options for animated background */
import polygonsConfig from '../config/polygonsConfig';
import '../styles/Greeting.css';

const Greeting = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine, "polygons")
    await loadFull(engine);
  }, []);

  return (
    <section className="greeting flex-center">
      <div className="particles-bg background">
        {/* <Particles options={polygonsConfig} init={particlesInit} /> */}
      </div>
      <div className="content flex-center">
        <div className="message">
          <h1 className="left-slide-in">
            Hello, I'm <span className="heading-highlight">Romain</span>.
          </h1>
          <h2 className="right-slide-in">I'm a software engineer</h2>
        </div>
        <a href="#about" className="arrow-down">
          <span className="flash"></span>
          <span className="flash"></span>
          <span className="flash"></span>
        </a>
      </div>
    </section>
  );
};

export default Greeting;
