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
      <form action="mailto:romainyvernes@gmail.com" 
            method="POST" 
            name="contact-form"
            encType="multipart/form-data">
        <input type="text" 
               name="name" 
               placeholder="Name" 
               size="50" 
               autoComplete="off" />
        <input type="email" 
               name="email" 
               placeholder="Email" 
               autoComplete="off" />
        <textarea row="6" name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
