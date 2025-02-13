import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
  description: String,
  authorization: String,
})

export default mongoose.model("Permission", permissionSchema);