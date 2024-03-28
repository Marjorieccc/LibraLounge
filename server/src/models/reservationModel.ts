import mongoose, { Schema, Types } from "mongoose";
import { ResourceRevModel } from "../types/resource";

const reservationSchema = new Schema<ResourceRevModel>(
  {
    userID: String,
    resourceID: String,
    mediumID: String,
    time: Date,
  },
  { collection: "Reservation" }
);

const Reservation = mongoose.model<ResourceRevModel>(
  "Reservaion",
  reservationSchema
);

export default Reservation;
