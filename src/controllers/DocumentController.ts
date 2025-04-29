// controllers/document.controller.ts
import { Request, Response } from "express";
import { Document } from "../models/Document";

export const createDocument = async (req: Request, res: Response) => {
  try {
    const { userId, documentType, createdAt } = req.body;
    const document = await Document.create({ userId, documentType, createdAt });
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: "Error creating document", error });
  }
};

export const getDocuments = async (req: Request, res: Response) => {
  try {
    const documents = await Document.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving documents", error });
  }
};

export const updateDocument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId, documentType, createdAt } = req.body;
    await Document.update({ userId, documentType, createdAt }, { where: { id } });
    const updatedDocument = await Document.findByPk(id);
    res.status(200).json(updatedDocument);
  } catch (error) {
    res.status(500).json({ message: "Error updating document", error });
  }
};

export const deleteDocument = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Document.destroy({ where: { id } });
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting document", error });
  }
};