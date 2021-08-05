import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <header>
        <h2>Contact</h2>
        <p></p>
      </header>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <input type="text" placeholder="Message"></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
