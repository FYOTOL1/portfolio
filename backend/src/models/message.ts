import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema(
  {
    message: { type: String },
    date: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.models.messages ||
  mongoose.model("messages", messagesSchema);
