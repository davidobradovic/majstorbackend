// controllers/banner.controller.ts
import { Request, Response } from "express";
import { Banner } from "../models/Banner";

export const createBanner = async (req: Request, res: Response) => {
  try {
    const { url, expiringFor, expired, createdAt, createdBy } = req.body;
    const banner = await Banner.create({ url, expiringFor, expired, createdAt, createdBy });
    res.status(201).json(banner);
  } catch (error) {
    res.status(500).json({ message: "Error creating banner", error });
  }
};

export const getBanners = async (req: Request, res: Response) => {
  try {
    const banners = await Banner.findAll();
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving banners", error });
  }
};

export const updateBanner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { url, expiringFor, expired, createdAt, createdBy } = req.body;
    await Banner.update({ url, expiringFor, expired, createdAt, createdBy }, { where: { id } });
    const updatedBanner = await Banner.findByPk(id);
    res.status(200).json(updatedBanner);
  } catch (error) {
    res.status(500).json({ message: "Error updating banner", error });
  }
};

export const deleteBanner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Banner.destroy({ where: { id } });
    res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting banner", error });
  }
};