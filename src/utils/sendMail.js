import dotenv from "dotenv";
import { createTransport } from "nodemailer";

dotenv.config();

export const sendMail = async (email, subject, text) => {
  const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: email.join(","),
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};
