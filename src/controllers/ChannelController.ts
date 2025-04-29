// controllers/channel.controller.ts
import { Request, Response } from "express";
import { Channel } from "../models/Channel";

export const createChannel = async (req: Request, res: Response) => {
  try {
    const channel = await Channel.create(req.body);
    res.status(201).json(channel);
  } catch (error) {
    res.status(500).json({ message: "Error creating channel", error });
  }
};

export const getChannels = async (req: Request, res: Response) => {
  try {
    const channels = await Channel.findAll();
    res.status(200).json(channels);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving channels", error });
  }
};

export const updateChannel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Channel.update(req.body, { where: { id } });
    const updatedChannel = await Channel.findByPk(id);
    res.status(200).json(updatedChannel);
  } catch (error) {
    res.status(500).json({ message: "Error updating channel", error });
  }
};

export const deleteChannel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Channel.destroy({ where: { id } });
    res.status(200).json({ message: "Channel deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting channel", error });
  }
};