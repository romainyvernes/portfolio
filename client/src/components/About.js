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
        Software engineer with roughly 3 years of experience developing innovative web apps and integrating robust APIs. Collaborative team player delivering high-quality solutions by analyzing needs, designing features, and staying updated on trends. Strong problem-solving and communication skills, committed to impactful results with attention to detail and code quality.
      </p>
    </div>
  );
};

export default About;
