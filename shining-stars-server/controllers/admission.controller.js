import Admission from "../mongodb/models/admission.js";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

const getAllAdmissions = async (req, res) => {
  const {
    _end,
    _order,
    _start,
    _sort,
    name_like = "",
  } = req.query;

  const query = {};

  if (name_like) {
    query.name = { $regex: name_like, $options: "i" };
  }

  try {
    const count = await Admission.countDocuments({ query });

    const admissions = await Admission.find(query)
      .limit(_end)
      .skip(_start)
      .sort({ [_sort]: _order });

    res.header("x-total-count", count);
    res.header("Access-Control-Expose-Headers", "x-total-count");

    res.status(200).json(admissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAdmission = async (req, res) => {
  try {
    const { name,
      admission_no,
      date_of_birth,
      age,
      gender,
      grade,
      residence,
      term,
      emis_no,
      parent_name,
      parent_email,
      parent_telephone,
      parent_relationship_with_pupil,
      parent_address,
      parent_village,
      parent_lc,
      parent_nin,
      next_of_kin_name,
      next_of_kin_gender,
      next_of_kin_telephone,
      next_of_kin_relationship_with_pupil,
      next_of_kin_address,
      next_of_kin_village,
      next_of_kin_lc,
      child_medical_info } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    const newAdmission = await Admission.create({
      name,
      admission_no,
      date_of_birth,
      age,
      gender,
      grade,
      residence,
      term,
      emis_no,
      parent_name,
      parent_email,
      parent_telephone,
      parent_relationship_with_pupil,
      parent_address,
      parent_village,
      parent_lc,
      parent_nin,
      next_of_kin_name,
      next_of_kin_gender,
      next_of_kin_telephone,
      next_of_kin_relationship_with_pupil,
      next_of_kin_address,
      next_of_kin_village,
      next_of_kin_lc,
      child_medical_info,
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
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Contact email content
    const emailContent2 = `
      <p>Dear Client,</p>
      <p>We thank you so much for contacting us.
      We promise to get back to you as soon as possible.</p>
      <p>Best regards,<br />Shining Stars</p>
    `;

    // Send email to school email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact message`,
      html: emailContent1,
    });

    // Send email to contact
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `New Contact message from ${email}`,
      html: emailContent2,
    });

    res.status(200).json({ message: "Contact created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllAdmissions,
};
