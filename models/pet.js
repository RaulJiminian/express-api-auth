import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  breed: { type: String },
});

export default mongoose.model("pets", petSchema);
