import newsLetter from "../mongodb/models/newsletter.js";
import nodemailer from "nodemailer";

import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const createNewsLetter = async (req, res) => {
  try {
    const { newsemail } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    const newNewsLetter = await newsLetter.create({
      newsemail,
    });

    await session.commitTransaction();

    // Set up nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // School email content
    const emailContent1 = `
      <p><strong>Email:</strong> ${newsemail}</p>
    `;

    // newsLetter email content
    const emailContent2 = `
      <p>Dear Client,</p>
      <p>Thank you so much for subscribing for our newsletter.
      We promise to give you information about all the news and events updates.</p>
      <p>Best regards,<br />Shining Stars</p>
    `;

    // Send email to school email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New NewsLetter`,
      html: emailContent1,
    });

    // Send email to contact
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `New email registered for newsletter: ${email}`,
      html: emailContent2,
    });

    res.status(200).json({ message: "NewsLetter created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createNewsLetter };
