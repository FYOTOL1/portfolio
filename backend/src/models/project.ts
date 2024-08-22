import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectName: String,
    projectLink: String,
    projectLogo: String,
    projectDescription: String,
    projectGithub: String,
    projectLevel: { type: String, enum: ["master", "epic", "legend"] },
  },
  { timestamps: true }
);

export default mongoose.models.project ||
  mongoose.model("project", projectSchema);
