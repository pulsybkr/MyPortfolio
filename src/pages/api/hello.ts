import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
type Data = {
  html: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { html, subject } = req.body;
  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST || "",
    port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || "2525"),
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER || "",
      pass: process.env.NEXT_PUBLIC_SMTP_PWD || "",
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SMTP_EMAIL_FROM || "",
    to: process.env.NEXT_PUBLIC_SMTP_EMAIL_FROM,
    subject: subject || "Demande de contact",
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully", info);

    return res.status(200).json({ message: "Success: email was sent" });
  } catch (error) {
    console.log("Error sending email:", error);
    return res.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
