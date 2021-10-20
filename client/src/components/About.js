import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <h2 className="headings-font">About</h2>
      <div className="person-icon">
        <FontAwesomeIcon icon={['far', 'user']} />
      </div>
      <p className="description">
        I'm a career switcher and I couldn't be happier I finally took the 
        leap. Formerly an administrative assistant, I decided to get into 
        coding after seeing several friends of mine with similar backgrounds 
        successfully making the transition. I enrolled in Harvard's CS50 
        course, completed a few certifications from FreeCodeCamp, and built two 
        dozen projects through The Odin Project's curriculum. And after 15 
        months of hard work and self-discipline, I am proud to call myself a 
        self-taught web developer.
      </p>
    </div>
  );
};

export default About;
