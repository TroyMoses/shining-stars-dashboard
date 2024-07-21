import Admission from "../mongodb/models/admission.js";
import User from "../mongodb/models/user.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllAdmissions = async (req, res) => {
  const {
    _end,
    _order,
    _start,
    _sort,
    name_like = "",
    title = "",
  } = req.query;

  const query = {};

  if (title !== "") {
    query.title = title;
  }

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

const getAdmissionDetail = async (req, res) => {
  const { id } = req.params;
  const admissionExists = await Admission.findOne({ _id: id }).populate(
    "creator"
  );

  if (admissionExists) {
    res.status(200).json(admissionExists);
  } else {
    res.status(404).json({ message: "Admission not found" });
  }
};


export {
  getAllAdmissions,
  getAdmissionDetail,
};
