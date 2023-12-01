const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors());
app.use(express.json()); 

// app.use("/email", emailRoutes);

// async function sendEmail(email_sender, mail_get, date, time, numberPersonne) {
//     // Create a transporter using SMTP
//     // console.log("user", process.env.SMTP_MAIL, "password", process.env.SMTP_PASSWORD)
//     // let transporter = nodemailer.createTransport({
//     //   host: 'smtp.gmail.com', // Replace with your SMTP server
//     //   port: 587,
//     //   secure: false, // Set to true if using a secure connection (TLS/SSL)
//     //   auth: {
//     //     user: process.env.SMTP_MAIL, // Replace with your email address
//     //     pass: process.env.SMTP_PASSWORD // Replace with your email password
//     //   }
//     // });
  
//     // Prepare the email content
//     // let mailOptions = {
//     //   from: email_sender, // Replace with your email address
//     //   to: mail_get, // Replace with your recipient email address
//     //   subject: 'New Booking',
//     //   text: `Date: ${date}\nTime: ${time}\nNumber of people: ${numberPersonne}`
//     // };
  
//     // Send the email
//     // let info = await transporter.sendMail(mailOptions);
//     // console.log('Email sent:', info.messageId);
// }

// async function sendEmail_Contact_us(email_sender, mail_get, name, phoneNumber, message) {
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com', 
//     port: 587,
//     secure: false, 
//     auth: {
//       user: process.env.SMTP_MAIL,
//       pass: process.env.SMTP_PASSWORD
//     }
//   });

  
//   let mailOptions = {
//     from: email_sender,  
//     to: mail_get, 
//     subject: 'New message',
//     text: `Name: ${name}\nPhone number: ${phoneNumber}\nMessage: ${message}\n`
//   };

//   // Send the email
//   let info = await transporter.sendMail(mailOptions);
//   console.log('Email sent:', info.messageId);
// }

// app.post('/booked', (req, res) => {
//     const {name, email, date, time, numbers_person } = req.body;
//     sendEmail(process.env.SMTP_MAIL, email, date, time, numbers_person)
//       .then(() => {
//         res.send('Your reservation has been accepted');
//       })
//       .catch(error => {
//         console.error('Error sending email:', error);
//         res.status(500).send('An error occurred while sending the email');
//       });
//   });

//   app.post('/ContactUs', (req, res) => {
//     const {name, email, phoneNumber, message} = req.body;
//     sendEmail_Contact_us(email, process.env.SMTP_MAIL, name, phoneNumber, message)
//       .then(() => {
//         res.send('Your message sent successfully');
//       })
//       .catch(error => {
//         console.error('Error sending email:', error);
//         res.status(500).send('An error occurred while sending the email');
//       });
//   });

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(/*process.env.PORT*/ 5000, () => {
  console.log(`Example app listening on port 5000`);
});