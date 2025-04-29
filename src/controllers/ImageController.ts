// controllers/image.controller.ts
import { Request, Response } from "express";
import { Image } from "../models/Image";

export const createImage = async (req: Request, res: Response) => {
  try {
    const { type, userId, profileId, documentId, orderId, messageId, serviceId, uploadedAt } = req.body;
    const image = await Image.create({ type, userId, profileId, documentId, orderId, messageId, serviceId, uploadedAt });
    res.status(201).json(image);
  } catch (error) {
    res.status(500).json({ message: "Error creating image", error });
  }
};

export const getImages = async (req: Request, res: Response) => {
  try {
    const images = await Image.findAll();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving images", error });
  }
};

export const updateImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type, userId, profileId, documentId, orderId, messageId, serviceId, uploadedAt } = req.body;
    await Image.update({ type, userId, profileId, documentId, orderId, messageId, serviceId, uploadedAt }, { where: { id } });
    const updatedImage = await Image.findByPk(id);
    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: "Error updating image", error });
  }
};

export const deleteImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Image.destroy({ where: { id } });
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image", error });
  }
};