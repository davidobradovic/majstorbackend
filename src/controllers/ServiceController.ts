import { Request, Response } from "express";
import { Service } from "../models/Service";

export const createService = async (req: Request, res: Response) => {
  try {
    const { categoryId, subcategoryId, workerId, description, basePrice, isAvailable } = req.body;
    const service = await Service.create({ categoryId, subcategoryId, workerId, description, basePrice, isAvailable });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error creating service", error });
  }
};

export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving services", error });
  }
};

export const updateService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { categoryId, subcategoryId, workerId, description, basePrice, isAvailable } = req.body;
    const service = await Service.update({ categoryId, subcategoryId, workerId, description, basePrice, isAvailable }, { where: { id } });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error updating service", error });
  }
};

export const deleteService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Service.destroy({ where: { id } });
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting service", error });
  }
};
