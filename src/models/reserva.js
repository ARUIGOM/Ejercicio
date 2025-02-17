import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  number_of_people: Number,
  user_id: String,
  table_id: String,
  date: Date,
  time: Date,
})

export default mongoose.model("Reservation", reservationSchema);