import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
  role: String, 
  permissions_id: String,
})

export default mongoose.model("Role", roleSchema);

