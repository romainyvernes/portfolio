import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer flex-center">
      <ul className="social">
        <li>
          <a href="https://github.com/romainyvernes"
             target='_blank'
             rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/romainyvernes"
             target='_blank'
             rel='noreferrer'>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li>
          <a href="mailto:romainyvernes@gmail.com">
            <FontAwesomeIcon icon='envelope' />
          </a>
        </li>
      </ul>
      <p className="copyright">Romain Yvernes &copy; 2025</p>
    </div>
  );
};

export default Footer;
