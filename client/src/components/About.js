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
        I'm a software engineer with roughly 3 years of experience. Formerly an 
        administrative assistant, I switched careers during the pandemic. I 
        found free online resources to learn coding on my own (Harvard's CS50 
        course, FreeCodeCamp, and The Odin Project), and spent the next year and 
        a half putting together projects of various sizes to showcase my skills. 
        I quickly landed a position at Brightcove, a leading streaming video 
        platform, where I could prove my worth and grow as an engineer. As a 
        member of the Professional Services consulting team, I worked on projects 
        of all sizes, ranging from minor customizations on standardized company 
        products to full-scale SPAs.
      </p>
    </div>
  );
};

export default About;
