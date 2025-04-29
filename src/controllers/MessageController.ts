// controllers/message.controller.ts
import { Request, Response } from "express";
import { Message } from "../models/Message";

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { channelId, userId, content } = req.body;
    const message = await Message.create({ channelId, userId, content });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: "Error creating message", error });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving messages", error });
  }
};

export const updateMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { channelId, userId, content } = req.body;
    await Message.update({ channelId, userId, content }, { where: { id } });
    const updatedMessage = await Message.findByPk(id);
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json({ message: "Error updating message", error });
  }
};

export const deleteMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Message.destroy({ where: { id } });
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting message", error });
  }
};