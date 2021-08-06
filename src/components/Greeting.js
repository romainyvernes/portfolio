import React from 'react';
import Particles from 'react-particles-js';
import polygonsConfig from '../config/polygonsConfig';
import '../styles/Greeting.css';

const Greeting = () => {
  return (
    <section className="greeting flex-center">
      <div className="particles-bg background">
        <Particles params={polygonsConfig} />
      </div>
      <div className="content">
        <div className="message">
          <h1>Hello, I'm <span>Romain Yvernes</span>.</h1>
          <h2>I'm a front-end developer.</h2>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
