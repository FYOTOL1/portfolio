import mongoose from "mongoose";

const skillsSchema = new mongoose.Schema(
  {
    title: { type: String },
    rate: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.models.skills || mongoose.model("skills", skillsSchema);
