import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Contact.css';

const Contact = () => {
  const [copiedText, setCopiedText] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleCopy = (text) => {
    setCopiedText(text);
    setTimeout(() => {
      setCopiedText(''); // Reset after 2 seconds
    }, 2000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://kiran-server.vercel.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left side with contact info */}
        <div className="left-container">
          <h1>Contact Information</h1>
          {/* Contact details */}
          <div className="contact-details">
            <h3>Address</h3>
            <p>Ayanavaram, Chennai-600023</p>
            <h3>Mobile Number</h3>
            <CopyToClipboard text="+916374800602" onCopy={() => handleCopy('+916374800602')}>
              <p className="clickable-number" title="Click to copy">+916374800602</p>
            </CopyToClipboard>
            {copiedText === '+916374800602' && <span className="copied-tooltip">Copied!</span>}
            <h3>Email</h3>
            <CopyToClipboard text="kiranrup05@gmail.com" onCopy={() => handleCopy('kiranrup05@gmail.com')}>
              <p className="clickable-email" title="Click to copy">kiranrup05@gmail.com</p>
            </CopyToClipboard>
            {copiedText === 'kiranrup05@gmail.com' && <span className="copied-tooltip">Copied!</span>}
          </div>
        </div>

        {/* Right side with contact form */}
        <div className="right-container">
          <div className="contact-form">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="number"
                name="mobile"
                placeholder="Phone Number"
                value={formData.mobile}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
