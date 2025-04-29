// controllers/channelUser.controller.ts
import { Request, Response } from "express";
import { ChannelUser } from "../models/ChannelUser";

export const createChannelUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    const channelUser = await ChannelUser.create({ userId });
    res.status(201).json(channelUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating channel user", error });
  }
};

export const getChannelUsers = async (req: Request, res: Response) => {
  try {
    const channelUsers = await ChannelUser.findAll();
    res.status(200).json(channelUsers);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving channel users", error });
  }
};

export const updateChannelUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    await ChannelUser.update({ userId }, { where: { id } });
    const updatedChannelUser = await ChannelUser.findByPk(id);
    res.status(200).json(updatedChannelUser);
  } catch (error) {
    res.status(500).json({ message: "Error updating channel user", error });
  }
};

export const deleteChannelUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ChannelUser.destroy({ where: { id } });
    res.status(200).json({ message: "Channel user deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting channel user", error });
  }
};