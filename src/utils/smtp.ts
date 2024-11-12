import nodemailer from "nodemailer";

export const sendEmail = async (email: string, subject: string, html: string) => {
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
      to: email,
      subject: subject,
      html: html,
    };
  
    await transporter.sendMail(mailOptions);
  };