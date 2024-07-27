import mongoose from "mongoose";

const NewsLetterSchema = new mongoose.Schema({
  newsemail: { type: String, required: [true, "Email is required"] },
  createdAt: { type: Date, default: Date.now },
});

const newsLetter = mongoose.model("newsLetter", NewsLetterSchema);

export default newsLetter;
