import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  name: String,
  table_number: Number,
  max_guests: Number,
})

export default mongoose.model("Table", tableSchema);