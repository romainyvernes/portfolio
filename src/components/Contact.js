import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const onChange = (event) => {
    const { name, value } = event.target;

    console.log(value)

    switch(name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    console.log(message)
  };
  
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
               autoComplete="off"
               value={name}
               onChange={onChange}
               required />
        <input type="email" 
               name="email" 
               placeholder="Email" 
               autoComplete="off"
               value={email}
               onChange={onChange}
               required />
        <textarea row="6" 
                  name="message" 
                  placeholder="Message"
                  value={message}
                  onChange={onChange}
                  required>
        </textarea>
        <button type="submit" onClick={onSubmitForm}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
