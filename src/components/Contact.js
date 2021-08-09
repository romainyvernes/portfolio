import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <header>
        <h2 className="headings-font">Contact</h2>
        <p>
          Have a question or want to work together? Leave your contact
          information below and I'll get back to you as soon as I can.
        </p>
      </header>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <textarea row="6" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
