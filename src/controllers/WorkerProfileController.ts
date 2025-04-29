import { Request, Response } from "express";
import { WorkerProfile } from "../models/WorkerProfile";

export const createWorkerProfile = async (req: Request, res: Response) => {
  try {
    const { userId, description, status, verificationStatus } = req.body;
    const workerProfile = await WorkerProfile.create({ userId, description, status, verificationStatus });
    res.status(201).json(workerProfile);
  } catch (error) {
    res.status(500).json({ message: "Error creating worker profile", error });
  }
};

export const getWorkerProfiles = async (req: Request, res: Response) => {
  try {
    const workerProfiles = await WorkerProfile.findAll();
    res.status(200).json(workerProfiles);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving worker profiles", error });
  }
};

export const updateWorkerProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId, description, status, verificationStatus } = req.body;
    const workerProfile = await WorkerProfile.update({ userId, description, status, verificationStatus }, { where: { id } });
    res.status(200).json(workerProfile);
  } catch (error) {
    res.status(500).json({ message: "Error updating worker profile", error });
  }
};

export const deleteWorkerProfile = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await WorkerProfile.destroy({ where: { id } });
    res.status(200).json({ message: "Worker profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting worker profile", error });
  }
};
