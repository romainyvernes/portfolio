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

export const SKILLS = {
  "REACT": reactLogo,
  "TYPESCRIPT": typecriptLogo,
  "SASS": sassLogo,
  "EXPRESS": expressLogo,
  "NODE.JS": nodeLogo,
  "REDUX": reduxLogo,
  "MONDODB": mongodbLogo,
  "SOCKET.IO": socketLogo,
  "PASSPORT.JS": passportLogo,
  "BOOTSTRAP": bootstrapLogo,
  "WEBPACK": webpackLogo,
  "JAVASCRIPT": javascriptLogo,
  "CSS3": cssLogo,
  "HTML5": htmlLogo,
  "GIT": gitLogo,
};

export const PROJECTS = [
  {
    name: "Odinbook",
    description: "Full-stack social media app that showcases the use of MongoDB, Express.js, React, and Node.js",
    subDescription: "Note: initial load may be slow due to limitations in server's free tier subscription",
    sourceCode: "https://github.com/romainyvernes/odinbook_backend",
    liveApp: "https://wispy-night-906.fly.dev/"
  },
  {
    name: "Battleship",
    description: "React-based render of the gameboard classic that demonstrates the use of factory functions and IIFEs with a simple AI as the opponent",
    sourceCode: "https://github.com/romainyvernes/battleship",
    liveApp: "https://romainyvernes.github.io/battleship/"
  },
  {
    name: "Shopping Cart",
    description: "React-based app that emphasizes the use of reusable components in UI conceptualization and uses React Router DOM for multi-page navigation",
    sourceCode: "https://github.com/romainyvernes/shopping_cart",
    liveApp: "https://romainyvernes.github.io/shopping_cart/"
  },
  {
    name: "Todo List",
    description: "Full-stack app with Firebase back-end that demonstrates the use of Webpack to create a minified production build",
    sourceCode: "https://github.com/romainyvernes/todo_list",
    liveApp: "https://romainyvernes.github.io/todo_list/"
  },
];