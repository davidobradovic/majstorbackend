// controllers/subcategory.controller.ts
import { Request, Response } from "express";
import { Subcategory } from "../models/Subcategory"

export const createSubcategory = async (req: Request, res: Response) => {
  try {
    const { categoryId, title, createdAt, createdBy } = req.body;
    const subcategory = await Subcategory.create({ categoryId, title, createdAt, createdBy });
    res.status(201).json(subcategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating subcategory", error });
  }
};

export const getSubcategories = async (req: Request, res: Response) => {
  try {
    const subcategories = await Subcategory.findAll();
    res.status(200).json(subcategories);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving subcategories", error });
  }
};

export const updateSubcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { categoryId, title, createdAt, createdBy } = req.body;
    await Subcategory.update({ categoryId, title, createdAt, createdBy }, { where: { id } });
    const updatedSubcategory = await Subcategory.findByPk(id);
    res.status(200).json(updatedSubcategory);
  } catch (error) {
    res.status(500).json({ message: "Error updating subcategory", error });
  }
};

export const deleteSubcategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Subcategory.destroy({ where: { id } });
    res.status(200).json({ message: "Subcategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting subcategory", error });
  }
};