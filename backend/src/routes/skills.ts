import express, { Request, Response } from "express";
import Skills from "../models/skills";
import { TSkill } from "../types/skillsType";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const getSkills = await Skills.find();

    return res.status(200).json(getSkills);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch skills" });
  }
});

router.post(
  "/",
  [body("title").notEmpty(), body("rate").notEmpty().isInt()],
  async (req: Request, res: Response) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json(result);
      }

      const body: TSkill = req.body;
      body.title = body.title.toLowerCase();

      const skillData = await Skills.create(body);

      return res.status(201).json(skillData);
    } catch (error) {
      return res.status(500).json({ error: "Failed to post skills" });
    }
  }
);

router.delete("/:skillId", async (req: Request, res: Response) => {
  try {
    const { skillId } = req.params;

    const skillsEdit = await Skills.findOneAndDelete({ _id: skillId });

    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete skill" });
  }
});

export default router;
