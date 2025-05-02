import { Request, Response } from "express";
import { Advertisement } from "../models/Advertisement";

export const createAdvertisement = async (req: Request, res: Response) => {
  try {
    const { creatorId, title, description, city, isAvailable, createdAt } = req.body;
    const advertisement = await Advertisement.create({creatorId, title, description, city, isAvailable, createdAt });
    res.status(201).json(advertisement);
  } catch (error) {
    res.status(500).json({ message: "Error creating advertisement", error });
  }
};

export const getAdvertisements = async (req: Request, res: Response) => {
  try {
    const advertisements = await Advertisement.findAll();
    res.status(200).json(advertisements);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving advertisements", error });
  }
};

export const updateAdvertisement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {creatorId, title, description, city, isAvailable, createdAt } = req.body;
    await Advertisement.update({creatorId, title, description, city, isAvailable, createdAt }, { where: { id } });
    const updatedAdvertisement = await Advertisement.findByPk(id);
    res.status(200).json(updatedAdvertisement);
  } catch (error) {
    res.status(500).json({ message: "Error updating advertisement", error });
  }
};

export const deleteAdvertisement = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Advertisement.destroy({ where: { id } });
    res.status(200).json({ message: "Advertisement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting advertisement", error });
  }
};