export default function (req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "passivesoybean@gmail.com",
      pass: "thmagkmxqecyozln",
    },
    secure: true,
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
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).json({});
}
