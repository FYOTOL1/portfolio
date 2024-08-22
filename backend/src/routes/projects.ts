import express, { Request, Response } from "express";
import Project from "../models/project";
import { TProject } from "../types/projectsType";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const getProjects = await Project.find();

    return res.status(200).json(getProjects);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch projects" });
  }
});

router.get("/:projectId", async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const getProjects = await Project.findById(projectId);

    return res.status(200).json(getProjects);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch projects" });
  }
});

router.post(
  "/",
  [
    body("projectName").notEmpty(),
    body("projectLink").notEmpty().isURL(),
    body("projectLogo").notEmpty(),
    body("projectDescription").notEmpty(),
    body("projectGithub").notEmpty().isURL(),
    body("projectLevel").notEmpty().isIn(["epic", "master", "legend"]),
  ],
  async (req: Request, res: Response) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json(result);
      }

      const body: TProject = req.body;

      const projectData = await Project.create(body);

      return res.status(201).json(projectData);
    } catch (error) {
      return res.status(500).json({ error: "Failed to post project" });
    }
  }
);

router.delete("/:projectId", async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;

    const projectEdit = await Project.findOneAndDelete({ _id: projectId });

    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch projects" });
  }
});

export default router;
