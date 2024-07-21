import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

export default ContactModel;
