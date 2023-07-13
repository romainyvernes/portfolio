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
        I am a software engineer who has been working for approximately 3 years. During this time, I have been involved in developing creative web applications and incorporating reliable APIs. I am a team player and enjoy collaborating with others to deliver top-notch solutions. I make it a point to thoroughly analyze requirements, design useful features, and keep up with the latest industry trends. With strong problem-solving abilities and effective communication skills, I am dedicated to achieving meaningful outcomes while paying close attention to detail and maintaining high standards of code quality.      </p>
    </div>
  );
};

export default About;
