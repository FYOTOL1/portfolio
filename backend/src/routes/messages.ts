import express, { Request, Response } from "express";
import Messages from "../models/message";
import { TMessage } from "../types/messagesType";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const getMessages = await Messages.find();

    return res.status(200).json(getMessages);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch messages" });
  }
});

router.post(
  "/",
  [body("message").notEmpty(), body("date").notEmpty()],
  async (req: Request, res: Response) => {
    try {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.status(400).json(result);
      }

      const body: TMessage = req.body;
      body.message = body.message.toLowerCase();

      const messageData = await Messages.create(body);

      return res.status(201).json(messageData);
    } catch (error) {
      return res.status(500).json({ error: "Failed to post messages" });
    }
  }
);

router.delete("/", async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;

    const message = await Messages.deleteMany();

    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete message" });
  }
});

export default router;
