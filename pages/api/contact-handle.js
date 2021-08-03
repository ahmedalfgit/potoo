
require('dotenv').config()

export default function (req, res) {
    
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtp.gmail.com',
        auth: {
            user: 'bscenclosurescontact@gmail.com',
            pass: process.env.PASSWORD
        },
        secure: false,
        tls: {
          rejectUnauthorized:false
        }
    });

    const mailData = {
        from: 'sender@bscenclosures.com',
        to: 'ahmedalf75@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<p>Message: ${req.body.message}</p> 
        <p>Phone Number: ${req.body.phone} </p>
        <p>Email: ${req.body.email} </p>
        <p>Sent from: ${req.body.email}</p>
        <p>--------------------------------------</p>`
      }

      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })
      res.status(200)
}