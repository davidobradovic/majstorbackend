import { Request, Response } from "express";
import { Order } from "../models/Order";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { customerId, workerId, location,  phoneNumber ,phoneLocation, orderType, description, notes, paid, paidType, status, dueDate } = req.body;
    const order = await Order.create({ customerId, workerId, location,  phoneNumber ,phoneLocation, orderType, description, notes, paid, paidType, status, dueDate });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving orders", error });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Order.findByPk(id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  res.json(category);
};

export const getOrderByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Order.findAll({
    where: {
      customerId: id
    }
  });
  if (!category) return res.status(404).json({ message: 'Category not found' });
  res.json(category);
};

export const getOrderByWorkerId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await Order.findAll({
    where: {
      workerId: id
    }
  });
  if (!category) return res.status(404).json({ message: 'Category not found' });
  res.json(category);
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { customerId, workerId, location, phoneNumber ,phoneLocation, orderType, description, notes, paid, paidType, status, dueDate } = req.body;
    const order = await Order.update({ customerId, workerId, location, phoneNumber ,phoneLocation, orderType, description, notes, paid, paidType, status, dueDate }, { where: { id } });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Order.destroy({ where: { id } });
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error });
  }
};
