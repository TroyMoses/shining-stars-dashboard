import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  stid: { type: String, required: true, unique: true},
  gender: { type: String, required: true },
  grade: { type: String, required: true },
  residence: { type: String, required: true },
  paymentCode: { type: Number, required: true },
  photo: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const StudentModel = mongoose.model("Student", StudentSchema);

export default StudentModel;
