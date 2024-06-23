import mongoose from "mongoose";

const StaffSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  staffType: { type: String, required: true },
  photo: { type: String, required: true },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const StaffModel = mongoose.model("Staff", StaffSchema);

export default StaffModel;
