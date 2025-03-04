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
        With three years of experience under my belt, I have developed dozens of creative web applications and incorporated as many APIs. I am a team player and enjoy collaborating with others to deliver top-notch solutions. I make it a point to thoroughly analyze requirements, design useful features, and keep up with the latest industry trends. With strong problem-solving abilities and effective communication skills, I am dedicated to achieving meaningful outcomes while paying close attention to detail and maintaining high standards of code quality.      </p>
    </div>
  );
};

export default About;
