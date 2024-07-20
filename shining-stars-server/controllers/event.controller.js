import Event from "../mongodb/models/event.js";
import User from "../mongodb/models/user.js";
import Student from "../mongodb/models/student.js";

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllEvents = async (req, res) => {
  const { _end, _order, _start, _sort, activity_like = "" } = req.query;

  const query = {};

  if (activity_like) {
    query.activity = { $regex: activity_like, $options: "i" };
  }

  try {
    const count = await Event.countDocuments({ query });

    const events = await Event.find(query)
      .limit(_end)
      .skip(_start)
      .sort({ [_sort]: _order });

    res.header("x-total-count", count);
    res.header("Access-Control-Expose-Headers", "x-total-count");

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEventDetail = async (req, res) => {
  const { id } = req.params;
  const eventExists = await Event.findOne({ _id: id }).populate("creator");

  if (eventExists) {
    res.status(200).json(eventExists);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
};

const createEvent = async (req, res) => {
  try {
    const { activity, description, date, place, photo, email } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    const user = await User.findOne({ email }).session(session);

    if (!user) throw new Error("User not found");

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newEvent = await Event.create({
      activity,
      description,
      date,
      place,
      photo: photoUrl.url,
      creator: user._id,
    });

    user.allEvents.push(newEvent._id);
    await user.save({ session });

    await session.commitTransaction();

    res.status(200).json({ message: "Event created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { activity, description, date, place, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    await Event.findByIdAndUpdate(
      { _id: id },
      {
        activity,
        description,
        date,
        place,
        photo: photoUrl.url || photo,
      }
    );

    res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const eventToDelete = await Event.findById({ _id: id }).populate("creator");

    if (!eventToDelete) throw new Error("Event not found");

    const session = await mongoose.startSession();
    session.startTransaction();

    eventToDelete.remove({ session });
    eventToDelete.creator.allEvents.pull(eventToDelete);

    await eventToDelete.creator.save({ session });
    await session.commitTransaction();

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllEvents, getEventDetail, createEvent, updateEvent, deleteEvent };
