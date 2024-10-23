const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Transporter for Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use another email service like Outlook, Yahoo, etc.
  auth: {
    user: 'dhinaashwin11@gmail.com', // Your Gmail account
    pass: 'zdsonclqrqpzeezi', // App-specific password or your account password
  },
});

app.post('/send-email', (req, res) => {
  const { name, email, mobile, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'dhinaashwin2024@gmail.com', // The recipient's email address
    subject: `New message from ${name}`,
    text: `You have a new message from:
           Name: ${name}
           Email: ${email}
           Mobile: ${mobile}
           Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Email not sent', error });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
