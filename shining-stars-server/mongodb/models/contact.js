import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

export default ContactModel;
