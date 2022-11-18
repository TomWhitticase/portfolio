const nodemailer = require("nodemailer");

export default async (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "passivesoybean@gmail.com",
      pass: "thmagkmxqecyozln",
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: "passivesoybean@gmail.com",
    to: "tom.pe.wh@outlook.com",
    subject: `Portfolio Website Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Name:
    ${req.body.name}</p><p>Email:
    ${req.body.email}</p>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
};

// export default function (req, res) {

//   let nodemailer = require("nodemailer");

//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: "passivesoybean@gmail.com",
//       pass: "thmagkmxqecyozln",
//     },
//     secure: true,
//   });
//   const mailData = {
//     from: "passivesoybean@gmail.com",
//     to: "tom.pe.wh@outlook.com",
//     subject: `Portfolio Website Message From ${req.body.name}`,
//     text: req.body.message + " | Sent from: " + req.body.email,
//     html: `<div>${req.body.message}</div><p>Name:
//     ${req.body.name}</p><p>Email:
//     ${req.body.email}</p>`,
//   };
//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err);
//     else console.log(info);
//   });
//   res.status(200).json({});
// }
