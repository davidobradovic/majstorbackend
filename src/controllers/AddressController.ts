// controllers/address.controller.ts
import { Request, Response } from "express";
import { Address } from "../models/Address";

export const createAddress = async (req: Request, res: Response) => {
  try {
    const { userId, name, lat, long, createdAt } = req.body;
    const address = await Address.create({ userId, name, lat, long, createdAt });
    res.status(201).json(address);
  } catch (error) {
    res.status(500).json({ message: "Error creating address", error });
  }
};

export const getAddresses = async (req: Request, res: Response) => {
  try {
    const addresses = await Address.findAll();
    res.status(200).json(addresses);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving addresses", error });
  }
};

export const updateAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId, name, lat, long, createdAt } = req.body;
    await Address.update({ userId, name, lat, long, createdAt }, { where: { id } });
    const updatedAddress = await Address.findByPk(id);
    res.status(200).json(updatedAddress);
  } catch (error) {
    res.status(500).json({ message: "Error updating address", error });
  }
};

export const deleteAddress = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Address.destroy({ where: { id } });
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting address", error });
  }
};