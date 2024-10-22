import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Contact.css';

const Contact = () => {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text) => {
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText(''); // Reset after 2 seconds
    }, 2000);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    console.log('Form submitted');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="left-container">
          <h1>
            Contact
            <br />
            Information
          </h1>
          <div className="contact-details">
            <div>
              <h3>Address</h3>
              <p>No 17 PonnuvelPuram 4th street Ayanavaram Chennai-600023</p>
            </div>
            <div>
              <h3>Mobile Number</h3>
              <CopyToClipboard text="+918939075292" onCopy={() => handleCopy('+918939075292')}>
                <p className="clickable-number" title="Click to copy">
                  +918939075292
                </p>
              </CopyToClipboard>
              {copiedText === '+918939075292' && <span className="copied-tooltip">Copied!</span>}
            </div>
            <div>
              <h3>Email</h3>
              <CopyToClipboard text="dhinaashwin11@gmail.com" onCopy={() => handleCopy('dhinaashwin11@gmail.com')}>
                <p className="clickable-email" title="Click to copy">
                  dhinaashwin11@gmail.com
                </p>
              </CopyToClipboard>
              {copiedText === 'dhinaashwin11@gmail.com' && <span className="copied-tooltip">Copied!</span>}
            </div>
          </div>
        </div>

        <div className="contact-form right-container">
          <div className="contact-name-div">
            <h2 className="contact-name">Kiran Rup</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" className="Name" name="name" placeholder="Name" />
            <input type="email" className="Email" name="email" placeholder="Email" />
            <input type="number" name="mobile" className="mobile" placeholder="Phone Number" />
            <textarea name="message" className="message" placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
