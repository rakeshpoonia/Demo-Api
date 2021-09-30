// const nodemailer=require('nodemailer');

// const sendEmail=async options=>{
//     const transporter=nodemailer.createTransport({
//         host:process.env.EMAIL_HOST,
//         port:process.env.EMAIL_PORT,
//         auth:{
//             user:process.env.EMAIL_USERNAME,
//             password:process.env.EMAIL_PASSWORD

//         }
//     })
//     const mailOptions={
//         from:'rakesh poonia <ak@gmail.com>',
//         to:options.email,
//         subject:options.subject,
//         text:options.message
//     }
//     await transporter.sendMail(mailOptions);
// }
// module.exports=sendEmail;
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '44c99f20c9ec0a',
      pass: '94ac05de741005',
    },
  });
  const mailOptions = {
    from: 'rakesh poonia <rakesh@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transport.sendMail(mailOptions);
};
module.exports = sendEmail;
